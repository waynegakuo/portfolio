import { existsSync, readdirSync, statSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve('public/assets/img');
const WIDTHS = [400, 800];
const CARD_WIDTH = 800;
const CARD_HEIGHT = 420;

const PORTRAIT = join(ROOT, 'profile_portrait.jpg');
const PROJECTS = readdirSync(join(ROOT, 'projects'), { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name))
  .map((entry) => join(ROOT, 'projects', entry.name));

async function optimizePortrait(sourcePath) {
  if (!existsSync(sourcePath)) {
    console.warn(`Skipping missing file: ${sourcePath}`);
    return;
  }

  const dir = dirname(sourcePath);
  const stem = basename(sourcePath, extname(sourcePath));
  const { width: srcW, height: srcH } = await sharp(sourcePath).metadata();

  for (const width of WIDTHS) {
    const height = Math.round((width * srcH) / srcW);
    const target = join(dir, `${stem}-${width}.webp`);
    await sharp(sourcePath)
      .rotate()
      .resize({ width, height, fit: 'inside' })
      .webp({ quality: 82 })
      .toFile(target);

    const size = statSync(target).size;
    console.log(`Wrote ${target} (${width}x${height}, ${Math.round(size / 1024)} KiB)`);
  }
}

async function optimizeProjectCard(sourcePath) {
  if (!existsSync(sourcePath)) {
    console.warn(`Skipping missing file: ${sourcePath}`);
    return;
  }

  const dir = dirname(sourcePath);
  const stem = basename(sourcePath, extname(sourcePath));

  for (const width of WIDTHS) {
    const height = Math.round((width * CARD_HEIGHT) / CARD_WIDTH);
    const target = join(dir, `${stem}-${width}.webp`);
    await sharp(sourcePath)
      .rotate()
      .resize({ width, height, fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(target);

    const size = statSync(target).size;
    console.log(`Wrote ${target} (${width}x${height}, ${Math.round(size / 1024)} KiB)`);
  }
}

await optimizePortrait(PORTRAIT);

for (const sourcePath of PROJECTS) {
  await optimizeProjectCard(sourcePath);
}

console.log('Image optimization complete.');
