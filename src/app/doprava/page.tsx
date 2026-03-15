export const metadata = {
  title: "Doprava | Flowcycles",
};

export default function ShippingPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
          Doprava
        </h1>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <p>Nabízíme tři způsoby doručení v rámci České republiky. Všechny zásilky odesíláme do 5 pracovních dnů. O stavu zásilky budete informováni e-mailem nebo SMS.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Zásilkovna</h2>
          <p>Uložení zásilky do vámi vybrané pobočky. Doručení do 5 pracovních dnů. Notifikace e-mailem a SMS.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">GLS kurýr</h2>
          <p>Doručení kurýrem na zadanou adresu. Do 5 pracovních dnů. Sledování zásilky e-mailem a SMS.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Česká pošta</h2>
          <p>Doručení kurýrem na adresu. Do 5 pracovních dnů. Kurýr vás předem kontaktuje telefonicky.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Osobní odběr</h2>
          <p>Zboží si můžete vyzvednout osobně v našem studiu po předchozí domluvě. Adresa: Dolínecká 3417/17, Praha 10.</p>
        </div>
      </div>
    </section>
  );
}
