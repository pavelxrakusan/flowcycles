export const metadata = {
  title: "Reklamace a vrácení | Flowcycles",
};

export default function RefundPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
          Reklamace a vrácení zboží
        </h1>
        <div className="space-y-6 text-muted text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Právo na vrácení zboží</h2>
          <p>Spotřebitel má právo odstoupit od smlouvy do 14 dnů od převzetí zboží bez udání důvodu. Toto právo se vztahuje pouze na fyzické osoby — podnikatelé s IČ jsou z tohoto práva vyloučeni.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Postup vrácení</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Zašlete e-mail s oznámením o odstoupení a kopií dokladu o koupi.</li>
            <li>Zboží vraťte v původním stavu — poškozené nebo neúplné zboží může být důvodem k odpočtu nákladů na uvedení do původního stavu.</li>
            <li>Zboží odešlete na adresu studia do 14 dnů od odeslání oznámení.</li>
          </ol>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Vrácení peněz</h2>
          <p>Peníze vrátíme do 14 dnů od doručení vráceného zboží, a to stejnou platební metodou nebo převodem na účet. Náklady na dopravu vracíme pouze do výše nejlevnější varianty dopravy.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Záruční reklamace</h2>
          <p>Záruční doba činí 24 měsíců od data převzetí. Reklamaci uplatněte telefonicky (+420 608 420 006) nebo e-mailem. Reklamaci posoudíme do 3 pracovních dnů a vyřídíme do 14 dnů.</p>

          <h2 className="text-lg font-bold text-foreground uppercase tracking-tight mt-10 mb-4">Poškozená zásilka</h2>
          <p>Zásilku při převzetí zkontrolujte. Poškozenou zásilku odmítněte. O poškození nebo nekompletnosti nás neprodleně informujte telefonicky nebo e-mailem.</p>

          <p className="text-muted/60 mt-10">Účinnost od 1. 4. 2023</p>
        </div>
      </div>
    </section>
  );
}
