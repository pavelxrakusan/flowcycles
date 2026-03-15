import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getCustomStavbyData } from "@/lib/content";
import { getBlogPostsByCategory, blogCategories } from "@/data/blog";

export const metadata = {
  title: "Custom stavby | Flowcycles",
  description: "Kolo na míru vašim představám. Od výběru rámu přes komponentovou sestavu až po finální nastavení.",
};

const defaultSteps = [
  { title: "Konzultace", description: "Všechno začíná rozhovorem.", image: "/assets/images/showroom.jpg" },
  { title: "Výběr rámu", description: "Společně vybereme ideální rám.", image: "/assets/gallery/kola-01.jpg" },
  { title: "Komponenty", description: "Sestavíme specifikaci na míru.", image: "/assets/gallery/komponenty-01.jpg" },
  { title: "Stavba", description: "Profesionální montáž.", image: "/assets/images/bike_build.jpg" },
  { title: "Nastavení", description: "Finální nastavení odpružení.", image: "/assets/technology/suspension-science.jpg" },
  { title: "Předání", description: "Osobní předání ve studiu.", image: "/assets/images/andrej.jpg" },
];

export default async function CustomStavbyPage() {
  const data = getCustomStavbyData();
  const steps = data?.steps ?? defaultSteps;
  const stavbyMesice = getBlogPostsByCategory("stavba-mesice");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <Image src="/assets/images/bike_build.jpg" alt="Custom stavba" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <ScrollReveal>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">Na míru</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] mb-6">
              {data?.heroTitle ?? "Custom\nstavby"}
            </h1>
            <p className="text-foreground/80 text-lg max-w-2xl leading-relaxed">
              {data?.heroDescription ?? "Každý jezdec je jiný. Proto stavíme kola na míru."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-0">
        {steps.map((step, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} className="border-t border-border/20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 min-h-[450px]">
                  <div className={`relative min-h-[300px] lg:min-h-0 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                  <div className={`flex flex-col justify-center px-8 lg:px-16 py-16 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <ScrollReveal>
                      <span className="text-accent text-4xl lg:text-5xl font-bold tracking-tighter block mb-4 opacity-30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-tight mb-6">{step.title}</h2>
                      <p className="text-muted text-base leading-relaxed">{step.description}</p>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Stavby měsíce */}
      {stavbyMesice.length > 0 && (
        <section className="py-24 lg:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">Z naší dílny</p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Stavby měsíce</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stavbyMesice.map((post) => (
                <ScrollReveal key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block shine-effect">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2a2a] mb-5">
                      <Image src={post.image} alt={post.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700 p-4" />
                    </div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                      {blogCategories.find((c) => c.id === post.category)?.name}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-tight mt-2 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight text-shimmer">Začněme váš projekt</h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">Máte představu o svém vysněném kole? Pojďme ji proměnit v realitu.</p>
            <Link href="/kontakt" className="inline-flex items-center px-10 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors">
              Domluvit konzultaci
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
