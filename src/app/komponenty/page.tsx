import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAllBrands } from "@/lib/content";
import { componentBrands as staticBrands } from "@/data/brands";

export const metadata = {
  title: "Komponenty | Flowcycles",
  description: "Prémiové komponenty od Chromag, Industry Nine, PINE Wheels a Garbaruk.",
};

export default async function KomponentyPage() {
  const cmsBrands = getAllBrands();
  const brands = cmsBrands.length > 0 ? cmsBrands : staticBrands;

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">Prémiové značky</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6">Komponenty</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Pečlivě vybraný sortiment komponentů od značek, kterým věříme. Každý produkt prošel našima rukama a obstál na trailech.
          </p>
        </div>
      </section>

      {brands.map((brand, i) => (
        <section key={brand.slug} id={brand.slug} className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-surface" : ""}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal>
                <div className="relative aspect-[4/3] flex items-center justify-center shine-effect" style={{ background: `linear-gradient(135deg, ${brand.accentColor}40, ${brand.accentColor}10)` }}>
                  <span className="text-5xl md:text-6xl font-bold uppercase tracking-tighter opacity-90" style={{ color: brand.accentColor }}>
                    {brand.name}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: brand.accentColor }}>{brand.origin}</p>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-4">{brand.name}</h2>
                  <p className="text-base italic mb-8" style={{ color: brand.accentColor }}>{brand.tagline}</p>
                  <p className="text-muted text-base leading-relaxed mb-6">{brand.description}</p>
                  <p className="text-muted text-sm leading-relaxed mb-8">{brand.story}</p>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-4">Produkty v nabídce</h3>
                  <ul className="space-y-2 mb-8">
                    {brand.products.map((product, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.accentColor }} />
                        <span className="text-foreground/80">{product}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/kontakt" className="inline-flex items-center px-6 py-3 bg-accent text-background text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors">
                      Poptat {brand.name}
                    </Link>
                    <a href={brand.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-border text-muted text-xs font-semibold uppercase tracking-[0.15em] hover:border-foreground hover:text-foreground transition-colors">
                      Web výrobce
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">Hledáte něco konkrétního?</h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">Pokud v nabídce nenajdete přesně to, co potřebujete, ozvěte se.</p>
            <Link href="/kontakt" className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors">
              Kontaktovat studio
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
