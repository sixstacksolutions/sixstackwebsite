/**
 * Re-encodes everything under public/images into WebP next to the original.
 *
 * The site is a static export on Cloudflare Pages, so there is no image
 * optimizer at request time — whatever is committed is exactly what ships.
 * Photographs fetched at full quality were running 250–400 KB each, which is
 * what made the panels feel slow on first paint.
 *
 * WebP at q72 lands the same pictures around a quarter of the weight with no
 * visible difference at the sizes they are displayed. The JPEG is kept beside
 * it so <picture> can fall back, and so nothing breaks if a browser without
 * WebP support ever shows up.
 *
 * Run with: npm run images
 */
import { readdir, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

/** Longest edge we ever actually display, per folder, times two for retina. */
const MAX_EDGE = {
  heroes: 2000, // full-bleed banner, 1600 css wide
  services: 1100, // 4:5 panel, ~450 css wide
  industries: 1100, // 4:3 panel, ~430 css wide
  projects: 1100,
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (n) => Math.round(n / 1024);
let beforeTotal = 0;
let afterTotal = 0;
const rows = [];

for await (const file of walk(root)) {
  if (![".jpg", ".jpeg", ".png"].includes(extname(file).toLowerCase())) continue;

  const folder = file.split(/[\\/]/).at(-2);
  const maxEdge = MAX_EDGE[folder] ?? 1600;
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");

  const before = (await stat(file)).size;
  const img = sharp(file);
  const meta = await img.metadata();

  await img
    .resize({
      width: Math.min(meta.width ?? maxEdge, maxEdge),
      withoutEnlargement: true,
    })
    .webp({ quality: 72, effort: 6 })
    .toFile(out);

  const after = (await stat(out)).size;
  beforeTotal += before;
  afterTotal += after;
  rows.push(
    `${folder}/${file.split(/[\\/]/).pop()}  ${kb(before)}K -> ${kb(after)}K  (-${Math.round(
      (1 - after / before) * 100
    )}%)`
  );
}

rows.sort().forEach((r) => console.log("  " + r));
console.log(
  `\n  TOTAL  ${kb(beforeTotal)}K -> ${kb(afterTotal)}K  ` +
    `(-${Math.round((1 - afterTotal / beforeTotal) * 100)}%)`
);
