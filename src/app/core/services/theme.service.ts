import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
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
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.restore();
    afterNextRender(() => this.restore());
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

  private restore(): void {
    this.apply(this.readStored() ?? 'light', false);
  }

  private readStored(): ThemeMode | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch {
      return null;
    }
  }

  private apply(theme: ThemeMode, persist = true): void {
    this.theme.set(theme);
    const root = this.document.documentElement;
    if (root?.dataset) {
      root.dataset['theme'] = theme;
    } else {
      root?.setAttribute('data-theme', theme);
    }
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#121110' : '#f3efe6',
    );
    if (!persist || !isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private mode can block storage; the in-session theme still applies.
    }
  }
}
