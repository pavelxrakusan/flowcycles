export const metadata = {
  title: "Ochrana osobních údajů | Flowcycles",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
          Ochrana osobních údajů
        </h1>
        <div className="prose-policy space-y-6 text-muted text-sm leading-relaxed">
          <p><strong className="text-foreground">Správce osobních údajů:</strong><br />
          Andrej Jakovlev<br />
          Dolínecká 3417/17, 100 00 Praha 10 – Strašnice<br />
          IČ: 06575153<br />
          Tel.: +420 608 420 006</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">1. Jaké údaje zpracováváme</h2>
          <p>V souvislosti s poskytováním služeb a plněním smluv zpracováváme: jméno a příjmení, doručovací a fakturační adresu, e-mailovou adresu, telefonní číslo, údaje o objednávkách a platbách.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">2. Účel zpracování</h2>
          <p>Osobní údaje zpracováváme za účelem plnění smlouvy — vyřízení objednávky, poskytnutí servisu, komunikace ohledně zakázky a vyřízení případných reklamací. Právním základem je čl. 6 odst. 1 písm. b) GDPR.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">3. Příjemci údajů</h2>
          <p>Vaše údaje mohou být předány přepravním společnostem (PPL, Zásilkovna, GLS, Česká pošta) za účelem doručení zásilky. Analytické a marketingové nástroje (cookies) vyžadují váš výslovný souhlas.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">4. Doba uchovávání</h2>
          <p>Údaje uchováváme po dobu trvání smluvního vztahu a záruční doby (24 měsíců). Faktury a daňové doklady po dobu stanovenou zákonem (5–10 let). Marketingové údaje po dobu 5 let, pokud neodvoláte souhlas dříve.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">5. Vaše práva</h2>
          <p>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Svá práva můžete uplatnit e-mailem nebo telefonicky.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">6. Dozorový orgán</h2>
          <p>V případě pochybností o správnosti zpracování osobních údajů se můžete obrátit na Úřad pro ochranu osobních údajů (www.uoou.cz).</p>

          <p className="text-muted/60 mt-10">Účinnost od 1. 4. 2023</p>
        </div>
      </div>
    </section>
  );
}
