import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'work', renderMode: RenderMode.Prerender },
  { path: 'experience', renderMode: RenderMode.Prerender },
  { path: 'communities', renderMode: RenderMode.Prerender },
  { path: 'education', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];
