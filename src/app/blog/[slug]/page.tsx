import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogCategories, getBlogPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: "Článek nenalezen" };
    return {
      title: `${post.title} | Blog | Flowcycles`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
              {blogCategories.find((c) => c.id === post.category)?.name ?? post.category}
            </span>
            <span className="text-muted/40 text-xs">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.95]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-xl font-bold uppercase tracking-tight mt-12 mb-4 text-foreground"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-bold mt-8 mb-3 text-foreground"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-muted text-lg leading-relaxed mb-6">
                  {paragraph.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-foreground font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            href="/blog"
            className="text-accent font-semibold uppercase tracking-[0.15em] text-sm flex items-center group"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Zpět na blog
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-accent text-background text-sm font-semibold uppercase tracking-[0.12em] hover:bg-accent-hover transition-colors"
          >
            Domluvit návštěvu
          </Link>
        </div>
      </section>
    </>
  );
}
