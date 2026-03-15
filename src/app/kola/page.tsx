import Image from "next/image";
import Link from "next/link";
import { bikes as staticBikes, bikeCategories } from "@/data/bikes";
import { getAllBikes } from "@/lib/content";

export const metadata = {
  title: "Kola Pivot | Flowcycles",
  description:
    "Kompletní nabídka kol Pivot — od cross country přes trail a enduro až po gravity a e-bike. Přijďte si vybrat do našeho showroomu.",
};

export default async function KolaPage() {
  const contentBikes = getAllBikes();
  const bikes = contentBikes.length > 0 ? contentBikes : staticBikes;
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Pivot Cycles
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Kola
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Každý model Pivot je výsledkem let vývoje a závodních zkušeností.
            Představujeme kompletní řadu — od lehkých XC speciálů po gravity
            stroje.
          </p>
        </div>
      </section>

      {/* Sticky category navigation */}
      <nav className="sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {bikeCategories.map((cat) => {
              const count = bikes.filter((b) => b.category === cat.id).length;
              if (count === 0) return null;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex-shrink-0 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted hover:text-accent hover:bg-surface transition-colors whitespace-nowrap"
                >
                  {cat.name}
                  <span className="ml-1.5 text-muted/40">{count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Categories with bikes */}
      {bikeCategories.map((category) => {
        const categoryBikes = bikes.filter(
          (b) => b.category === category.id
        );
        if (categoryBikes.length === 0) return null;

        return (
          <section
            key={category.id}
            id={category.id}
            className="py-16 lg:py-24 border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
                  {category.name}
                </h2>
                <p className="text-muted text-base">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryBikes.map((bike) => (
                  <Link
                    key={bike.slug}
                    href={`/kola/${bike.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-[#2a2a2a] mb-5">
                      <Image
                        src={bike.heroImage}
                        alt={bike.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700 p-4 lg:p-6"
                      />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                      {bike.name}
                    </h3>
                    <p className="text-muted text-sm mb-2">{bike.tagline}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-muted/60 text-xs uppercase tracking-wider">
                        {bike.travelRear} R / {bike.travelFront} F |{" "}
                        {bike.wheelSize}
                      </p>
                      {bike.colors.length > 0 && (
                        <div className="flex gap-1.5">
                          {bike.colors.map((c) => (
                            <span
                              key={c.hex}
                              className="w-3 h-3 rounded-full border border-border"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
            Potřebujete pomoct s výběrem?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            Přijďte do studia, probereme vaše potřeby a najdeme ideální kolo.
            Každý jezdec je jiný a zaslouží si individuální přístup.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            Domluvit konzultaci
          </Link>
        </div>
      </section>
    </>
  );
}
