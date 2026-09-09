import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  COMMUNITIES,
  EDUCATION,
  EXPERIENCE,
  MEDIA_FEATURES,
  PAGE_SEO,
  PROJECTS,
  SITE,
  SOCIAL_LINKS,
  PRACTICES,
  TECH_STACK,
} from '../../core/data/portfolio.data';
import { ArticlesService } from '../../core/services/articles.service';
import { SeoService } from '../../core/services/seo.service';
import {
  CARD_IMAGE,
  CARD_IMAGE_SIZES,
  PORTRAIT_IMAGE,
  PORTRAIT_IMAGE_SIZES,
  RESPONSIVE_WEBP_WIDTHS,
  webpSrc,
} from '../../core/utils/image.util';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly articlesService = inject(ArticlesService);

  readonly site = SITE;
  readonly socials = SOCIAL_LINKS;
  readonly practices = PRACTICES;
  readonly media = MEDIA_FEATURES;
  readonly featured = PROJECTS.filter((project) => project.featured);
  readonly featuredWriting = this.articlesService.featured;
  readonly experience = EXPERIENCE.slice(0, 3);
  readonly stack = TECH_STACK;
  readonly communities = COMMUNITIES;
  readonly education = EDUCATION;
  readonly playing = signal<string | null>(null);
  readonly responsiveWidths = RESPONSIVE_WEBP_WIDTHS;
  readonly portraitSizes = PORTRAIT_IMAGE_SIZES;
  readonly portraitImage = PORTRAIT_IMAGE;
  readonly cardImageSizes = CARD_IMAGE_SIZES;
  readonly cardImage = CARD_IMAGE;
  readonly webpSrc = webpSrc;

  constructor() {
    this.seo.set(PAGE_SEO.home);
  }

  play(id: string): void {
    this.playing.set(id);
  }

  thumb(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  embed(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
    );
  }
}
