import { Component, inject } from '@angular/core';
import { EDUCATION, PAGE_SEO } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationPage {
  private readonly seo = inject(SeoService);
  readonly items = EDUCATION;

  constructor() {
    this.seo.set(PAGE_SEO.education);
  }
}
