import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { ThemeMode } from '../models/portfolio.model';

const STORAGE_KEY = 'wg-theme';

type ViewTransitionUpdate = (() => void) | { update: () => void; types?: string[] };

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: ViewTransitionUpdate) => unknown;
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<ThemeMode>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = this.document.documentElement.dataset['theme'] as ThemeMode | undefined;
      const valid = stored === 'dark' || stored === 'light' ? stored : this.preferred();
      this.apply(valid, false);
    }
  }

  toggle(): void {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    if (!isPlatformBrowser(this.platformId)) {
      this.apply(next);
      return;
    }

    const doc = this.document as ViewTransitionDocument;
    const reduced = this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && typeof doc.startViewTransition === 'function') {
      try {
        doc.startViewTransition({
          update: () => this.apply(next),
          types: ['theme'],
        });
      } catch {
        doc.startViewTransition(() => this.apply(next));
      }
      return;
    }

    this.apply(next);
  }

  private preferred(): ThemeMode {
    return this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private apply(theme: ThemeMode, persist = true): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    if (persist && isPlatformBrowser(this.platformId)) {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
    }
  }
}
