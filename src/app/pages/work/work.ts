import { Component, computed, inject, signal } from '@angular/core';
import { PAGE_SEO, PROJECT_FILTERS, PROJECTS } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-work',
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

  constructor() {
    this.seo.set(PAGE_SEO.work);
  }
}
