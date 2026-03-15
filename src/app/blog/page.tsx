"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Ze světa cyklistiky
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Blog
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Stavby, příběhy, technologie a tipy. Všechno co děláme a co nás baví.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeCategory === null
                  ? "bg-accent text-background"
                  : "bg-surface border border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              Vše
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  activeCategory === cat.id
                    ? "bg-accent text-background"
                    : "bg-surface border border-border text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts — large cards */}
      {featured.length > 0 && !activeCategory && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {featured.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative block h-80 lg:h-96 overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                      {blogCategories.find((c) => c.id === post.category)?.name}
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold uppercase tracking-tight mt-2 mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-foreground/60 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <p className="text-muted text-center py-16">
              V této kategorii zatím nejsou žádné články.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory ? filtered : [...featured.slice(2), ...rest]).map(
                (post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface mb-5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                        {blogCategories.find((c) => c.id === post.category)?.name}
                      </span>
                      <span className="text-muted/40 text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
