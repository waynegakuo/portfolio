import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGE_SEO } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFoundPage {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.set(PAGE_SEO.notFound);
  }
}
