import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Studio | Flowcycles",
  description:
    "Poznejte příběh Andreje Jakovleva a Flowcycles. Prémiové bike studio s individuálním přístupem.",
};

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/showroom.jpg"
            alt="Flowcycles showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Náš příběh
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            Jsem Andrej,
            <br />
            těší mě!
          </h1>
          <p className="text-muted/80 text-lg mt-4">
            servisman / bajker / táta
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  Všechny tři výše zmíněné disciplíny se snažím zastávat na sto
                  procent. Proto celá moje rodina jezdí na kolech a já mám tak
                  o ježdění, rodinu i praxi servisáka postaráno. Stejnou péči
                  rád věnuju i vašemu kolu.
                </p>
                <p>
                  Se stavbou kol jsem začal už v útlém věku jedenácti let. Cílem
                  mojí první stavby byl primárně vzhled — kolo se mi líbilo a
                  jezdilo i brzdilo, jen jízda neměla s požitkem nic moc
                  společného. Na dalším kole jsem už přihlížel k funkčnosti —
                  rozumem jsem vybral kolo vhodné do terénu, tenkrát skládačku,
                  těžký převod jsem vyměnil za o něco lehčí a vysněnou barvu
                  jsem kolu vtisknul fixírkou pro modeláře.
                </p>
                <p>
                  Postupně jsem rostl a s výškou přišla nevyhnutelná volba
                  silničního favorita. Jízda „na beranech" mě velmi oslovila,
                  a tak jsem jezdil, servisoval a vylepšoval co se dalo.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/images/andrej.jpg"
                  alt="Andrej Jakovlev — zakladatel Flowcycles"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MTB origins */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/blog/mtbs-andrej.png"
                  alt="Andrej v článku MTBS"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                  Počátky
                </p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
                  Od Wheeleru k Pivotu
                </h2>
                <div className="space-y-6 text-muted text-lg leading-relaxed">
                  <p>
                    S příchodem prvních horských kol — někdy kolem roku 1990 —
                    jsem měl štěstí a nějakou záhadnou náhodou se ke mně dostalo
                    ocelové kolo Wheeler s pevnou vidlicí. Jízdě na horském kole
                    jsem naprosto propadl.
                  </p>
                  <p>
                    S láskou k tomuto sportu šel ruku v ruce nejen jezdecký
                    posun, ale také nevyhnutelná nutnost zvyšovat kvalitu kola.
                    Postupně jsem měnil stroje a celou dobu se snažil servisovat
                    na nich vše, co bylo v mých silách.
                  </p>
                  <p>
                    V devadesátkých letech jsem jezdil na legendárních značkách
                    jako Ellsworth, Yeti či Klein. Můj ateliér dodnes obsahuje
                    historické kusy jako AMP nebo San Andreas — jako připomínku
                    pionýrských dob.
                  </p>
                  <p className="text-accent font-medium italic">
                    Nechtěl jsem totiž svá kola svěřovat na servis ani stavbu
                    nikomu, koho jsem osobně neznal.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Birth of studio */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                2018 — Nový začátek
              </p>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
                Zrod bike studia
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  A tehdy začala vznikat myšlenka prémiového bikestudia, kde se
                  budou klienti cítit vítáni a nebudou mít strach o svoje biky.
                  V roce 2018 jsem opustil práci v audiovizuální branži a
                  rozhodl se založit Flowcycles.
                </p>
                <p>
                  Svoji garáž jsem upravil na designový ateliér pro stavbu a
                  servis kol. Hlavní vybavení bylo připraveno začátkem roku
                  2020. Prostor byl postupně vybavován vlastníma silami s pomocí
                  kamaráda truhláře.
                </p>
                <p>
                  Začal jsem s distribucí značky Funn, později s ocelovými a
                  titanovými rámy Pipe Dream Cycles. Vyzkoušel jsem spolupráci
                  s dalšími značkami — Mondraker, Yeti — ale nakonec jsem se
                  soustředil výhradně na <strong>Pivot Cycles</strong>.
                </p>
                <p>
                  Absolvoval jsem školení od DT Swiss, Fox a Marzocchi.
                  Spolupracoval jsem se závodníky jako Radek Kulhavý a Martin
                  Brzoň, kteří mi pomohli zdokonalit se. Dnes mám na skladě
                  zapletená kola, vidlice, náhradní tlumiče a servisní kity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Authorized service */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Autorizované servisní centrum
              </p>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
                Fox & Marzocchi
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Profesionální péče o vaše odpružení s originálními díly a
                školením přímo od výrobce. Přímo v Praze.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex items-center justify-center gap-16 lg:gap-24">
            <ScrollReveal>
              <Image
                src="/assets/logos/fox.png"
                alt="Fox"
                width={180}
                height={60}
                className="invert opacity-80 h-12 w-auto"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Image
                src="/assets/logos/marzocchi.png"
                alt="Marzocchi"
                width={180}
                height={60}
                className="invert opacity-80 h-12 w-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Naše hodnoty
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: "Individualita",
                text: "Každý jezdec je jiný. Proto ke každému přistupujeme individuálně — od výběru kola po nastavení odpružení na míru.",
              },
              {
                title: "Kvalita",
                text: "Pracujeme pouze s prémiovými značkami a díly. Žádné kompromisy, žádné zkratky. Chci prodávat kvalitu a mít stabilní klientelu.",
              },
              {
                title: "Vášeň",
                text: "Tohle není jen práce — je to životní styl. Výsledkem a mým největším potěšením je nádherné, funkční kolo a naprosto spokojený zákazník.",
              },
            ].map((value) => (
              <ScrollReveal key={value.title}>
                <div className="bg-background p-8 lg:p-10 h-full">
                  <h3 className="text-lg font-bold uppercase tracking-[0.1em] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              Dorazte na kávu
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Showroom je otevřený po domluvě. Rádi vám ukážeme prostory,
              představíme kola a probereme vaše plány. Nejlépe mne zastihnete
              na telefonu.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
            >
              Domluvit návštěvu
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
