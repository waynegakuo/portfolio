import { Component, inject } from '@angular/core';
import { COMMUNITIES, PAGE_SEO } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.html',
  styleUrl: './communities.scss',
})
export class CommunitiesPage {
  private readonly seo = inject(SeoService);
  readonly communities = COMMUNITIES;

  constructor() {
    this.seo.set(PAGE_SEO.communities);
  }
}
