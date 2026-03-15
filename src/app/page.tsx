import Image from "next/image";
import Link from "next/link";
import { bikeCategories, bikes } from "@/data/bikes";
import { blogPosts, blogCategories, getBlogPostsByCategory } from "@/data/blog";
import { componentBrands } from "@/data/brands";
import { HeroCarousel, type Slide } from "@/components/HeroCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getHomepageData } from "@/lib/tina";

function IntroSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                O studiu
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
                Jmenuji se Andrej
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Starám se o kola. Flowcycles je místo zaměřené na kvalitní
                poradenství, příjemný zákaznický servis a péči o kola v té
                nejvyšší kvalitě. Každý projekt začíná rozhovorem — od výběru
                rámu přes komponentovou sestavu až po finální nastavení
                odpružení.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Jako autorizované servisní centrum Fox a Marzocchi nabízím
                špičkový servis s originálními díly. Výsledkem a mým největším
                potěšením je nádherné, funkční kolo a naprosto spokojený
                zákazník.
              </p>
              <p className="text-accent text-base font-medium italic mb-8">
                Dorazte na kávu — nejlépe mne zastihnete na telefonu.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center text-accent font-semibold uppercase tracking-[0.15em] text-sm group"
              >
                Více o studiu
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/images/andrej.jpg"
                alt="Andrej — Flowcycles"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categoryImages: Record<string, string> = {
    "cross-country": "/assets/gallery/action-trail.jpg",
    trail: "/assets/gallery/action-trail.jpg",
    enduro: "/assets/gallery/action-trail.jpg",
    gravity: "/assets/bikes/gallery/phoenix/phoenix-action-03.webp",
    "e-bike": "/assets/gallery/action-ebike.jpg",
    gravel: "/assets/gallery/action-gravel.jpg",
    "dirt-jump": "/assets/gallery/kola-01.jpg",
    silnicni: "/assets/images/bike_build.jpg",
  };

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Pivot Cycles
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              Najděte svou disciplínu
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikeCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.05}>
              <Link
                href={`/kola#${cat.id}`}
                className="group relative block h-64 overflow-hidden shine-effect"
              >
                {/* Background image */}
                <Image
                  src={categoryImages[cat.id] || "/assets/images/showroom.jpg"}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent group-hover:from-background/80 transition-colors duration-500" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBikesSection() {
  const featuredSlugs = ["switchblade", "firebird", "phoenix", "shuttle-lt"];
  const featured = featuredSlugs
    .map((s) => bikes.find((b) => b.slug === s))
    .filter(Boolean) as typeof bikes;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Vybrané modely
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
                Pivot kola
              </h2>
            </div>
            <Link
              href="/kola"
              className="text-accent font-semibold uppercase tracking-[0.15em] text-sm flex items-center group"
            >
              Všechny modely
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((bike, i) => (
            <ScrollReveal key={bike.slug} delay={i * 0.1}>
              <Link href={`/kola/${bike.slug}`} className="group block shine-effect">
                <div className="relative aspect-[3/2] overflow-hidden bg-[#2a2a2a] mb-6">
                  <Image
                    src={bike.heroImage}
                    alt={bike.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 p-3 lg:p-5"
                  />
                </div>
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-2">
                  {bikeCategories.find((c) => c.id === bike.category)?.name}
                </p>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                  {bike.name}
                </h3>
                <p className="text-muted text-sm mb-2">{bike.tagline}</p>
                <p className="text-muted/60 text-xs uppercase tracking-wider">
                  {bike.travelRear} R / {bike.travelFront} F | {bike.wheelSize}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Prémiový servis",
      description:
        "Kompletní péče o vaše kolo od základního seřízení po generální opravu.",
    },
    {
      title: "Servis odpružení Fox & Marzocchi",
      description:
        "Autorizované servisní centrum s originálními díly a profesionálním přístupem.",
    },
    {
      title: "Custom stavby na míru",
      description:
        "Kolo na míru vašim představám. Od výběru rámu po finální sestavení a nastavení.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Služby
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
              Co pro vás můžeme udělat
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Každé kolo si zaslouží individuální péči. Ať už potřebujete
              servis, nové kolo, nebo stavbu snů — jsme tu pro vás.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="bg-background p-8 lg:p-10 h-full">
                <span className="text-accent text-2xl font-bold tracking-tight block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-[0.1em] mb-4">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/servis"
            className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            Zjistit více o servisu
          </Link>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      word: "Vášeň",
      bike: "Phoenix",
      slug: "/kola/phoenix",
      image: "/assets/bikes/gallery/phoenix/phoenix-action-03.webp",
      description: "Kola stavíme od jedenácti let. Phoenix je ztělesněním toho, co se stane, když se vášeň promítne do inženýrství — 210 mm zdvihu a vítěz Světového poháru.",
    },
    {
      word: "Preciznost",
      bike: "Firebird",
      slug: "/kola/firebird",
      image: "/assets/bikes/gallery/firebird/beauty-01.webp",
      description: "Každý šroub utažený momentovým klíčem. Každý milimetr SAG nastavený na vaši hmotnost. Firebird je přesný na trati i v našem servisu.",
    },
    {
      word: "Svoboda",
      bike: "Vault",
      slug: "/kola/vault",
      image: "/assets/bikes/gallery/vault/action-01.webp",
      description: "Šotolina, les, asfalt — Vault nezná hranice. Stejně jako naši klienti, kteří na něm projeli Island, Norsko a tisíce kilometrů české krajiny.",
    },
  ];

  return (
    <section className="py-0">
      {values.map((v, i) => (
        <Link key={v.word} href={v.slug} className="group block relative">
          <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
            <Image
              src={v.image}
              alt={`${v.word} — ${v.bike}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <ScrollReveal>
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-6">
                    Pivot {v.bike}
                  </p>
                  <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.8] mb-8 group-hover:text-accent transition-colors duration-500 text-shimmer">
                    {v.word}
                  </h2>
                  <p className="text-foreground/70 text-base md:text-lg max-w-xl leading-relaxed">
                    {v.description}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

function BuildOfTheMonthSection() {
  const buildPost = getBlogPostsByCategory("stavba-mesice")[0];
  if (!buildPost) return null;

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
          {/* Image */}
          <ScrollReveal>
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-[#2a2a2a]">
              <Image
                src={buildPost.image}
                alt={buildPost.title}
                fill
                className="object-contain p-8"
              />
            </div>
          </ScrollReveal>
          {/* Content */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center p-8 lg:p-14 bg-background border border-border h-full">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                Stavba měsíce
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-tight mb-6">
                {buildPost.title.replace("Stavba měsíce: ", "")}
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                {buildPost.excerpt}
              </p>
              <Link
                href={`/blog/${buildPost.slug}`}
                className="inline-flex items-center self-start px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
              >
                Číst celý příběh
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Ze světa cyklistiky
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
                Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-accent font-semibold uppercase tracking-[0.15em] text-sm flex items-center group"
            >
              Všechny články
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        {/* Masonry-style grid: first post large, rest smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured large post */}
          {latestPosts[0] && (
            <ScrollReveal className="lg:col-span-7 lg:row-span-2">
              <Link href={`/blog/${latestPosts[0].slug}`} className="group block h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
                  <Image
                    src={latestPosts[0].image}
                    alt={latestPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                      {latestPosts[0].category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mt-3 mb-3 group-hover:text-accent transition-colors">
                      {latestPosts[0].title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2 max-w-lg">
                      {latestPosts[0].excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}
          {/* Smaller posts */}
          {latestPosts.slice(1).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1} className="lg:col-span-5">
              <Link href={`/blog/${post.slug}`} className="group flex gap-4 h-full bg-surface overflow-hidden shine-effect">
                <div className="relative w-40 lg:w-48 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center py-4 pr-4">
                  <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted/60 text-xs leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 lg:py-48">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/bike_build.jpg"
          alt="Custom stavba"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Váš příští projekt
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8 leading-[0.95] text-shimmer">
            Domluvte si
            <br />
            osobní konzultaci
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Přijďte se podívat do showroomu, probereme vaše představy a najdeme
            ideální řešení. Bez závazků.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-10 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            Kontaktovat studio
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function BrandsStrip() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Prémiové komponenty
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Značky, kterým věříme
            </h2>
          </div>
        </ScrollReveal>

        {/* Brand logos + Fox & Marzocchi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {/* Fox */}
          <ScrollReveal>
            <div className="bg-background flex items-center justify-center p-8 h-32">
              <Image
                src="/assets/logos/fox.png"
                alt="Fox"
                width={120}
                height={40}
                className="invert opacity-60 hover:opacity-100 transition-opacity h-8 w-auto"
              />
            </div>
          </ScrollReveal>
          {/* Marzocchi */}
          <ScrollReveal delay={0.05}>
            <div className="bg-background flex items-center justify-center p-8 h-32">
              <Image
                src="/assets/logos/marzocchi.png"
                alt="Marzocchi"
                width={120}
                height={40}
                className="invert opacity-60 hover:opacity-100 transition-opacity h-8 w-auto"
              />
            </div>
          </ScrollReveal>
          {/* Component brands */}
          {componentBrands.map((brand, i) => (
            <ScrollReveal key={brand.slug} delay={(i + 2) * 0.05}>
              <Link
                href={`/komponenty#${brand.slug}`}
                className="bg-background flex items-center justify-center p-8 h-32 group"
              >
                <span
                  className="text-xl font-bold uppercase tracking-tight opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: brand.accentColor }}
                >
                  {brand.name}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/komponenty"
            className="text-accent font-semibold uppercase tracking-[0.15em] text-sm inline-flex items-center group"
          >
            Prohlédnout komponenty
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const igImages = [
    "/assets/gallery/servis-01.jpg",
    "/assets/bikes/gallery/phoenix/phoenix-beauty.webp",
    "/assets/gallery/action-trail.jpg",
    "/assets/images/andrej.jpg",
    "/assets/bikes/gallery/firebird/beauty-01.webp",
    "/assets/gallery/action-ebike.jpg",
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-2">
                @flowcycles_bike_studio
              </p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                Sledujte nás na Instagramu
              </h2>
            </div>
            <a
              href="https://www.instagram.com/flowcycles_bike_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Sledovat
            </a>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {igImages.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <a
                href="https://www.instagram.com/flowcycles_bike_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden shine-effect"
              >
                <Image
                  src={src}
                  alt={`Instagram ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotifyWidget() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Něco k poslechu
              </p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">
                Brnkněte mi
              </h2>
              <p className="text-muted text-base leading-relaxed mb-6">
                Jsem hudební nadšenec — v bike studiu poslouchám nejradši tyhle
                pecky. Snad se vám zalíbí!
              </p>
              <Link
                href="/poslouchej"
                className="text-accent font-semibold uppercase tracking-[0.15em] text-sm flex items-center group"
              >
                Více playlistů
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-surface border border-border p-1">
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  // Fetch hero slides from Tina CMS (falls back to defaults if unavailable)
  const tinaData = await getHomepageData();
  const heroSlides: Slide[] | undefined = tinaData?.heroSlides
    ?.filter((s: any) => s?.title && s?.image)
    .map((s: any) => ({
      image: s.image,
      label: s.label ?? "",
      title: s.title,
      subtitle: s.subtitle ?? "",
      cta: { text: s.ctaText ?? "Zjistit více", href: s.ctaHref ?? "/" },
      ...(s.ctaSecondaryText && s.ctaSecondaryHref
        ? { ctaSecondary: { text: s.ctaSecondaryText, href: s.ctaSecondaryHref } }
        : {}),
    })) ?? undefined;

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <IntroSection />
      <CategoriesSection />
      <FeaturedBikesSection />
      <ValuesSection />
      <BuildOfTheMonthSection />
      <ServicesSection />
      <BrandsStrip />
      <BlogSection />
      <SpotifyWidget />
      <InstagramSection />
      <CTASection />
    </>
  );
}
