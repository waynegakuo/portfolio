import { httpResource } from '@angular/common/http';
import { Injectable, computed } from '@angular/core';
import { ARTICLES, DEV_TO } from '../data/portfolio.data';
import { Article } from '../models/portfolio.model';

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[] | string;
}

const AI_TAGS = new Set(['ai', 'gemini', 'genkit', 'rag', 'agents', 'buildwithai']);
const JS_TAGS = new Set(['javascript', 'es6', 'es2020', 'vannillajs']);

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private readonly remote = httpResource<DevToArticle[]>(() => DEV_TO.articlesApi, {
    defaultValue: [],
  });

  readonly articles = computed(() => {
    const mapped = mapArticles(this.remote.value());
    return mapped.length > 0 ? mapped : ARTICLES;
  });

  readonly featured = computed(() => this.articles().slice(0, 3));
}

export function articleMatchesFilter(article: Article, filter: string): boolean {
  if (filter === 'All') {
    return true;
  }

  const tags = article.tags.map((tag) => tag.toLowerCase());

  switch (filter) {
    case 'Angular':
      return tags.includes('angular');
    case 'AI':
      return tags.some((tag) => AI_TAGS.has(tag));
    case 'JavaScript':
      return tags.some((tag) => JS_TAGS.has(tag));
    case 'Firebase':
      return tags.includes('firebase');
    default:
      return tags.includes(filter.toLowerCase());
  }
}

function mapArticles(payload: DevToArticle[] | undefined): Article[] {
  if (!payload?.length) {
    return [];
  }

  return payload
    .filter((article) => article.title.trim() !== '[Boost]')
    .map((article) => ({
      id: article.id,
      title: article.title,
      description: article.description.trim(),
      url: article.url,
      image: article.cover_image || article.social_image,
      publishedAt: article.published_at,
      readingTime: article.reading_time_minutes,
      tags: normalizeTags(article.tag_list),
    }));
}

function normalizeTags(tagList: string[] | string): string[] {
  if (Array.isArray(tagList)) {
    return tagList;
  }

  return tagList
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}
