import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FIREBASE_WEB } from '../data/analytics';

type GtagFn = (...args: unknown[]) => void;

type AnalyticsWindow = Window & {
  dataLayer: unknown[];
  gtag: GtagFn;
};

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private installed = false;
  private lastPath = '';

  constructor() {
    const measurementId = FIREBASE_WEB.measurementId;
    if (!isPlatformBrowser(this.platformId) || !measurementId) {
      return;
    }

    const win = this.document.defaultView;
    if (!win || this.isLocal(win.location.hostname)) {
      return;
    }

    this.install(win as unknown as AnalyticsWindow, measurementId);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.pageview(event.urlAfterRedirects));
    afterNextRender(() => this.pageview(this.router.url));
  }

  private isLocal(hostname: string): boolean {
    return hostname === 'localhost' || hostname === '127.0.0.1';
  }

  private install(win: AnalyticsWindow, id: string): void {
    win.dataLayer = win.dataLayer ?? [];
    win.gtag = function gtag() {
      win.dataLayer.push(arguments);
    };
    win.gtag('js', new Date());
    win.gtag('config', id, { send_page_view: false });

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    this.document.head.appendChild(script);
    this.installed = true;
  }

  private pageview(path: string): void {
    if (!this.installed || path === this.lastPath) {
      return;
    }

    this.lastPath = path;
    const win = this.document.defaultView as unknown as AnalyticsWindow | null;
    const measurementId = FIREBASE_WEB.measurementId;
    if (!win?.gtag || !measurementId) {
      return;
    }

    win.gtag('event', 'page_view', {
      send_to: measurementId,
      page_path: path,
      page_title: this.title.getTitle(),
      page_location: this.document.location.href,
    });
  }
}
