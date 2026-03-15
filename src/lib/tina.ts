/**
 * Content helpers for Tina CMS.
 *
 * In production (Vercel), reads directly from content/ JSON files.
 * In dev mode with `tinacms dev`, reads from Tina GraphQL API.
 *
 * No import of tina/__generated__/client — that file only exists
 * during local dev and is in .gitignore.
 */

import { readFileSync, existsSync } from "fs";
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

/**
 * Read homepage data from content/homepage/index.json
 */
export async function getHomepageData() {
  return readJson<any>(join(CONTENT_DIR, "homepage", "index.json"));
}

/**
 * Read all blog posts — not used in production build yet,
 * blog still reads from src/data/blog.ts
 */
export async function getBlogPosts() {
  return null;
}

/**
 * Read a single blog post — not used in production build yet
 */
export async function getBlogPost(slug: string) {
  return null;
}
