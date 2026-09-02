import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import type { Analytics } from 'firebase/analytics';
import { filter } from 'rxjs';
import { FIREBASE_WEB } from '../data/analytics';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private analytics: Analytics | null = null;
  private logPageView: ((path: string) => void) | null = null;
  private lastPath = '';
  private pendingPath: string | null = null;

  constructor() {
    if (!isPlatformBrowser(this.platformId) || !FIREBASE_WEB.appId || !FIREBASE_WEB.apiKey) {
      return;
    }

    const win = this.document.defaultView;
    if (!win || this.isLocal(win.location.hostname)) {
      return;
    }

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.pageview(event.urlAfterRedirects));
    afterNextRender(() => this.pageview(this.router.url));
    void this.init();
  }

  private isLocal(hostname: string): boolean {
    return hostname === 'localhost' || hostname === '127.0.0.1';
  }

  private async init(): Promise<void> {
    try {
      const [{ initializeApp, getApps }, analytics] = await Promise.all([
        import('firebase/app'),
        import('firebase/analytics'),
      ]);

      if (!(await analytics.isSupported())) {
        return;
      }

      const app = getApps()[0] ?? initializeApp(FIREBASE_WEB);
      this.analytics = analytics.initializeAnalytics(app, {
        config: { send_page_view: false },
      });
      this.logPageView = (path: string) => {
        if (!this.analytics) {
          return;
        }

        analytics.logEvent(this.analytics, 'page_view', {
          page_path: path,
          page_title: this.title.getTitle(),
          page_location: this.document.location.href,
        });
      };

      if (this.pendingPath) {
        const path = this.pendingPath;
        this.pendingPath = null;
        this.pageview(path);
      }
    } catch {
      this.analytics = null;
      this.logPageView = null;
    }
  }

  private pageview(path: string): void {
    if (path === this.lastPath) {
      return;
    }

    if (!this.logPageView) {
      this.pendingPath = path;
      return;
    }

    this.lastPath = path;
    this.logPageView(path);
  }
}
