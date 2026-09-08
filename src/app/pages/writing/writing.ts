import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ARTICLE_FILTERS, DEV_TO, PAGE_SEO } from '../../core/data/portfolio.data';
import { articleMatchesFilter, ArticlesService } from '../../core/services/articles.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-writing',
  imports: [DatePipe],
  templateUrl: './writing.html',
  styleUrl: './writing.scss',
})
export class WritingPage {
  private readonly seo = inject(SeoService);
  private readonly articlesService = inject(ArticlesService);

  readonly profileUrl = DEV_TO.profileUrl;
  readonly filters = ARTICLE_FILTERS;
  readonly filter = signal<(typeof ARTICLE_FILTERS)[number]>('All');
  readonly articles = computed(() => {
    const active = this.filter();
    return this.articlesService
      .articles()
      .filter((article) => articleMatchesFilter(article, active));
  });

  constructor() {
    this.seo.set(PAGE_SEO.writing);
  }
}
