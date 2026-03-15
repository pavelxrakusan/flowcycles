export type BlogCategory =
  | "stavba-mesice"
  | "pribehy"
  | "zakaznici"
  | "servis"
  | "technologie"
  | "poradna"
  | "zavodni-tym"
  | "dobrodruzstvi";

export interface BlogCategoryInfo {
  id: BlogCategory;
  name: string;
  description: string;
}

export const blogCategories: BlogCategoryInfo[] = [
  { id: "stavba-mesice", name: "Stavba měsíce", description: "Každý měsíc představujeme výjimečný projekt z našeho studia." },
  { id: "zakaznici", name: "Příběhy zákazníků", description: "Naši klienti a jejich cesta ke správnému kolu." },
  { id: "servis", name: "Ze servisu", description: "Nahlédněte pod ruce našeho mechanika. Údržba, opravy, tipy." },
  { id: "technologie", name: "Technologie", description: "Jak fungují věci, které dělají vaše kolo výjimečným." },
  { id: "poradna", name: "Poradna", description: "Pomůžeme vám zorientovat se ve světě cyklistiky." },
  { id: "pribehy", name: "Příběhy", description: "Lidé, kola a kilometry, které je spojují." },
  { id: "zavodni-tym", name: "Závodní tým", description: "Novinky z Pivot Factory Racing a závodní scény." },
  { id: "dobrodruzstvi", name: "Dobrodružství", description: "Cesty, expedice a výpravy na dvou kolech." },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  excerpt: string;
  image: string;
  content: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  // ═══════════════════════════════════════
  // STAVBA MĚSÍCE
  // ═══════════════════════════════════════
  {
    slug: "stavba-mesice-firebird-purple-galaxy",
    title: "Stavba měsíce: Firebird Purple Galaxy",
    date: "1. března 2026",
    category: "stavba-mesice",
    excerpt:
      "Klient přišel s jasnou vizí — enduro kolo, které zvládne závody i víkendové výlety. Výsledkem je Firebird v provedení Purple Galaxy se sestavou, která nechává minimum přání.",
    image: "/assets/bikes/colors/firebird-purple-galaxy.png",
    featured: true,
    content: `Když Martin poprvé zavolal do studia, věděl přesně co chce. Enduro kolo, které ho udrží na trati při závodech Moravského poháru, ale zároveň zvládne víkendové výlety s kamarády v Alpách.

## Zadání

Martin jezdí enduro třetím rokem. Měří 182 cm, váží 78 kg a jeho domovské traily jsou v okolí Karlštejna. Dvakrát ročně vyráží na týdenní trip do Alp — Finale Ligure, Saalbach, Les Gets.

Prioritou byla stabilita v rychlosti, spolehlivost a lehká údržba. Rozpočet nebyl hlavní kritérium — hlavní bylo, aby kolo sedělo.

## Proč Firebird

Po konzultaci v showroomu jsme se shodli na Firebirdu. 165mm zdvihu vzadu je dost na alpské enduro, ale díky dw-link kinematice kolo šlape překvapivě efektivně. Martin si vyzkoušel velikost L i XL — s jeho proporcemi jasně vyhrála L.

## Sestava

| Komponent | Volba |
|-----------|-------|
| Rám | Pivot Firebird L — Purple Galaxy |
| Vidlice | Fox 38 Factory GRIP2 170mm |
| Tlumič | Fox Float X2 Factory |
| Řazení | SRAM XX Eagle AXS T-Type |
| Brzdy | SRAM Code Ultimate Stealth 220/200mm |
| Kola | Industry Nine Enduro S Hydra |
| Pláště | Maxxis Assegai EXO+ / Minion DHR II EXO+ |
| Sedlovka | RockShox Reverb AXS 200mm |
| Řídítka | Chromag BZA 35, 800mm |
| Představec | Chromag HIFI 35, 40mm |

## Stavba

Celá stavba trvala dva dny. Každý šroub utažený momentovým klíčem, lany vedeny čistě, brzdy perfektně odvzdušněny. Odpružení jsme nastavili na Martinovu hmotnost — 30% SAG vzadu, 20% vpředu s LSC a HSC podle jeho stylu jízdy.

## Výsledek

Martin si kolo vyzvedl v pátek, v sobotu už jel Karlštejn. Zpětná vazba? "Nejstabilnější kolo na jakém jsem kdy seděl. A do kopce šlape líp než moje předchozí trail kolo."

Kolo pravidelně přijíždí na servis — Martin patří k těm, kdo se o svůj stroj starají. A to je přesně typ klienta, kterého máme rádi.`,
  },
  {
    slug: "stavba-mesice-mach4sl-modra-stellar",
    title: "Stavba měsíce: Mach 4 SL pro závodníka",
    date: "1. února 2026",
    category: "stavba-mesice",
    excerpt:
      "Tomáš závodí XC na republikové úrovni a potřeboval kolo, které mu pomůže do první desítky. Mach 4 SL v Blue Stellar Fade s top sestavou.",
    image: "/assets/bikes/colors/mach4sl-blue-stellar.png",
    content: `Tomáš je manažer velké IT firmy, ale víkendy tráví na závodech. XC závodí šestým rokem a letos si dal za cíl top 10 na republikovém šampionátu.

## Požadavky

Maximální lehkost bez kompromisů v tuhosti. Kompatibilita s Flight Attendant pro automatické odpružení. Bezchybný přenos výkonu.

## Sestava

Mach 4 SL velikost M v Blue Stellar Fade. Fox 34 Step-Cast Factory, Fox Float DPS Factory, SRAM XX Eagle AXS T-Type. Kola DT Swiss XRC 1200 — celková hmotnost kola pod 10.5 kg.

## Nastavení

Flight Attendant jsme kalibrovali na Tomášovu hmotnost a závodní styl. Flip-chip v pozici 120mm pro versatilnější tratě. Posuvná sedlovka Fox Transfer SL pro technické sjezdy.

Tomáš od té doby dvakrát stál na stupních vítězů v regionálních závodech. Cíl pro šampionát žije.`,
  },
  {
    slug: "stavba-mesice-vault-bikepacking",
    title: "Stavba měsíce: Vault pro Island a dál",
    date: "1. ledna 2026",
    category: "stavba-mesice",
    excerpt:
      "Petra plánovala tříměsíční bikepacking expedici přes Skandinávii. Potřebovala kolo, které přežije všechno. Vault v Mossy Forest jí to splnil.",
    image: "/assets/bikes/vault.png",
    content: `Petra pracuje v korporátu, ale jednou za rok si bere tři měsíce volna a cestuje na kole. Letos plánovala trasu Kodaň — Nordkapp přes Norsko a Švédsko.

## Proč Vault

Clearance pro 700×50c pláště, úchyty pro kompletní bikepacking setup, ISO FLEX pro komfort na tisících kilometrech šotoliny. Vault je přesně to kolo, které zvládne expedici i závod.

## Sestava

Vault v provedení Mossy Forest, velikost S. SRAM Rival AXS 2×12 pro maximální rozsah převodů. Kola Industry Nine UL235 s pláštěmi WTB Riddler 700×45c. Ergon GP1 gripové pásky na drop bar pro pohodlí.

## Bikepacking výbava

Apidura brašny — sedlová 17L, rámová 4.5L, řídítková 14L. Celková kapacita přes 35 litrů. Stan, spacák, vařič, náhradní díly — vše se vešlo.

Petra posílá fotky z cesty. Vault jede bez problémů. ISO FLEX systém prý doslova zachraňuje záda na norských šotolinách.`,
  },

  // ═══════════════════════════════════════
  // PŘÍBĚHY ZÁKAZNÍKŮ
  // ═══════════════════════════════════════
  {
    slug: "jak-jsem-nasel-sve-kolo-daviduv-pribeh",
    title: "Jak jsem našel své kolo: Davidův příběh",
    date: "15. února 2026",
    category: "zakaznici",
    excerpt:
      "David je finanční ředitel, který celý život běhal. Na kole seděl naposledy v dětství. Dnes jezdí Switchblade a každý měsíc se vrací na kávu k Andrejovi.",
    image: "/assets/gallery/action-trail.jpg",
    featured: true,
    content: `David mi zavolal v listopadu. Řekl: "Andrejí, chci kolo. Ale poslední kolo jsem měl ve dvanácti a bylo to Favorit." Domluvili jsme se na návštěvu studia.

## První konzultace

Přišel v obleku, rovnou z práce. Dali jsme si kávu a hodinu jsme si povídali. Ne o kolech — o tom, co chce od života mimo kancelář. David běhal maratony, ale kolena už nespolupracovala. Chtěl sport, který ho dostane ven, ale nebude ničit klouby.

## Výběr kola

Po dvou návštěvách jsme se shodli na Switchblade. Univerzální trail kolo, které zvládne všechno — od lesních cest kolem Prahy po alpské výlety, které David plánoval. Velikost L, Stealth Mojave.

## Nastavení na míru

David váží 88 kg. Nastavili jsme odpružení na jeho hmotnost — 30% SAG vzadu, 25% vpředu. Sedlo posunuli o 1 cm dozadu pro pohodlnější posez. Řídítka zkrátili o 2 cm — David má užší ramena.

## Po půl roce

David jezdí dvakrát týdně. Prokopské údolí, Šárka, občas Karlštejn. V létě byl poprvé v životě v Alpách na kole — Saalbach, 3 dny. Prý nejlepší dovolená v životě.

Každý měsíc se zastaví na kávu a na rychlou kontrolu kola. Přesně takový vztah s klientem mě baví nejvíc — dlouhodobý, založený na důvěře.

"Andrej mi prodal víc než kolo. Prodal mi důvod, proč se těšit na víkend," řekl David.`,
  },
  {
    slug: "eva-a-jeji-shuttle-lt",
    title: "Eva a její Shuttle LT: Návrat na trail po padesátce",
    date: "28. ledna 2026",
    category: "zakaznici",
    excerpt:
      "Evě je 52 let a po operaci kolene si myslela, že trail riding je pro ni minulostí. Shuttle LT jí dokázal opak.",
    image: "/assets/gallery/action-ebike.jpg",
    content: `Eva jezdila trail kola patnáct let. Pak přišla operace předního zkříženého vazu a rok rehabilitace. Vrátila se na kolo, ale stoupání do kopce bylo utrpení.

## E-bike? Nikdy!

"Říkala jsem si, že e-bike je pro staré lidi," směje se Eva. "Pak jsem u Andreje zkusila Shuttle LT a za hodinu jsem změnila názor."

## Proč Shuttle LT

Bosch CX-R motor s 100Nm pomáhá do kopce, ale sjezd je čistě na jezdci. 162mm zdvihu a enduro geometrie znamenají, že Shuttle LT zvládne traily, které by Eva na klasickém kole po operaci nezvládla.

## Nastavení

Eva váží 62 kg — nastavili jsme odpružení měkčeji než obvykle, aby kolo bylo co nejpohodlnější. Režim asistence na "Tour" pro delší výlety, "eMTB" pro strmé stoupání.

## Rok poté

Eva jezdí víc než před operací. "Ten motor je jako kamarád, který vás tlačí do kopce. Na sjezdu jste pak sami — a ten pocit je k nezaplacení."

Každé dva měsíce přijíždí na servis. Kolo je v perfektním stavu, Eva taky.`,
  },

  // ═══════════════════════════════════════
  // ZE SERVISU
  // ═══════════════════════════════════════
  {
    slug: "jak-se-servisuje-fox-36-vidlice",
    title: "Jak se servisuje Fox 36: Kompletní průvodce",
    date: "10. března 2026",
    category: "servis",
    excerpt:
      "Nahlédněte pod ruce servisního technika. Krok za krokem vám ukážeme, co obnáší kompletní servis Fox 36 vidlice a proč je důležitý.",
    image: "/assets/technology/fox-live-valve.jpg",
    featured: true,
    content: `Fox 36 je jedna z nejpopulárnějších enduro vidlic na trhu. V našem studiu jich servisujeme desítky ročně. Pojďme se podívat, co takový kompletní servis obnáší.

## Kdy servisovat?

Fox doporučuje lower leg servis každých 50 hodin jízdy a kompletní overhaul každých 200 hodin. V praxi to znamená lower leg servis dvakrát za sezónu a komplet jednou.

## Lower leg servis (50h)

### Co děláme:
1. **Demontáž spodních noh** — stažení šroubů na spodku noh
2. **Vypuštění oleje** — starý olej může obsahovat kovové částice
3. **Kontrola pěnových kroužků** — nasávají olej a maží kluzné pouzdra
4. **Čištění** — vnitřek noh, kluzná pouzdra, pracho-stěrky
5. **Nové pracho-stěrky** — originální Fox SKF prachy
6. **Nový olej** — Fox Gold 20WT do jedné nohy, Fox Float Fluid do druhé
7. **Montáž a kontrola** — momenty utažení podle specifikace

### Výsledek
Vidlice se pohybuje hladce, bez zadrhávání. Malé nerovnosti, které jste před servisem necítili, jsou najednou zpět. Jako nová vidlice.

## Kompletní overhaul (200h)

Kompletní rozložení — výměna všech těsnění, O-kroužků, pouzder. Kontrola vnitřních trubek pod lupou. Výměna olejů v obou systémech (vzduchová pružina i tlumení). Přenastavení tlumení na míru jezdci.

## Proč autorizovaný servis?

Jako autorizované centrum Fox máme přístup k originálním dílům, speciálnímu nářadí a aktuálním servisním postupům přímo od výrobce. Neimprovizujeme — pracujeme přesně podle specifikace.

## Objednejte se

Servis Fox vidlice trvá typicky 1–2 pracovní dny. Přijeďte do studia nebo pošlete vidlici poštou.`,
  },
  {
    slug: "nastaveni-odpuzeni-na-miru",
    title: "Nastavení odpružení na míru: Proč záleží na každém kliknutí",
    date: "22. února 2026",
    category: "servis",
    excerpt:
      "Správné nastavení odpružení je rozdíl mezi kolem, které jede a kolem, které jede skvěle. Ukážeme vám, jak přistupujeme k ladění.",
    image: "/assets/technology/suspension-science.jpg",
    content: `Koupili jste si kolo za statisíce. Ale jezdíte s továrním nastavením odpružení. To je jako koupit si Porsche a nikdy nepřehodit z komfortního režimu.

## Co nastavujeme

### SAG (propad)
Základ všeho. Kolik vidlice a tlumič propruží pod vaší hmotností. Závisí na váze, stylu jízdy a terénu.

- **XC / Trail:** 25–30% SAG
- **Enduro:** 28–32% SAG
- **DH:** 30–35% SAG

### Rebound (odraz)
Jak rychle se odpružení vrací do výchozí pozice. Příliš rychlý = kolo vás vyhazuje. Příliš pomalý = odpružení nestíhá a "balí se."

### Compression (stlačení)
Low-speed: Ovlivňuje chování na brzdných vlnách, v zatáčkách.
High-speed: Ovlivňuje chování při tvrdých dopadech a velkých nerovnostech.

## Jak probíhá nastavení u nás

1. Zvážíme jezdce v plné výbavě (helma, batoh, nářadí)
2. Nastavíme základní SAG podle hmotnosti
3. Testovací jízda na známém terénu
4. Ladění komprese a odrazu podle zpětné vazby
5. Kontrola po 2–3 jízdách — finální doladění

Celý proces zabere asi hodinu v studiu + testovací jízda. Výsledek? Kolo, které jede přesně tak, jak má — pro vás.

## Přijďte na setup session

Nastavení odpružení nabízíme jako samostatnou službu. Přijeďte s kolem, odjedete s jiným zážitkem z jízdy.`,
  },

  // ═══════════════════════════════════════
  // TECHNOLOGIE
  // ═══════════════════════════════════════
  {
    slug: "proc-pivot-dwlink-technologie",
    title: "Proč Pivot? Technologie dw-link™ vysvětlena",
    date: "12. března 2026",
    category: "technologie",
    excerpt:
      "Co dělá kola Pivot výjimečná? Systém odpružení dw-link™ je srdcem každého modelu. Tři dekády inovací.",
    image: "/assets/technology/suspension-science.jpg",
    content: `Co dělá kola Pivot výjimečná? Patentovaný systém odpružení dw-link™ je srdcem každého modelu.

## Co je dw-link™?

Patentovaný čtyřčepový systém odpružení navržený Dave Weaglem. Dva krátká ramena s unikátní kinematikou přinášejí kombinaci anti-squat, progresivity a minimálního brzdného odporu.

## Anti-squat — šlapete, nebobáte

dw-link eliminuje pedal bob. Vaše energie jde do pohonu kola, ne do komprese tlumiče. Šlapete nahoru efektivně i bez blokace odpružení.

## Přirozená progresivita

Kinematika je progresivní — plushová na malých nerovnostech, tuhne ke konci zdvihu. Méně proražení, více komfortu.

## Minimální brzdný odpor

Kolo zůstává aktivní i při brzdění do zatáčky. Žádné "zamykání" odpružení při brzdění.

## DW6 — budoucnost

Phoenix přichází s DW6 — 6-bar linkage s mid-high pivotem. Revoluce v DH odpružení.

## FOX Live Valve Neo

Vybrané modely podporují FOX Live Valve Neo — elektronický systém čtoucí terén v reálném čase. Automaticky upravuje tlumení 1000× za sekundu.

Přijďte si to vyzkoušet. Rozdíl poznáte na prvním metru.`,
  },
  {
    slug: "carbon-inovace-jak-se-rodi-ram-pivot",
    title: "Jak se rodí karbonový rám: Carbon Innovation u Pivot",
    date: "8. března 2026",
    category: "technologie",
    excerpt:
      "Od návrhu přes prototypování po kontrolu kvality. Každý rám Pivot má vlastní layup pro každou velikost.",
    image: "/assets/technology/design-prototyping.jpg",
    content: `Pivot používá vlastní carbon layup pro každou velikost rámu. Rám S není zmenšenina XL — má vlastní rozložení vrstev optimalizované pro danou velikost.

## Design a prototypování

Každý model začíná v designovém studiu. Geometrie, kinematika, rozložení karbonových vláken. Rider-driven design — na vývoji se podílejí závodníci.

## Size-specific layup

Rám velikosti S má jiné namáhání než XL. Proto Pivot navrhuje layup individuálně — optimální tuhost, poddajnost a hmotnost pro každou velikost.

## Kontrola kvality

Ultrazvuková inspekce odhalí nedostatky skryté uvnitř materiálu. Rám, který neprojde, se nikdy nedostane k zákazníkovi.

## Hollow Core technologie

Dutý karbonový rám s minimální hmotností a maximální tuhostí. Technologie používaná u Mach 4 SL a Vault.

Ve Flowcycles klademe na montáž stejný důraz jako Pivot na výrobu.`,
  },

  // ═══════════════════════════════════════
  // PORADNA
  // ═══════════════════════════════════════
  {
    slug: "pruvodce-cyklistickymi-disciplinami",
    title: "Průvodce disciplínami: Jaké kolo pro jaký terén?",
    date: "5. března 2026",
    category: "poradna",
    excerpt:
      "Cross country, trail, enduro, downhill, gravel — pomůžeme vám zorientovat se a vybrat správné kolo.",
    image: "/assets/gallery/action-trail.jpg",
    featured: true,
    content: `Svět cyklistiky nabízí spoustu disciplín. Pojďme si je projít a pomůžeme vám vybrat kolo, které sedne přesně vám.

## Cross Country (XC)

Nejrychlejší disciplína. Důraz na efektivitu a lehkost. Zdvih 100–120mm nebo hardtail. V nabídce: **Mach 4 SL**, **Les SL**.

**Pro koho:** Závodníci, maratonci, rychlí jezdci.

## Trail

Nejuniverzálnější kategorie. Zvládne stoupání i sjezdy. Zdvih 120–160mm. V nabídce: **Switchblade**, **Shadowcat**, **Trailcat LT/SL**.

**Pro koho:** Každý, kdo chce jedno kolo na všechno.

## Enduro

Důraz na sjezdy, ale stále šlapete nahoru. Zdvih 150–170mm. V nabídce: **Firebird**.

**Pro koho:** Agresivní jezdci, závodníci.

## Downhill

Čistě sjezdová disciplína. Zdvih 200mm+. V nabídce: **Phoenix**.

**Pro koho:** Bike park, DH závody.

## E-Bike

Motor pomůže do kopce. V nabídce: **Shuttle LT**, **AM**, **SL**, **SL/AM**.

**Pro koho:** Více trailů za den. Návrat po zranění. Větší převýšení.

## Gravel

Drop bar, šotolina i asfalt. V nabídce: **Vault**.

**Pro koho:** Dobrodruhy, bikepacking, gravel závody.

## Silniční

Brzy v naší nabídce!

## Nevíte si rady?

Přijďte do studia. Konzultace je zdarma.`,
  },

  // ═══════════════════════════════════════
  // ZÁVODNÍ TÝM
  // ═══════════════════════════════════════
  {
    slug: "pivot-factory-racing-2026",
    title: "Pivot Factory Racing: Tým pro sezónu 2026",
    date: "19. ledna 2026",
    category: "zavodni-tym",
    excerpt:
      "Pivot Factory Racing vstupuje do sezóny s obnovenou energií. Stejná kola, na kterých závodí elita, najdete v našem showroomu.",
    image: "/assets/blog/factory-racing.jpg",
    content: `Pivot Factory Racing vstupuje do sezóny 2026 s obnovenou energií a sestavou kombinující zkušené závodníky s rostoucími talenty.

## Kompletní řada

Tým závodí na celé řadě Pivot kol — Phoenix v DH, Firebird v enduru, Mach 4 SL v XC. Každé z těchto kol je k dispozici v našem showroomu.

## Phoenix DW6

Nová sezóna přináší Phoenix s platformou DW6 — 6-bar linkage pro DH. Výsledky ze Světového poháru mluví za vše.

## Mach 4 SL

Kompletně přepracovaný Mach 4 SL s Hollow Core technologií. Nejlehčí a nejefektivnější XC kolo od Pivotu.

Přijďte si vyzkoušet stejná kola, na kterých závodí světová elita.`,
  },
  {
    slug: "camille-balanche-nova-kapitola-s-pivot",
    title: "Camille Balanche: Nová kapitola s Pivot Cycles",
    date: "24. února 2026",
    category: "zavodni-tym",
    excerpt:
      "Bývalá mistryně světa v DH se připojuje k Pivot Cycles jako ambasadorka. Phoenix, na kterém závodí, je v našem showroomu.",
    image: "/assets/blog/camille-balanche.jpg",
    content: `Po kariéře na nejvyšší úrovni sjezdového bikingu vstupuje Camille Balanche do nové kapitoly jako ambasadorka Pivot Cycles.

## Mistryně mění dres

Camille přináší obrovské zkušenosti a vášeň pro sport. Její přechod k Pivotu signalizuje nový směr — kombinaci závodních zkušeností s rozvojem nových technologií.

"Pivot představuje inovaci a odhodlání dělat věci jinak," říká Camille.

Phoenix, na kterém Camille závodí, si můžete prohlédnout v našem showroomu.`,
  },

  // ═══════════════════════════════════════
  // DOBRODRUŽSTVÍ
  // ═══════════════════════════════════════
  {
    slug: "iceland-bikepacking-tri-tydny-na-kole",
    title: "Tři týdny na kole přes Island",
    date: "13. listopadu 2025",
    category: "dobrodruzstvi",
    excerpt:
      "1 500 km islandskými pláněmi a lávovými poli. Katharina na Pivot Vault dokazuje, že gravel kolo je vstupenka na konec světa.",
    image: "/assets/blog/iceland-bikepacking.jpg",
    content: `Katharina Kruse nasedla na Vault a zamířila na Island. Tři týdny bez signálu, bez plánu, s kompletní výbavou na kole.

## 1 500 km divočiny

Lávová pole, arktické řeky, ledovcové pláně, vulkanické pouště. Vault s clearance pro 700×50c a Toolshed úložištěm se ukázal jako ideální společník.

## Proč gravel?

"Silniční kolo by tu nemělo šanci. Horské by bylo zbytečně těžké na stovky km šotoliny. Vault je přesně ten sweet spot."

## Výbava

Vault Copper Comet s Apidura brašnami. SRAM Rival AXS 2×12. WTB Riddler 700×45c.

ISO FLEX systém prý doslova zachraňuje záda na nekonečných norských šotolinách. Vault je k dispozici v showroomu.`,
  },

  // ═══════════════════════════════════════
  // PŘÍBĚHY
  // ═══════════════════════════════════════
  {
    slug: "andrej-jakovlev-flowcycles-pribeh",
    title: "Flowcycles Andreje Jakovleva: Když se z koníčka stane job",
    date: "28. června 2023",
    category: "pribehy",
    excerpt:
      "Andrej Jakovlev je v pražské komunitě známá osobnost. Se stavbou kol začal v jedenácti. Dnes provozuje prémiové bike studio.",
    image: "/assets/blog/mtbs-andrej.png",
    content: `Andrej Jakovlev je v pražské bikové komunitě známá osobnost. Se stavbou kol začal v jedenácti letech.

## Od Wheeleru k Pivotu

V devadesátkých letech jezdil na Ellsworth, Yeti či Klein. V roce 2018 opustil audiovizuální branži a založil Flowcycles. Po zkušenostech s Mondraker a Yeti se soustředil výhradně na Pivot Cycles.

## Profesionální servis

Školení od DT Swiss, Fox a Marzocchi. Spolupráce se závodníky Radek Kulhavý a Martin Brzoň. Autorizované servisní centrum Fox a Marzocchi přímo v Praze.

## Filozofie

"Chci mít stabilní klientelu." Věří na specializaci. Každé kolo odjíždí v perfektním stavu.

*Původně publikováno na MTBS.cz*`,
  },
  {
    slug: "znovu-najit-jiskru",
    title: "Znovu najít jiskru",
    date: "20. února 2026",
    category: "pribehy",
    excerpt:
      "Kelsey Timpany sdílí příběh o návratu radosti z jízdy na kole po období vyhoření.",
    image: "/assets/blog/finding-spark.jpg",
    content: `Každý cyklista to zná — období, kdy motivace klesá a kolo sbírá prach. Kelsey Timpany sdílí příběh o tom, jak znovu našla jiskru.

## Malé momenty

"Nebyl to jeden velký moment. Bylo to mnoho malých — ranní káva před výjezdem, zvuk pneumatik na šotolině, smích s kamarády na konci sjezdu."

## Proč je to důležité

Připomínka, proč jsme začali jezdit. Ne kvůli závodům nebo Stravě. Kvůli pocitu svobody.

Ve Flowcycles věříme, že kolo by mělo být zdrojem radosti.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
