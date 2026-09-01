import { NgOptimizedImage } from '@angular/common';
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
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly site = SITE;
  readonly socials = SOCIAL_LINKS;
  readonly practices = PRACTICES;
  readonly media = MEDIA_FEATURES;
  readonly featured = PROJECTS.filter((project) => project.featured);
  readonly experience = EXPERIENCE.slice(0, 3);
  readonly stack = TECH_STACK;
  readonly communities = COMMUNITIES;
  readonly education = EDUCATION;
  readonly playing = signal<string | null>(null);

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
