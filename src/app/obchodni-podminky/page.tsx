export const metadata = {
  title: "Obchodní podmínky | Flowcycles",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
          Obchodní podmínky
        </h1>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <p><strong className="text-foreground">Provozovatel:</strong><br />
          Andrej Jakovlev<br />
          Dolínecká 3417/17, 100 00 Praha 10 – Strašnice<br />
          IČ: 06575153<br />
          Tel.: +420 608 420 006</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">1. Informace o zboží a cenách</h2>
          <p>Informace o zboží a jeho ceně jsou závazné, s výjimkou zjevných chyb. Veškeré uváděné ceny jsou konečné včetně DPH. Cena nezahrnuje náklady na dopravu.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">2. Dodací podmínky</h2>
          <p>Zboží expedujeme do 5 pracovních dnů od potvrzení objednávky, zboží skladem do 2 pracovních dnů. Daňový doklad zasíláme do 2 dnů od převzetí zásilky. Zásilku při převzetí zkontrolujte.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">3. Odstoupení od smlouvy</h2>
          <p>Spotřebitel může od smlouvy odstoupit do 30 dnů od převzetí zboží bez udání důvodu. Zboží je třeba vrátit nepoškozené, kompletní a v původním obalu. Peníze vrátíme do 14 dnů stejnou platební metodou.</p>
          <p>Při osobním vrácení v studiu vrátíme peníze do 7 dnů. Náklady na vrácení zásilky nese zákazník.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">4. Záruční podmínky</h2>
          <p>Na veškeré zboží poskytujeme záruku 24 měsíců. V prvních 6 měsících se vady považují za existující v době převzetí. Reklamaci uplatněte e-mailem nebo telefonicky s dokladem o koupi.</p>
          <p>Reklamaci posoudíme do 3 pracovních dnů a vyřídíme do 14 dnů.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">5. Řešení sporů</h2>
          <p>Spory rozhodují české soudy. Spotřebitel může využít mimosoudní řešení sporů prostřednictvím České obchodní inspekce (www.coi.cz) nebo platformy EU pro online řešení sporů (ec.europa.eu/consumers/odr/).</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">6. Rozhodné právo</h2>
          <p>Veškeré smluvní vztahy se řídí českým právem.</p>

          <p className="text-muted/60 mt-10">Účinnost od 1. 4. 2023</p>
        </div>
      </div>
    </section>
  );
}
