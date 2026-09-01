import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, SITE } from '../../core/data/portfolio.data';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly theme = inject(ThemeService);
  readonly site = SITE;
  readonly links = NAV_LINKS;
  readonly menuOpen = signal(false);

  close(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
