#!/usr/bin/env node
/**
 * Pivot Cycles Scraper
 *
 * Stahuje data a obrázky z pivotcycles.com pro flowcycles.cz
 *
 * Použití:
 *   node scripts/scrape-pivot.mjs              # Stáhne všechna kola
 *   node scripts/scrape-pivot.mjs --slug=phoenix  # Stáhne jen Phoenix
 *   node scripts/scrape-pivot.mjs --images-only   # Jen obrázky (přeskočí JSON)
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const BASE_URL = "https://www.pivotcycles.com/en-zz/bikes";
const CLOUDINARY_BASE = "https://res.cloudinary.com/dh826anba/image/upload";
const CMS_BASE = "https://cms.pivotcycles.com/wp-content/uploads";
const OUTPUT_DIR = join(process.cwd(), "public", "images", "bikes");
const CONTENT_DIR = join(process.cwd(), "content", "bikes");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "en-US,en;q=0.9",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// All Pivot bike slugs and their categories
const BIKE_CATALOG = [
  { slug: "mach-4-sl", category: "cross-country" },
  { slug: "les-sl", category: "cross-country" },
  { slug: "les-sl-drop-bar", category: "cross-country" },
  { slug: "switchblade", category: "trail" },
  { slug: "shadowcat", category: "trail" },
  { slug: "trailcat-lt", category: "trail" },
  { slug: "trailcat-sl", category: "trail" },
  { slug: "firebird", category: "enduro" },
  { slug: "phoenix", category: "gravity" },
  { slug: "shuttle-lt", category: "e-bike" },
  { slug: "shuttle-am", category: "e-bike" },
  { slug: "shuttle-sl", category: "e-bike" },
  { slug: "shuttle-sl-am", category: "e-bike" },
  { slug: "vault", category: "gravel" },
  { slug: "point", category: "dirt-jump" },
];

/**
 * Fetch with retry and rate limiting
 */
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      console.warn(`  ⚠ Retry ${i + 1}/${retries}: ${err.message}`);
      await sleep(2000);
    }
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

/**
 * Download image, convert to WebP, save to disk
 */
async function downloadImage(url, outputPath) {
  // Skip if already exists
  if (existsSync(outputPath)) {
    return false; // skipped
  }

  try {
    const res = await fetchWithRetry(url);
    const buffer = Buffer.from(await res.arrayBuffer());

    // Convert to WebP if not already
    if (outputPath.endsWith(".webp") && !url.includes("f_webp")) {
      const webpBuffer = await sharp(buffer).webp({ quality: 90 }).toBuffer();
      writeFileSync(outputPath, webpBuffer);
    } else {
      writeFileSync(outputPath, buffer);
    }
    return true; // downloaded
  } catch (err) {
    console.error(`  ✗ Failed: ${url} → ${err.message}`);
    return false;
  }
}

/**
 * Extract basic data from a bike page HTML
 */
function extractBasicData(html, slug, category) {
  const data = {
    name: "",
    slug,
    category,
    travel: { rear: "", front: "" },
    wheelSize: "",
    description: "",
    colors: [],
    heroImage: `/images/bikes/${slug}/hero.webp`,
    gallery: [],
    featured: false,
  };

  // Extract bike name from title
  const titleMatch = html.match(/<title[^>]*>([^<]+)/);
  if (titleMatch) {
    data.name = titleMatch[1].split("|")[0].split("–")[0].trim();
  }

  // Extract Cloudinary gallery images
  const cloudinaryRegex = new RegExp(
    `${CLOUDINARY_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^"'\\s]+`,
    "g"
  );
  const cloudinaryUrls = [...new Set(html.match(cloudinaryRegex) || [])];
  data.gallery = cloudinaryUrls
    .filter((u) => u.includes(slug.replace(/-/g, "")) || u.includes(slug))
    .slice(0, 12);

  // Extract CMS hero images (color variants)
  const cmsRegex = new RegExp(
    `${CMS_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^"'\\s]+\\.(?:png|jpg|webp)`,
    "g"
  );
  const cmsUrls = [...new Set(html.match(cmsRegex) || [])];

  // Extract color data from JSON-like structures
  const colorRegex = /"name"\s*:\s*"([^"]+)"\s*,\s*"primary"\s*:\s*"(#[0-9a-fA-F]+)"/g;
  let colorMatch;
  let colorIndex = 0;
  while ((colorMatch = colorRegex.exec(html)) !== null) {
    data.colors.push({
      name: colorMatch[1],
      hex: colorMatch[2],
      image: `/images/bikes/${slug}/color-${colorMatch[1]
        .toLowerCase()
        .replace(/\s+/g, "-")}.webp`,
    });
    colorIndex++;
  }

  return data;
}

/**
 * Process a single bike
 */
async function processBike(slug, category, index, total) {
  console.log(`\n━━━ [${index + 1}/${total}] ${slug.toUpperCase()} ━━━`);

  const bikeDir = join(OUTPUT_DIR, slug);
  mkdirSync(bikeDir, { recursive: true });

  // Fetch page
  console.log(`  📥 Fetching ${BASE_URL}/${slug}`);
  let html;
  try {
    const res = await fetchWithRetry(`${BASE_URL}/${slug}`);
    html = await res.text();
  } catch (err) {
    console.error(`  ✗ Failed to fetch page: ${err.message}`);
    return null;
  }

  await sleep(1500);

  // Extract data
  const data = extractBasicData(html, slug, category);
  console.log(
    `  📊 Found: ${data.gallery.length} gallery images, ${data.colors.length} colors`
  );

  // Download gallery images
  for (let i = 0; i < data.gallery.length; i++) {
    const url = data.gallery[i];
    // Upgrade quality
    const hiResUrl = url.replace("w_1200", "w_2400,q_95");
    const filename = `gallery-${String(i + 1).padStart(2, "0")}.webp`;
    const outputPath = join(bikeDir, filename);

    process.stdout.write(
      `  📸 ${slug} [${i + 1}/${data.gallery.length}] — ${filename}`
    );
    const downloaded = await downloadImage(hiResUrl, outputPath);
    console.log(downloaded ? " ✓" : " (exists)");

    // Update path in data
    data.gallery[i] = `/images/bikes/${slug}/${filename}`;
    await sleep(500);
  }

  // Download hero image (first CMS URL or first gallery)
  const cmsRegex = new RegExp(
    `${CMS_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^"'\\s]+${slug
      .replace(/-/g, "")
      .substring(0, 6)}[^"'\\s]+\\.png`,
    "gi"
  );
  const heroUrls = html.match(cmsRegex) || [];
  if (heroUrls.length > 0) {
    const heroPath = join(bikeDir, "hero.webp");
    process.stdout.write(`  🖼  Hero image`);
    const downloaded = await downloadImage(heroUrls[0], heroPath);
    console.log(downloaded ? " ✓" : " (exists)");
  }

  // Save JSON
  mkdirSync(CONTENT_DIR, { recursive: true });
  const jsonPath = join(CONTENT_DIR, `${slug}.json`);
  if (!existsSync(jsonPath)) {
    writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log(`  💾 Saved ${jsonPath}`);
  } else {
    console.log(`  💾 ${slug}.json already exists (skipped)`);
  }

  return data;
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);
  const slugFilter = args
    .find((a) => a.startsWith("--slug="))
    ?.split("=")[1];
  const imagesOnly = args.includes("--images-only");

  console.log("🦙 Pivot Cycles Scraper for Flowcycles.cz");
  console.log("═".repeat(50));

  mkdirSync(OUTPUT_DIR, { recursive: true });
  mkdirSync(CONTENT_DIR, { recursive: true });

  const bikes = slugFilter
    ? BIKE_CATALOG.filter((b) => b.slug === slugFilter)
    : BIKE_CATALOG;

  if (bikes.length === 0) {
    console.error(`✗ Bike "${slugFilter}" not found in catalog`);
    process.exit(1);
  }

  console.log(`📋 Processing ${bikes.length} bike(s)...\n`);

  const results = [];
  for (let i = 0; i < bikes.length; i++) {
    const result = await processBike(
      bikes[i].slug,
      bikes[i].category,
      i,
      bikes.length
    );
    if (result) results.push(result);
    await sleep(1500);
  }

  console.log("\n" + "═".repeat(50));
  console.log(`✅ Done! Processed ${results.length}/${bikes.length} bikes`);
  console.log(`   Images: ${OUTPUT_DIR}`);
  console.log(`   Data:   ${CONTENT_DIR}`);
}

main().catch(console.error);
