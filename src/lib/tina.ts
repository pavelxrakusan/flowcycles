import { readFileSync } from "fs";
import { join } from "path";

/**
 * Read homepage data from content/homepage/index.json
 * Works in both CMS mode and static build mode.
 */
export async function getHomepageData() {
  try {
    // Try reading from Tina GraphQL first (dev mode with CMS)
    const client = await import("../../tina/__generated__/client").then(
      (m) => m.default
    );
    const result = await client.queries.homepage({
      relativePath: "index.json",
    });
    return result.data.homepage;
  } catch {
    // Fallback: read JSON file directly (build mode without CMS server)
    try {
      const filePath = join(
        process.cwd(),
        "content",
        "homepage",
        "index.json"
      );
      const raw = readFileSync(filePath, "utf-8");
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}

/**
 * Read all blog posts from content/blog/ directory.
 */
export async function getBlogPosts() {
  try {
    const client = await import("../../tina/__generated__/client").then(
      (m) => m.default
    );
    const result = await client.queries.blogConnection({
      sort: "date",
      last: 50,
    });
    return result.data.blogConnection.edges?.map((e: any) => e?.node) ?? [];
  } catch {
    return null;
  }
}

/**
 * Read a single blog post by slug.
 */
export async function getBlogPost(slug: string) {
  try {
    const client = await import("../../tina/__generated__/client").then(
      (m) => m.default
    );
    const result = await client.queries.blog({
      relativePath: `${slug}.mdx`,
    });
    return result.data.blog;
  } catch {
    return null;
  }
}
