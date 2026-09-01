import { Component, inject } from '@angular/core';
import { EXPERIENCE, PAGE_SEO } from '../../core/data/portfolio.data';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperiencePage {
  private readonly seo = inject(SeoService);
  readonly jobs = EXPERIENCE;

  constructor() {
    this.seo.set(PAGE_SEO.experience);
  }
}
