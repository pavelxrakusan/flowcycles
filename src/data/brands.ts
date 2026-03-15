export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  products: string[];
  origin: string;
  website: string;
  logoPlaceholder: string; // CSS gradient as logo placeholder until real logos
  accentColor: string;
}

export const componentBrands: Brand[] = [
  {
    slug: "chromag",
    name: "Chromag",
    tagline: "Whistler. Kořeny v dirt jumpu.",
    description:
      "Kanadská značka z Whistleru, BC — kolébky gravity ridingu. Chromag vyrábí řídítka, představce, sedla a gripy, které jsou první volbou pro jezdce, kteří chtějí absolutní kontrolu na trati.",
    story:
      "Chromag vznikl v srdci Whistleru — v komunitě jezdců, kteří potřebovali komponenty schopné přežít nejdrsnější podmínky na planetě. Od dirt jumpu přes freeride po enduro — Chromag produkty jsou navrženy jezdci pro jezdce. Každý kus je testován na trailech, které definují moderní horskou cyklistiku.",
    products: [
      "Řídítka (BZA 35, Fubars OSX, Cutlass)",
      "Představce (HiFi 35, Ranger V2, BZA)",
      "Sedla (Trailmaster, Overture, Mood)",
      "Gripy a barends",
    ],
    origin: "Whistler, BC, Kanada",
    website: "https://chromagbikes.com",
    logoPlaceholder: "linear-gradient(135deg, #e63946, #1d3557)",
    accentColor: "#e63946",
  },
  {
    slug: "industry-nine",
    name: "Industry Nine",
    tagline: "Hand Made in Asheville, NC.",
    description:
      "Ručně vyráběná kola a náboje z Asheville, Severní Karolína. Industry Nine je synonymem pro precizní engineering, barvy na míru a legendární engagement nábojů Hydra.",
    story:
      "Industry Nine vyrábí každé kolo a každý náboj ručně v Asheville. Jejich patentovaný systém nábojů Hydra s 690 body záběru (0.52° engagement) je nejrychlejší na trhu — když šlápnete, kolo okamžitě reaguje. Navíc nabízejí AnoLab — možnost navrhnout si barvu kol přesně podle vašich představ.",
    products: [
      "Kola (XC, Trail, Enduro, DH, Gravel, Road)",
      "Náboje (Hydra, Hydra2, Solix)",
      "Představce a hlavová složení",
      "AnoLab — custom barvy na míru",
    ],
    origin: "Asheville, NC, USA",
    website: "https://industrynine.com",
    logoPlaceholder: "linear-gradient(135deg, #2196f3, #0d47a1)",
    accentColor: "#2196f3",
  },
  {
    slug: "pine-wheels",
    name: "PINE Wheels",
    tagline: "České karbonové kola. Bez kompromisů.",
    description:
      "PINE Wheels je česká značka karbonových kol pro MTB a CX. Vznikla z přesvědčení, že špičková karbonová kola nemusí stát dva měsíční platy.",
    story:
      "PINE Wheels se zrodily po brutálním závodě a následné diskuzi: je opravdu nutné utratit dva měsíční platy za karbonová kola? Zakladatelé celý život jezdili po trailech v Česku i zahraničí a rozhodli se, že to jde lépe. Začali stavět kola pro kamarády — a když se ukázalo, že kvalita odpovídá top značkám za zlomek ceny, rozhodli se je nabídnout všem.",
    products: [
      "PINE 32 — Enduro & Trail karbon kola",
      "PINE 27 — Trail karbon kola",
      "PINE 24 Ultralite — XC & CX karbon kola",
    ],
    origin: "Česká republika",
    website: "https://www.pine-wheels.com",
    logoPlaceholder: "linear-gradient(135deg, #2e7d32, #1b5e20)",
    accentColor: "#4caf50",
  },
  {
    slug: "garbaruk",
    name: "Garbaruk",
    tagline: "Built in Poland. Ridden everywhere.",
    description:
      "Polská značka ultra-lehkých komponentů. CNC obráběné kazety, převodníky, kliky a kladky v anodizovaných barvách na míru. Nejlehčí 8-bolt MTB převodník na světě.",
    story:
      "Garbaruk založili bratři Valerii a Yurii Garbaruk v polovině 2000s jako malou karbonovou dílnu. Začínali opravami a návrhy karbonových rámů, postupně se přesunuli k výrobě ultra-lehkých komponentů. Dnes vyrábějí v Polsku u Krakova a jejich produkty jezdí po celém světě. Za tři roky na trhu nemají ani jeden zaznamenaný zlomený klik.",
    products: [
      "Kazety (11, 12, 13 rychlostí)",
      "Převodníky — nejlehčí 8-bolt MTB na světě",
      "Kliky — CNC hliník, od 400g",
      "Kladky a cage k přehazovačkám — custom barvy",
      "Kola a náboje (Garbaruk RS, od 1170g)",
    ],
    origin: "Krakov, Polsko",
    website: "https://www.garbaruk.com",
    logoPlaceholder: "linear-gradient(135deg, #ff6f00, #e65100)",
    accentColor: "#ff9800",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return componentBrands.find((b) => b.slug === slug);
}
