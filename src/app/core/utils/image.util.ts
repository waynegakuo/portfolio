import { ImageLoaderConfig } from '@angular/common';

const RASTER = /\.(png|jpe?g)$/i;

/** Width descriptors for NgOptimizedImage — URLs are resolved by `responsiveWebpLoader`. */
export const RESPONSIVE_WEBP_WIDTHS = '400w, 800w';

export function webpSrc(path: string): string {
  return path.replace(RASTER, '-800.webp');
}

/** Maps `-800.webp` ngSrc values to `-{width}.webp` variants generated at build time. */
export function responsiveWebpLoader(config: ImageLoaderConfig): string {
  const { src, width } = config;
  if (!width) {
    return src;
  }
  return src.replace(/-\d+\.webp$/, `-${width}.webp`);
}

export const CARD_IMAGE_SIZES = '(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw';
export const PORTRAIT_IMAGE_SIZES = '(max-width: 760px) min(100vw - 2.5rem, 368px), 368px';

/** Intrinsic dimensions of the `-800.webp` variants (must match `optimize-images.mjs`). */
export const CARD_IMAGE = { width: 800, height: 420 } as const;
export const PORTRAIT_IMAGE = { width: 800, height: 750 } as const;

/** Dev.to card thumbnails — smaller than the default embed width. */
export function devToCardImage(url: string): string {
  return url.replace(/width=\d+/i, 'width=640').replace(/height=\d+/i, 'height=270');
}
