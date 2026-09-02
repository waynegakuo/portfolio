import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const from = resolve('dist/portfolio-ssr/browser/404/index.html');
const to = resolve('dist/portfolio-ssr/browser/404.html');

if (!existsSync(from)) {
  throw new Error(`Missing prerendered 404 page at ${from}`);
}

copyFileSync(from, to);
console.log(`Copied Firebase 404 page to ${to}`);
