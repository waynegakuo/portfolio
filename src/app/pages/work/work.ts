import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PAGE_SEO, PROJECT_FILTERS, PROJECTS } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';
import {
  CARD_IMAGE,
  CARD_IMAGE_SIZES,
  RESPONSIVE_WEBP_WIDTHS,
  webpSrc,
} from '../../core/utils/image.util';

@Component({
  selector: 'app-work',
  imports: [NgOptimizedImage],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkPage {
  private readonly seo = inject(SeoService);
  readonly filters = PROJECT_FILTERS;
  readonly filter = signal<(typeof PROJECT_FILTERS)[number]>('All');
  readonly projects = computed(() => {
    const active = this.filter();
    return active === 'All' ? PROJECTS : PROJECTS.filter((project) => project.tags.includes(active));
  });
  readonly cardImageSizes = CARD_IMAGE_SIZES;
  readonly cardImage = CARD_IMAGE;
  readonly responsiveWidths = RESPONSIVE_WEBP_WIDTHS;
  readonly webpSrc = webpSrc;

  constructor() {
    this.seo.set(PAGE_SEO.work);
  }
}
