import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Servis | Flowcycles",
  description:
    "Autorizované servisní centrum Fox & Marzocchi v Praze. Prémiový servis kol od profesionála, který ví co dělá.",
};

export default function ServisPage() {
  return (
    <>
      {/* ═══ HERO — fullscreen s fotkou servisu ═══ */}
      <section className="relative min-h-[70vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/servis-01.jpg"
            alt="Servis Flowcycles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <ScrollReveal>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Autorizované servisní centrum
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] mb-6 text-shimmer">
              Váš servis.
              <br />
              Naše starost.
            </h1>
            <p className="text-foreground/80 text-lg max-w-2xl leading-relaxed">
              Když mi svěříte kolo, odjede v lepším stavu, než v jakém přijelo.
              Každý servis začíná osobní prohlídkou a končí testovací jízdou.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STATEMENT ═══ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-light">
              Neservisuji kola na pásu. Každé kolo posoudím osobně,
              domluvíme se na rozsahu a termínu. Vy víte přesně co děláme
              a proč. Žádné překvapení na faktuře.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CO DĚLÁME — velké vizuální bloky ═══ */}
      <section className="py-0">
        {[
          {
            title: "Kompletní servis kola",
            description:
              "Od základního seřízení brzd a řazení přes kompletní mytí a čištění až po generální přestavbu. Vše závisí na stavu vašeho kola — proto každý servis začíná prohlídkou.",
            detail: "Kontrola rámu, ložisek, řazení, brzd, kol, pneumatik, lanek. Všechny šrouby utažené momentovým klíčem. Řazení a brzdy seřízené na milimetr.",
            image: "/assets/gallery/servis-01.jpg",
          },
          {
            title: "Servis odpružení Fox & Marzocchi",
            description:
              "Jako autorizované servisní centrum Fox a Marzocchi pracuji výhradně s originálními díly a postupy přímo od výrobce. Školení absolvuji pravidelně.",
            detail: "Lower leg servis, kompletní overhaul vidlic i tlumičů. Výměna olejů, těsnění, pouzder. Nastavení na míru vaší hmotnosti a stylu jízdy.",
            image: "/assets/technology/fox-live-valve.jpg",
          },
          {
            title: "Nastavení odpružení na míru",
            description:
              "Správné nastavení odpružení je rozdíl mezi kolem, které jede a kolem, které jede skvěle. SAG, rebound, komprese — vše precizně vyladěné pro vás.",
            detail: "Zvážíme vás v plné výbavě, nastavíme základní SAG, projedeme testovací okruh a doladíme podle zpětné vazby. Výsledek poznáte na prvním metru.",
            image: "/assets/technology/suspension-science.jpg",
          },
          {
            title: "Stavby a přestavby",
            description:
              "Nové kolo od rámu, přestavba stávajícího stroje, upgrade komponentů. Každý projekt řešíme individuálně — od prvního rozhovoru po testovací jízdu.",
            detail: "Kompletní montáž s důrazem na detail. Lanka vedená čistě, brzdy perfektně odvzdušněné. Žádné zkratky.",
            image: "/assets/images/bike_build.jpg",
          },
        ].map((service, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} className="border-t border-border/20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 min-h-[500px]">
                  <div className={`relative min-h-[350px] lg:min-h-0 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className={`flex flex-col justify-center px-8 lg:px-16 py-16 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <ScrollReveal>
                      <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-tight mb-6">
                        {service.title}
                      </h2>
                      <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-muted text-sm leading-relaxed">
                        {service.detail}
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ FOX & MARZOCCHI ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                Autorizovaný servis
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Originální díly, speciální nářadí a postupy přímo od výrobce.
                Vaše odpružení je v těch nejlepších rukou — přímo v Praze.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-background border border-border p-10 lg:p-14 text-center shine-effect glow-border">
                <Image src="/assets/logos/fox.png" alt="Fox" width={160} height={50} className="invert opacity-80 h-14 w-auto mx-auto mb-8" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Fox Racing Shox</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Kompletní servis vidlic a tlumičů Fox. Lower leg servis, full overhaul, výměna pouzder a těsnění. Originální oleje Fox Gold a Float Fluid.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-background border border-border p-10 lg:p-14 text-center shine-effect glow-border">
                <Image src="/assets/logos/marzocchi.png" alt="Marzocchi" width={160} height={50} className="invert opacity-80 h-14 w-auto mx-auto mb-8" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Marzocchi</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Záruční i pozáruční servis vidlic Marzocchi. Stejné originální díly a postupy jako u Fox — protože Marzocchi je součástí rodiny Fox.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ JAK TO FUNGUJE ═══ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Proces
              </p>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Jak to funguje
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {[
              { step: "01", title: "Zavolejte", text: "Domluvíme termín, probereme co vás trápí. Nejlépe mne zastihnete na telefonu." },
              { step: "02", title: "Přijeďte", text: "Přivezete kolo do studia. Společně ho prohlédneme a domluvíme rozsah servisu." },
              { step: "03", title: "Servisujeme", text: "Pracuji na kole osobně. Žádný brigádník, žádný pás. Průběh komunikuji." },
              { step: "04", title: "Převezměte", text: "Kolo je připravené. Projdeme co jsme dělali, vysvětlím na co dát pozor. Hotovo." },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-background p-8 lg:p-10 h-full">
                  <span className="text-accent text-3xl font-bold tracking-tighter block mb-4">{item.step}</span>
                  <h3 className="text-base font-bold uppercase tracking-[0.1em] mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROČ MY ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/assets/images/andrej.jpg" alt="Andrej" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                  Proč Flowcycles
                </p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-8">
                  Osobní přístup.
                  <br />
                  Žádné kompromisy.
                </h2>
                <div className="space-y-6 text-muted text-base leading-relaxed">
                  <p>
                    Neslibuji nejnižší cenu. Slibuji, že vaše kolo dostane péči,
                    kterou si zaslouží. Pracuji osobně, s originálními díly a
                    podle postupů výrobce.
                  </p>
                  <p>
                    Servisuji kola od roku 2018. Prošel jsem školeními Fox,
                    Marzocchi a DT Swiss. Spolupracoval jsem se závodníky, kteří
                    mi pomohli zdokonalit se. Dnes mám na skladě vše potřebné
                    pro okamžitý servis.
                  </p>
                  <p className="text-accent font-medium italic">
                    &ldquo;Výsledkem a mým největším potěšením je nádherné,
                    funkční kolo a naprosto spokojený zákazník.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SVOZ + DOPLŇKY ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Svoz a rozvoz", text: "Nemůžete přijet? Nabízím svoz a rozvoz kola v Praze a blízkém okolí. Domluvíme se telefonicky." },
              { title: "Expresní servis", text: "Potřebujete kolo rychle? Pokud je to v mých silách, domluvíme expresní termín. Stačí zavolat." },
              { title: "Pravidelná péče", text: "Nejlepší servis je prevence. Doporučuji kontrolu dvakrát za sezónu — před a po. Vaše kolo vám poděkuje." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-background p-8 lg:p-10 h-full">
                  <h3 className="text-base font-bold uppercase tracking-[0.1em] mb-4">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image src="/assets/technology/quality-control.jpg" alt="Servis" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              Připraveni?
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 leading-[0.9] text-shimmer">
              Domluvte si termín
            </h2>
            <p className="text-muted text-lg mb-4">
              Zavolejte a domluvíme se. Řekněte mi co vás trápí a já vám řeknu
              co s tím uděláme.
            </p>
            <p className="text-accent text-3xl md:text-4xl font-bold tracking-tight mb-10">
              +420 608 420 006
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420608420006"
                className="inline-flex items-center justify-center px-10 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors animate-pulse-glow"
              >
                Zavolat teď
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-10 py-4 border border-foreground/30 text-foreground text-sm font-semibold uppercase tracking-[0.15em] hover:border-foreground hover:bg-foreground/5 transition-colors"
              >
                Napsat zprávu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
