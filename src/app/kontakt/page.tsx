import Link from "next/link";

export const metadata = {
  title: "Kontakt | Flowcycles",
  description:
    "Kontaktujte Flowcycles Bike Studio. Domluvte si návštěvu showroomu nebo servisní termín.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Spojte se s námi
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Kontakt
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Showroom je otevřený po předchozí domluvě. Zavolejte, napište,
            nebo vyplňte formulář — ozveme se vám co nejdříve.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-[0.1em] mb-8">
                Informace
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-2">
                    Studio
                  </h3>
                  <p className="text-muted">Flowcycles Bike Studio</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-2">
                    Sociální sítě
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/flowcycles_bike_studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted hover:text-foreground transition-colors"
                    >
                      Instagram — @flowcycles_bike_studio
                    </a>
                    <a
                      href="https://www.facebook.com/flowcyclescz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted hover:text-foreground transition-colors"
                    >
                      Facebook — flowcyclescz
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-2">
                    Otevírací doba
                  </h3>
                  <p className="text-muted">Po domluvě</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-[0.1em] mb-8">
                Napište nám
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold uppercase tracking-[0.12em] mb-2"
                  >
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold uppercase tracking-[0.12em] mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold uppercase tracking-[0.12em] mb-2"
                  >
                    Předmět
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Vyberte...</option>
                    <option value="navsteva">Návštěva showroomu</option>
                    <option value="servis">Objednávka servisu</option>
                    <option value="kolo">Zájem o kolo</option>
                    <option value="custom">Custom stavba</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold uppercase tracking-[0.12em] mb-2"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-surface border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Jak vám můžeme pomoct?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors w-full justify-center"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
