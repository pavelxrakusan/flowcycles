/**
 * Content helpers — read data from content/ JSON files.
 * Used by pages that are connected to Tina CMS.
 * Falls back gracefully to static data from src/data/ if content files don't exist.
 */

import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const CONTENT_DIR = join(process.cwd(), "content");

function readJson<T>(path: string): T | null {
  try {
    if (!existsSync(path)) return null;
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return null;
  }
}

// ═══════════════════════════════════════
// BIKES
// ═══════════════════════════════════════

export interface ContentBike {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  travelRear: string;
  travelFront: string;
  wheelSize: string;
  heroImage: string;
  galleryImages: string[];
  colors: { name: string; hex: string; hexSecondary?: string; image?: string }[];
  features: string[];
  highlights: { title: string; description: string }[];
  productDetails: string[];
  geometry: { label: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string }[];
  sizeChart: { size: string; minHeight: string; maxHeight: string }[];
  builds: { name: string; components: { label: string; value: string }[] }[];
  faqs: { question: string; answer: string }[];
  videos: { id: string; title: string }[];
  reviews: { quote: string; author: string; publication: string }[];
}

export function getAllBikes(): ContentBike[] {
  const dir = join(CONTENT_DIR, "bikes");
  if (!existsSync(dir)) return [];
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => readJson<ContentBike>(join(dir, f)))
      .filter((b): b is ContentBike => b !== null)
      .sort((a, b) => {
        const order = ["cross-country", "trail", "enduro", "gravity", "e-bike", "gravel", "dirt-jump", "silnicni"];
        return order.indexOf(a.category) - order.indexOf(b.category);
      });
  } catch {
    return [];
  }
}

export function getBike(slug: string): ContentBike | null {
  return readJson<ContentBike>(join(CONTENT_DIR, "bikes", `${slug}.json`));
}

// ═══════════════════════════════════════
// SERVIS
// ═══════════════════════════════════════

export interface ServisPackage {
  name: string;
  price: string;
  time: string;
  description: string;
  featured: boolean;
  includes: string[];
}

export interface ContentServis {
  heroText: string;
  introText: string;
  packages: ServisPackage[];
}

export function getServisData(): ContentServis | null {
  return readJson<ContentServis>(join(CONTENT_DIR, "servis", "index.json"));
}

// ═══════════════════════════════════════
// BRANDS (KOMPONENTY)
// ═══════════════════════════════════════

export interface ContentBrand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  products: string[];
  origin: string;
  website: string;
  accentColor: string;
  logo?: string;
}

export function getAllBrands(): ContentBrand[] {
  const dir = join(CONTENT_DIR, "brands");
  if (!existsSync(dir)) return [];
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => readJson<ContentBrand>(join(dir, f)))
      .filter((b): b is ContentBrand => b !== null);
  } catch {
    return [];
  }
}

// ═══════════════════════════════════════
// CUSTOM STAVBY
// ═══════════════════════════════════════

export interface ContentCustomStavby {
  heroTitle: string;
  heroDescription: string;
  steps: { title: string; description: string; image: string }[];
}

export function getCustomStavbyData(): ContentCustomStavby | null {
  return readJson<ContentCustomStavby>(join(CONTENT_DIR, "custom-stavby", "index.json"));
}

// ═══════════════════════════════════════
// HOMEPAGE
// ═══════════════════════════════════════

export interface HeroSlide {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export interface ContentHomepage {
  heroSlides: HeroSlide[];
  intro: {
    heading: string;
    paragraphs: string[];
    quote: string;
    image: string;
  };
}

export function getHomepage(): ContentHomepage | null {
  return readJson<ContentHomepage>(join(CONTENT_DIR, "homepage", "index.json"));
}

// ═══════════════════════════════════════
// KONTAKT
// ═══════════════════════════════════════

export interface ContentKontakt {
  studioName: string;
  phone: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
  openingHours: string;
}

export function getKontaktData(): ContentKontakt | null {
  return readJson<ContentKontakt>(join(CONTENT_DIR, "kontakt", "index.json"));
}
