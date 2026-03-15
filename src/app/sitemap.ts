import { bikes } from "@/data/bikes";
import { blogPosts } from "@/data/blog";
import { componentBrands } from "@/data/brands";
import type { MetadataRoute } from "next";

const BASE = "https://flowcycles.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/kola`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/servis`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/custom-stavby`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/komponenty`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/studio`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/poslouchej`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE}/ochrana-osobnich-udaju`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/obchodni-podminky`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/reklamace`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/doprava`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const bikePages = bikes
    .filter((b) => b.slug !== "road-coming-soon")
    .map((b) => ({
      url: `${BASE}/kola/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...bikePages, ...blogPages];
}
