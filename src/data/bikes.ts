export type BikeCategory =
  | "trail"
  | "cross-country"
  | "enduro"
  | "gravity"
  | "e-bike"
  | "gravel"
  | "dirt-jump"
  | "silnicni";

export interface BikeColor {
  name: string;
  hex: string;
  hexSecondary?: string;
  image?: string;
}

export interface GeometryRow {
  label: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

export interface SizeRow {
  size: string;
  minHeight: string;
  maxHeight: string;
}

export interface BuildSpec {
  name: string;
  components: { label: string; value: string }[];
}

export interface Bike {
  slug: string;
  name: string;
  category: BikeCategory;
  tagline: string;
  description: string;
  travelRear: string;
  travelFront: string;
  wheelSize: string;
  heroImage: string;
  galleryImages: string[];
  colors: BikeColor[];
  features: string[];
  highlights: { title: string; description: string; image?: string }[];
  productDetails: string[];
  geometry: GeometryRow[];
  sizeChart: SizeRow[];
  builds: BuildSpec[];
  faqs: { question: string; answer: string }[];
  videos: { id: string; title: string }[];
  reviews: { quote: string; author: string; publication: string }[];
}

export const bikeCategories: {
  id: BikeCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "cross-country",
    name: "Cross Country",
    description:
      "Lehkost a efektivita pro rychlé kilometry. Závodní kola pro ty, kdo chtějí být vepředu.",
  },
  {
    id: "trail",
    name: "Trail",
    description:
      "Všestranná kola pro ty, kteří chtějí jediné kolo na všechno — stoupání i sjezdy.",
  },
  {
    id: "enduro",
    name: "Enduro",
    description:
      "Agresivní geometrie a velký zdvih pro náročné terény a závodní tratě.",
  },
  {
    id: "gravity",
    name: "Gravity",
    description:
      "Maximální kontrola při maximální rychlosti. Sjezdové speciály.",
  },
  {
    id: "e-bike",
    name: "E-Bike",
    description:
      "Elektrický pohon, prémiový zážitek. Více trailů, více zábavy, více převýšení.",
  },
  {
    id: "gravel",
    name: "Gravel",
    description:
      "Svoboda na šotolině i asfaltu. Závodní i dobrodruhové gravel kolo.",
  },
  {
    id: "dirt-jump",
    name: "Dirt Jump",
    description: "Zábava v pumptracku i na skoky.",
  },
  {
    id: "silnicni",
    name: "Road",
    description: "Silniční kola pro ty, kteří milují asfalt a rychlost.",
  },
];

export const bikes: Bike[] = [
  // ═══════════════════════════════════════
  // CROSS COUNTRY
  // ═══════════════════════════════════════
  {
    slug: "mach-4-sl",
    name: "Mach 4 SL",
    category: "cross-country",
    tagline: "Rychlejší tam, kde na tom záleží",
    description:
      "Mach 4 SL je ultralehký XC speciál nové generace. Karbonový rám Hollow Core v kombinaci s odpružením dw-link přináší bezkonkurenční efektivitu šlapání a kontrolu v technickém terénu.",
    travelRear: "110–120mm",
    travelFront: "120mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/mach-4-sl.png",
    galleryImages: [
      "/assets/bikes/gallery/mach4sl/gallery-01.webp",
      "/assets/bikes/gallery/mach4sl/gallery-02.webp",
      "/assets/bikes/gallery/mach4sl/gallery-03.webp",
      "/assets/bikes/gallery/mach4sl/gallery-04.webp",
      "/assets/bikes/gallery/mach4sl/gallery-05.webp",
      "/assets/bikes/gallery/mach4sl/gallery-06.webp",
      "/assets/bikes/gallery/mach4sl/gallery-07.webp",
      "/assets/bikes/gallery/mach4sl/gallery-08.webp",
    ],
    colors: [
      { name: "Blue Stellar Fade", hex: "#1aaee5", hexSecondary: "#004284", image: "/assets/bikes/colors/mach4sl-blue-stellar.png" },
      { name: "White Avalanche", hex: "#e8e8e8", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/mach4sl-white-avalanche.png" },
    ],
    productDetails: [
      "Ultralight Hollow Core karbonový rám",
      "XC-tuned dw-link™ odpružení",
      "Nastavitelný flip-chip (110/120mm zdvihu)",
      "Kompatibilní s RockShox Flight Attendant",
      "Velikostně specifický carbon layup",
      "Vidlice 120mm",
      "Pivot Toolshed™ úložiště v rámu",
      "Plně interní vedení lanek",
      "Velký prostor pro bidon",
    ],
    features: [
      "Ultralight Hollow Core karbonový rám",
      "XC-tuned dw-link™ odpružení",
      "Nastavitelný flip-chip (110/120mm)",
      "Kompatibilita s RockShox Flight Attendant",
      "Toolshed™ integrované úložiště",
      "Interní vedení lanek",
    ],
    highlights: [
      {
        title: "Efektivita na prvním místě",
        description:
          "Systém odpružení dw-link eliminuje pedal bob a maximalizuje přenos výkonu. Šlapete nahoru stejně efektivně jako na hardtailu.",
      },
      {
        title: "XC nové generace",
        description:
          "Moderní geometrie s delším dosahem a kratšími řetězovými vzpěrami. Stabilní v rychlosti, přesný v zatáčkách.",
      },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", xs: "35.5", sm: "39.4", md: "42.0", lg: "46.0", xl: "50.5" },
      { label: "Top Tube (Eff.)", xs: "57.4", sm: "59.1", md: "61.9", lg: "64.0", xl: "67.2" },
      { label: "Head Tube Length", xs: "8.5", sm: "9.2", md: "10.5", lg: "11.0", xl: "13.5" },
      { label: "Head Tube Angle", xs: "66.0°", sm: "66.0°", md: "66.0°", lg: "66.0°", xl: "66.0°" },
      { label: "Seat Tube Angle (Eff.)", xs: "75.0°", sm: "75.0°", md: "75.0°", lg: "75.0°", xl: "75.0°" },
      { label: "Chainstay Length", xs: "43.2", sm: "43.2", md: "43.2", lg: "43.2", xl: "43.2" },
      { label: "BB Height", xs: "33.6", sm: "33.6", md: "33.6", lg: "33.6", xl: "33.6" },
      { label: "BB Drop", xs: "3.8", sm: "3.8", md: "3.8", lg: "3.8", xl: "3.8" },
      { label: "Wheelbase", xs: "113.1", sm: "114.9", md: "117.9", lg: "120.1", xl: "123.6" },
      { label: "Stack", xs: "58.3", sm: "59.0", md: "60.2", lg: "60.6", xl: "62.9" },
      { label: "Reach", xs: "41.0", sm: "42.5", md: "45.0", lg: "47.0", xl: "49.5" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "155 cm", maxHeight: "165 cm" },
      { size: "S", minHeight: "163 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "180 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "188 cm" },
      { size: "XL", minHeight: "185 cm", maxHeight: "198 cm" },
    ],
    builds: [
      {
        name: "Mach 4 SL Pro XT",
        components: [
          { label: "Vidlice", value: "Fox 34 Step-Cast Factory 120mm" },
          { label: "Tlumič", value: "Fox Float DPS Factory" },
          { label: "Řazení", value: "Shimano XT 12sp" },
          { label: "Brzdy", value: "Shimano XT" },
          { label: "Kola", value: "DT Swiss XRC 1200" },
          { label: "Pneumatiky", value: "Maxxis Rekon Race / Aspen" },
          { label: "Sedlovka", value: "Fox Transfer Factory" },
        ],
      },
      {
        name: "Mach 4 SL Team XX AXS",
        components: [
          { label: "Vidlice", value: "RockShox SID Ultimate 120mm" },
          { label: "Tlumič", value: "RockShox SIDLuxe Ultimate" },
          { label: "Řazení", value: "SRAM XX Eagle AXS T-Type" },
          { label: "Brzdy", value: "SRAM Level Ultimate" },
          { label: "Kola", value: "DT Swiss XRC 1200" },
          { label: "Pneumatiky", value: "Maxxis Rekon Race / Aspen" },
          { label: "Sedlovka", value: "RockShox Reverb AXS" },
        ],
      },
    ],
    faqs: [
      {
        question: "Jaký je rozdíl mezi 110mm a 120mm nastavením?",
        answer:
          "Flip-chip umožňuje přepínat mezi 110mm a 120mm zdvihu. 110mm je efektivnější pro rovnější tratě a závody, 120mm přidává versatilitu v technickém terénu.",
      },
      {
        question: "Je Mach 4 SL kompatibilní s Flight Attendant?",
        answer:
          "Ano, Mach 4 SL je plně kompatibilní s elektronickým systémem odpružení RockShox Flight Attendant, který automaticky upravuje tlumení v reálném čase.",
      },
    ],
    videos: [
      { id: "JZ_CgO5wrXw", title: "Mach 4 SL — Vše co potřebujete vědět" },
      { id: "PlYjpSu0LPQ", title: "Rychlejší tam, kde na tom záleží" },
    ],
    reviews: [],
  },

  {
    slug: "les-sl",
    name: "Les SL",
    category: "cross-country",
    tagline: "Čistokrevný závoďák",
    description:
      "Les SL je ultra-lehký XC hardtail s karbónovým Hollow Core rámem o hmotnosti pouhých 800g. Moderní závodní geometrie, nejlepší poměr tuhosti k hmotnosti ve třídě. Pro závodníky a rychlé jezdce.",
    travelRear: "Rigid",
    travelFront: "100mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/les-sl.png",
    galleryImages: [
      "/assets/bikes/gallery/les-sl/action-01.webp",
      "/assets/bikes/gallery/les-sl/action-02.webp",
      "/assets/bikes/gallery/les-sl/action-03.webp",
    ],
    colors: [
      { name: "Black Sunset", hex: "#303030", hexSecondary: "#4e4d54" },
      { name: "Silver Bullet", hex: "#ebeded", hexSecondary: "#5e626b", image: "/assets/bikes/colors/les-sl-silver.png" },
      { name: "Blue Ribbon", hex: "#3f48cb", hexSecondary: "#1d1f3d", image: "/assets/bikes/colors/les-sl-blue.png" },
    ],
    productDetails: [
      "Ultra-lehký Hollow Core karbonový rám (800g medium)",
      "Nejlepší poměr tuhosti k hmotnosti ve třídě",
      "Lehké integrované hlavové složení",
      "Moderní hardtail závodní geometrie",
      "Nízký standover pro jezdce od 148 do 200 cm",
      "Interní vedení lanek",
      "Pivot Dock Tool systém",
      "UDH standard",
      "Boost 148×12mm",
      "Pressfit BB92",
    ],
    features: ["800g karbonový rám", "Hollow Core technologie", "Moderní HT geometrie", "27.2mm sedlovka", "Boost spacing", "UDH standard"],
    highlights: [
      { title: "800 gramů", description: "Rám medium váží pouhých 800g. Ultra-lehký Hollow Core karbonový layup s nejlepším poměrem tuhosti k hmotnosti ve své třídě." },
      { title: "Moderní hardtail", description: "Žádný retro hardtail. Les SL má moderní závodní geometrii s delším reachem a kratšími řetězovými vzpěrami. Stabilní v rychlosti, přesný v zatáčkách." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", md: "42.0" },
      { label: "Top Tube (Eff.)", md: "62.0" },
      { label: "Head Tube Angle", md: "68.5°" },
      { label: "Seat Tube Angle", md: "74.5°" },
      { label: "Chainstay", md: "42.9" },
      { label: "Wheelbase", md: "113.2" },
      { label: "Stack", md: "60.1" },
      { label: "Reach", md: "44.5" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "163 cm" },
      { size: "S", minHeight: "160 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "190 cm" },
      { size: "XL", minHeight: "185 cm", maxHeight: "198 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [
      { id: "JV4x9JWdWD4", title: "Les SL — The Fly By" },
    ],
    reviews: [
      { quote: "Pro XC závody a rychlou jízdu je těžké Les SL něco vytknout. Ovládání bylo neuvěřitelné a lehkost nešla ignorovat při akceleraci a stoupání.", author: "Seiji Ishii", publication: "Gear Junkie" },
    ],
  },

  {
    slug: "les-sl-drop-bar",
    name: "LES SL Drop Bar",
    category: "cross-country",
    tagline: "XC s gravel DNA",
    description: "LES SL Drop Bar kombinuje ultra-lehký Hollow Core karbonový rám (800g) s drop bar geometrií. 100mm vidlice, moderní gravel/XC geometrie a nejlepší poměr tuhosti k hmotnosti ve třídě. Pro gravel závody, lesní cesty i rychlé kilometry.",
    travelRear: "Rigid",
    travelFront: "100mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/les-sl-drop.png",
    galleryImages: ["/assets/bikes/gallery/les-sl-drop/gallery-01.webp", "/assets/bikes/gallery/les-sl-drop/action-01.webp", "/assets/bikes/gallery/les-sl-drop/gallery-02.webp", "/assets/bikes/gallery/les-sl-drop/action-02.webp"],
    colors: [
      { name: "Silver Bullet", hex: "#ebeded", hexSecondary: "#5e626b" },
      { name: "Black Sunset", hex: "#303030", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/les-sl-drop-black.png" },
      { name: "Blue Ribbon", hex: "#3f48cb", hexSecondary: "#1d1f3d", image: "/assets/bikes/colors/les-sl-drop-blue.png" },
    ],
    productDetails: ["Ultra-lehký Hollow Core karbonový rám (800g)", "FOX Performance Step-Cast 32 100mm vidlice", "SRAM GX Eagle Transmission", "Drop bar specifická geometrie", "Nejlepší poměr tuhosti k hmotnosti", "Nízký standover (od 148 do 200 cm)", "Interní vedení lanek", "UDH standard", "Boost 148×12mm", "Pressfit BB92", "Max pláště 29×2.4"],
    features: ["800g Hollow Core rám", "Drop bar geometrie", "100mm Step-Cast vidlice", "SRAM Transmission", "Boost spacing", "UDH standard"],
    highlights: [
      { title: "800 gramů s drop barem", description: "Stejný ultra-lehký Hollow Core rám jako Les SL, ale s geometrií optimalizovanou pro drop bar. XC lehkost s gravel versatilitou." },
      { title: "Moderní geometrie", description: "68.5° hlava, delší reach a nízký standover. Stabilní na šotolině, precizní na single tracku, pohodlný na dlouhých kilometrech." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", xs: "35.5", sm: "39.5", md: "42.0", lg: "47.0", xl: "51.0" },
      { label: "Top Tube (Eff.)", xs: "56.5", sm: "59.2", md: "62.0", lg: "63.8", xl: "66.8" },
      { label: "Head Tube Angle", xs: "68.0°", sm: "68.5°", md: "68.5°", lg: "68.5°", xl: "68.5°" },
      { label: "Seat Tube Angle", xs: "75.0°", sm: "74.5°", md: "74.5°", lg: "74.5°", xl: "74.5°" },
      { label: "Chainstay", xs: "42.9", sm: "42.9", md: "42.9", lg: "42.9", xl: "42.9" },
      { label: "BB Height", xs: "31.0", sm: "31.0", md: "31.0", lg: "31.0", xl: "31.0" },
      { label: "Wheelbase", xs: "108.6", sm: "110.3", md: "113.2", lg: "115.0", xl: "118.3" },
      { label: "Stack", xs: "59.4", sm: "60.1", md: "60.1", lg: "62.0", xl: "63.8" },
      { label: "Reach", xs: "40.0", sm: "42.0", md: "44.5", lg: "46.0", xl: "48.5" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "165 cm" },
      { size: "S", minHeight: "160 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "168 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "193 cm" },
      { size: "XL", minHeight: "185 cm", maxHeight: "200 cm" },
    ],
    builds: [],
    faqs: [
      { question: "Je kompatibilní s dropper postem?", answer: "Ano, LES SL Drop Bar má interní vedení pro dropper post." },
      { question: "Jaká je maximální šířka plášťů?", answer: "Maximálně 29×2.4 na ráfku 28-30mm." },
    ],
    videos: [{ id: "3BhJkvI23r4", title: "LES SL Drop Bar — Review" }],
    reviews: [],
  },

  // ═══════════════════════════════════════
  // TRAIL
  // ═══════════════════════════════════════
  {
    slug: "switchblade",
    name: "Switchblade",
    category: "trail",
    tagline: "Jedno kolo. Každý trail.",
    description:
      "Switchblade je definicí moderního trail kola. 142mm zdvihu vzadu, 160mm vpředu a 29\" kola s dw-link odpružením. Slacker hlava, strmější sedlo, delší reach a delší rozvor — moderní trail geometrie bez kompromisů.",
    travelRear: "142mm",
    travelFront: "160mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/switchblade.png",
    galleryImages: [
      "/assets/bikes/gallery/switchblade/action-01.webp",
      "/assets/bikes/gallery/switchblade/action-02.webp",
      "/assets/bikes/gallery/switchblade/action-03.webp",
      "/assets/bikes/gallery/switchblade/action-04.webp",
      "/assets/bikes/gallery/switchblade/action-05.webp",
      "/assets/bikes/gallery/switchblade/action-06.webp",
      "/assets/bikes/gallery/switchblade/action-07.webp",
    ],
    colors: [
      { name: "Stealth Mojave", hex: "#303030", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/switchblade-stealth.png" },
      { name: "Blue Neptune", hex: "#418bd8", hexSecondary: "#254d75", image: "/assets/bikes/colors/switchblade-blue.png" },
      { name: "Cotton Candy Edition", hex: "#7d3e98" },
      { name: "Laffee Taffee Edition", hex: "#e44989" },
      { name: "Starry Night Edition", hex: "#154e85" },
    ],
    productDetails: [
      "142mm dw-link™ odpružení",
      "Kompatibilní s FOX Live Valve Neo",
      "FOX 38 vidlice",
      "Karbonový rám",
      "Swinger™ nastavitelné patky (8mm)",
      "Flip-chip pro ladění progresivity",
      "Pivot Toolshed™ úložiště",
      "UDH a SRAM Transmission kompatibilní",
      "Plně interní vedení",
    ],
    features: [
      "142mm dw-link™ odpružení",
      "FOX Live Valve Neo kompatibilní",
      "Swinger™ nastavitelné patky",
      "Toolshed™ integrované úložiště",
      "Karbonový rám",
      "Special Edition dekorové sady",
    ],
    highlights: [
      {
        title: "Král trailů",
        description: "Od celodenních výletů po agresivní trail riding. Switchblade nepotřebuje kompromisy.",
      },
      {
        title: "dw-link™ v akci",
        description: "142mm zdvihu s progresivní kinematikou. Plushový na kořenech, odolný proti proražení na dropech.",
      },
    ],
    geometry: [
      { label: "Head Tube Angle", sm: "64.5°", md: "64.5°", lg: "64.5°", xl: "64.5°" },
      { label: "Seat Tube Angle", sm: "77.5°", md: "77.5°", lg: "77.5°", xl: "77.5°" },
      { label: "Reach", sm: "43.0", md: "46.0", lg: "48.5", xl: "51.5" },
      { label: "Chainstay", sm: "43.5", md: "43.5", lg: "43.5", xl: "43.5" },
      { label: "Wheelbase", sm: "119.5", md: "122.5", lg: "125.5", xl: "128.5" },
      { label: "Stack", sm: "60.5", md: "62.0", lg: "63.5", xl: "65.5" },
      { label: "BB Drop", sm: "3.5", md: "3.5", lg: "3.5", xl: "3.5" },
    ],
    sizeChart: [
      { size: "S", minHeight: "163 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "180 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "190 cm" },
      { size: "XL", minHeight: "188 cm", maxHeight: "200 cm" },
    ],
    builds: [
      {
        name: "Switchblade Pro XT/XTR",
        components: [
          { label: "Vidlice", value: "Fox 38 Factory 160mm" },
          { label: "Tlumič", value: "Fox Float X Factory" },
          { label: "Řazení", value: "Shimano XT/XTR 12sp" },
          { label: "Brzdy", value: "Shimano XTR 4-pístové" },
          { label: "Kola", value: "Industry Nine Trail S Hydra" },
          { label: "Pneumatiky", value: "Maxxis Assegai / Dissector" },
          { label: "Sedlovka", value: "Fox Transfer Factory" },
        ],
      },
      {
        name: "Switchblade Team XX AXS",
        components: [
          { label: "Vidlice", value: "Fox 38 Factory 160mm" },
          { label: "Tlumič", value: "Fox Float X Factory" },
          { label: "Řazení", value: "SRAM XX Eagle AXS T-Type" },
          { label: "Brzdy", value: "SRAM Code Ultimate" },
          { label: "Kola", value: "Industry Nine Enduro S Hydra" },
          { label: "Pneumatiky", value: "Maxxis Assegai / Dissector" },
          { label: "Sedlovka", value: "RockShox Reverb AXS" },
        ],
      },
    ],
    faqs: [
      {
        question: "Jaký je rozdíl oproti předchozí generaci?",
        answer: "Nový Switchblade má slacker hlavu, strmější sedlo, delší reach a delší rozvor. Výsledek? Stabilnější sjezd, efektivnější stoupání.",
      },
      {
        question: "Jsou dekorové sady k dispozici samostatně?",
        answer: "Special Edition dekorové sady (Cotton Candy, Laffee Taffee, Starry Night, Stranger in The Night) jsou dostupné pouze na kompletních kolech.",
      },
    ],
    videos: [{ id: "W8A_iprI-RM", title: "Switchblade — Fly By" }],
    reviews: [],
  },

  {
    slug: "shadowcat",
    name: "Shadowcat",
    category: "trail",
    tagline: "Hravá bestie",
    description: "Trail kolo na 27.5\" kolech s 140mm zdvihu vzadu a 160mm vpředu. Ultra-lehký Hollow Core karbonový rám, krátké 430mm řetězové vzpěry a FOX Live Valve Neo. Pro jezdce, kteří chtějí na trailu hlavně zábavu.",
    travelRear: "140mm",
    travelFront: "160mm",
    wheelSize: '27.5"',
    heroImage: "/assets/bikes/shadowcat-hires.png",
    galleryImages: ["/assets/bikes/gallery/shadowcat/action-01.webp", "/assets/bikes/gallery/shadowcat/action-02.webp", "/assets/bikes/gallery/shadowcat/action-03.webp", "/assets/bikes/gallery/shadowcat/action-04.webp"],
    colors: [
      { name: "Disco Oil Slick", hex: "#2f607c", hexSecondary: "#ed2c82", image: "/assets/bikes/colors/shadowcat-disco.webp" },
      { name: "Dangerfruit", hex: "#a04275", hexSecondary: "#5b224c", image: "/assets/bikes/colors/shadowcat-dangerfruit.webp" },
      { name: "Blue Mirage", hex: "#5c707f", image: "/assets/bikes/colors/shadowcat-blue.webp" },
    ],
    productDetails: [
      "Ultra-lehký Hollow Core karbonový rám",
      "140mm dw-link odpružení",
      "160mm FOX 36 vidlice (44mm offset)",
      "27.5\" kola",
      "Krátké 430mm řetězové vzpěry",
      "FOX Live Valve Neo kompatibilní",
      "Plně interní vedení lanek",
      "Moderní trail geometrie",
    ],
    features: ["140mm dw-link", "27.5\" kola", "430mm chainstay", "FOX Live Valve Neo", "Hollow Core karbon", "44mm offset vidlice"],
    highlights: [
      { title: "Hravost 27.5\"", description: "Menší kola znamenají rychlejší akceleraci, snazší manuály a více zábavy v technických sekcích. Shadowcat je pro jezdce, kteří chtějí na trailu kreativitu." },
      { title: "Krátké patky, dlouhý reach", description: "430mm řetězové vzpěry a moderní geometrie. Agilní v zatáčkách, stabilní v rychlosti. Nejlepší z obou světů." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", xs: "34.3", sm: "36.8", md: "39.4", lg: "43.2" },
      { label: "Top Tube (Eff.)", xs: "56.9", sm: "59.5", md: "62.7", lg: "65.0" },
      { label: "Head Tube Angle", xs: "65.8°", sm: "65.8°", md: "65.8°", lg: "65.8°" },
      { label: "Seat Tube Angle", xs: "76°", sm: "76°", md: "76°", lg: "76°" },
      { label: "Chainstay", xs: "43.0", sm: "43.0", md: "43.0", lg: "43.0" },
      { label: "BB Height", xs: "34.0", sm: "34.0", md: "34.0", lg: "34.0" },
      { label: "Wheelbase", xs: "114.2", sm: "117.2", md: "120.6", lg: "123.0" },
      { label: "Stack", xs: "58.2", sm: "60.5", md: "61.4", lg: "62.3" },
      { label: "Reach", xs: "41.0", sm: "43.0", md: "46.0", lg: "48.0" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "163 cm" },
      { size: "S", minHeight: "160 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "193 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [{ id: "AaxfSapYceM", title: "Shadowcat — The Fly By" }],
    reviews: [
      { quote: "Rychlé, responzivní ovládání a poppy odpružení mě povzbuzovaly hledat alternativní lajny a malé skoky.", author: "Jessie-May Morgan", publication: "Pinkbike" },
      { quote: "Shadowcat má živou a svižnou povahu, která přímo vybízí k hledání nejkreativnější cesty z kopce.", author: "Spencer Astra", publication: "Freehub" },
    ],
  },

  {
    slug: "trailcat-lt",
    name: "Trailcat LT",
    category: "trail",
    tagline: "Trail kolo s enduro schopnostmi",
    description: "Trailcat LT je trail kolo s enduro schopnostmi. 135mm zdvihu vzadu a 150mm vpředu na 29\" kolech. Ultra-lehký Hollow Core karbonový rám s Toolshed úložištěm, flip-chip geometrií a MX kompatibilitou.",
    travelRear: "135mm",
    travelFront: "150mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/trailcat-lt.png",
    galleryImages: [
      "/assets/bikes/gallery/trailcat-lt/beauty-01.webp",
      "/assets/bikes/gallery/trailcat-lt/action-01.webp",
      "/assets/bikes/gallery/trailcat-lt/beauty-02.webp",
      "/assets/bikes/gallery/trailcat-lt/action-02.webp",
      "/assets/bikes/gallery/trailcat-lt/beauty-03.webp",
      "/assets/bikes/gallery/trailcat-lt/action-03.webp",
    ],
    colors: [
      { name: "Green Meadow Mist", hex: "#c9d5c4", hexSecondary: "#89a494", image: "/assets/bikes/colors/trailcat-lt-green.png" },
      { name: "Dr Purple", hex: "#462331", hexSecondary: "#000000", image: "/assets/bikes/colors/trailcat-lt-purple.png" },
    ],
    productDetails: [
      "Ultra-lehký Hollow Core karbonový rám",
      "135mm dw-link odpružení",
      "150mm vidlice",
      "Toolshed úložiště v rámu",
      "Dual cable port design",
      "Flip chip geometrie (nastavitelný na trati)",
      "MX kola kompatibilní",
      "FOX Live Valve Neo kompatibilní",
      "Pivot Tool Dock systém",
      "UDH standard",
    ],
    features: ["135mm dw-link", "Hollow Core karbon", "Toolshed úložiště", "Flip chip geometrie", "FOX Live Valve Neo", "MX kompatibilní"],
    highlights: [
      { title: "Víc než trail", description: "135mm zdvihu s agresivní geometrií zvládne i enduro tratě. Lehký rám a efektivní kinematika ale znamenají, že stoupání je radost, ne trest." },
      { title: "Toolshed a flip chip", description: "Integrované úložiště v rámu a na trati nastavitelná geometrie. Trailcat LT je připravený na celodenní výlety i závody." },
      { title: "MX ready", description: "Kompatibilní s 29\" i MX (29/27.5) konfigurací. Zvolte setup, který sedí vašemu terénu." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", xs: "34.3", sm: "36.8", md: "39.4", lg: "43.2", xl: "47.0" },
      { label: "Top Tube (Eff.)", xs: "56.9", sm: "59.6", md: "62.9", lg: "64.6", xl: "66.0" },
      { label: "Head Tube Angle", xs: "65.6°", sm: "65.6°", md: "65.6°", lg: "65.6°", xl: "65.6°" },
      { label: "Chainstay", xs: "43.0", sm: "43.0", md: "43.0", lg: "43.1", xl: "43.3" },
      { label: "BB Height", xs: "34.6", sm: "34.6", md: "34.6", lg: "34.6", xl: "34.6" },
      { label: "Wheelbase", xs: "114.7", sm: "117.6", md: "121.1", lg: "123.0", xl: "125.6" },
      { label: "Head Tube Length", xs: "8.5", sm: "9.5", md: "10.7", lg: "11.2", xl: "12.5" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "163 cm" },
      { size: "S", minHeight: "160 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "190 cm" },
      { size: "XL", minHeight: "185 cm", maxHeight: "198 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [
      { id: "fl9mdl22ddU", title: "Trailcat LT — Vše co potřebujete vědět" },
      { id: "airRjYa-cyw", title: "Bryn Atkinson jede Trailcat LT" },
    ],
    reviews: [
      { quote: "Lehký, svižný a tuhý rám s rychlým ovládáním. Krátký a manévrovatelný design pozitivně vyčnívá.", author: "Drew Rohde", publication: "The Loam Wolf" },
      { quote: "Pivot posunul výkon trail kola a zároveň zachoval geometrii s čísly zdvihu pro efektivní a univerzální balíček.", author: "Jonathon Simonetti", publication: "Vital MTB" },
    ],
  },

  {
    slug: "trailcat-sl",
    name: "Trailcat SL",
    category: "trail",
    tagline: "Lehký a šikovný",
    description: "Trailcat SL je lehčí verze s 120mm zdvihu vzadu a 140mm vpředu. Down-country kolo s Hollow Core rámem, Toolshed úložištěm a moderní geometrií pro ty, kdo chtějí jezdit rychle nahoru i dolů.",
    travelRear: "120mm",
    travelFront: "140mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/trailcat-sl.png",
    galleryImages: [
      "/assets/bikes/gallery/trailcat-sl/beauty-01.webp",
      "/assets/bikes/gallery/trailcat-sl/beauty-02.webp",
      "/assets/bikes/gallery/trailcat-sl/beauty-03.webp",
      "/assets/bikes/gallery/trailcat-sl/beauty-04.webp",
    ],
    colors: [
      { name: "Dr Purple", hex: "#462331", hexSecondary: "#000000", image: "/assets/bikes/colors/trailcat-sl-purple.png" },
      { name: "Green Meadow Mist", hex: "#c9d5c4", hexSecondary: "#89a494", image: "/assets/bikes/colors/trailcat-sl-green.png" },
    ],
    productDetails: [
      "Ultra-lehký Hollow Core karbonový rám",
      "120mm dw-link odpružení",
      "140mm FOX 34 vidlice",
      "Toolshed úložiště",
      "Dual cable port design",
      "Flip chip geometrie",
      "MX kompatibilní",
      "UDH standard",
    ],
    features: ["120mm dw-link", "Hollow Core karbon", "FOX 34 vidlice", "Toolshed úložiště", "Flip chip", "MX kompatibilní"],
    highlights: [
      { title: "Down-country spirit", description: "120mm zdvihu a moderní geometrie. Efektivní do kopce, schopný z kopce. Pro jezdce, kteří chtějí jezdit rychle všude." },
      { title: "Lehkost s výkonem", description: "SL verze přináší nižší hmotnost rámu pro efektivnější stoupání bez kompromisů v tuhosti." },
    ],
    geometry: [
      { label: "Head Tube Angle", xs: "66.3°", sm: "66.3°", md: "66.3°", lg: "66.3°", xl: "66.3°" },
      { label: "Wheelbase", xs: "114.2", sm: "117.1", md: "120.6", lg: "122.5", xl: "125.2" },
      { label: "Seat Tube (C-T)", xs: "34.3", sm: "36.8", md: "39.4", lg: "43.2", xl: "47.0" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "163 cm" },
      { size: "S", minHeight: "160 cm", maxHeight: "173 cm" },
      { size: "M", minHeight: "170 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "178 cm", maxHeight: "190 cm" },
      { size: "XL", minHeight: "185 cm", maxHeight: "198 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [
      { id: "fl9mdl22ddU", title: "Trailcat — Vše co potřebujete vědět" },
      { id: "jlT9Dz_x5LU", title: "Jill Kintner jede Trailcat SL" },
    ],
    reviews: [
      { quote: "Trailcat SL má živý pocit a ostré ovládání pro okamžité změny směru.", author: "Will Barrett", publication: "Flow Mountain Bike" },
      { quote: "Mezi přístupným all-rounderem a precizním down-country závoďákem. Postavený pro dlouhé dny.", author: "Travis Engel", publication: "The Radavist" },
    ],
  },

  // ═══════════════════════════════════════
  // ENDURO
  // ═══════════════════════════════════════
  {
    slug: "firebird",
    name: "Firebird",
    category: "enduro",
    tagline: "Bez limitu",
    description:
      "Firebird je enduro závoďák s 165mm zdvihu vzadu a 170mm vpředu. FOX Live Valve Neo adaptivní odpružení, nastavitelné patky Swinger™ a geometrie laděná pro Enduro World Series.",
    travelRear: "165mm",
    travelFront: "170mm",
    wheelSize: '29" / MX',
    heroImage: "/assets/bikes/firebird.png",
    galleryImages: [
      "/assets/bikes/gallery/firebird/action-01.webp",
      "/assets/bikes/gallery/firebird/action-02.webp",
      "/assets/bikes/gallery/firebird/beauty-01.webp",
      "/assets/bikes/gallery/firebird/action-03.webp",
      "/assets/bikes/gallery/firebird/beauty-02.webp",
      "/assets/bikes/gallery/firebird/action-04.webp",
      "/assets/bikes/gallery/firebird/action-05.webp",
    ],
    colors: [
      { name: "White Gold", hex: "#ffffff", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/firebird-white-gold.png" },
      { name: "Yolo", hex: "#e8e44e", hexSecondary: "#474222" },
      { name: "Purple Galaxy", hex: "#6d5fa9", hexSecondary: "#2b243f", image: "/assets/bikes/colors/firebird-purple-galaxy.png" },
    ],
    productDetails: [
      "165mm dw-link™ odpružení",
      "FOX Live Valve Neo adaptivní odpružení",
      "Nastavitelné patky Swinger™ (8mm)",
      "Flip-chip pro ladění progresivity",
      "Pivot Toolshed™ úložiště s magnety",
      "UDH a SRAM Transmission kompatibilní",
      "MX kompatibilita (29/27.5)",
      "Super Boost spacing",
      "Karbonový rám",
    ],
    features: [
      "165mm dw-link™ odpružení",
      "FOX Live Valve Neo",
      "Swinger™ nastavitelné patky",
      "Toolshed™ úložiště",
      "MX kompatibilita",
      "Karbonový rám",
    ],
    highlights: [
      {
        title: "Závodní DNA",
        description: "Testován a vyvíjen s Enduro World Series jezdci. Každý detail optimalizovaný pro závodní tratě.",
      },
      {
        title: "FOX Live Valve Neo",
        description: "Adaptivní odpružení, které čte terén v reálném čase. Automaticky se přizpůsobí každé situaci — od hladkého stoupání po kamenité sjezdy.",
      },
    ],
    geometry: [
      { label: "Head Tube Angle", xs: "63.5°", sm: "63.5°", md: "63.5°", lg: "63.5°", xl: "63.5°" },
      { label: "Seat Tube Angle", xs: "78.0°", sm: "78.0°", md: "78.0°", lg: "78.0°", xl: "78.0°" },
      { label: "Reach", xs: "41.5", sm: "44.0", md: "47.0", lg: "49.5", xl: "52.5" },
      { label: "Chainstay", xs: "44.0", sm: "44.0", md: "44.0", lg: "44.0", xl: "44.0" },
      { label: "Wheelbase", xs: "121.0", sm: "124.0", md: "127.0", lg: "130.0", xl: "133.0" },
      { label: "Stack", xs: "59.5", sm: "61.0", md: "62.5", lg: "64.0", xl: "66.0" },
      { label: "BB Drop", xs: "3.0", sm: "3.0", md: "3.0", lg: "3.0", xl: "3.0" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "155 cm", maxHeight: "165 cm" },
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "180 cm", maxHeight: "193 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [
      {
        name: "Firebird Pro XT/XTR",
        components: [
          { label: "Vidlice", value: "Fox 38 Factory 170mm" },
          { label: "Tlumič", value: "Fox Float X2 Factory" },
          { label: "Řazení", value: "Shimano XT/XTR 12sp" },
          { label: "Brzdy", value: "Shimano XTR 4-pístové 220/200mm" },
          { label: "Kola", value: "Industry Nine Enduro S 1/1" },
          { label: "Pneumatiky", value: "Maxxis Assegai / Minion DHRII" },
          { label: "Sedlovka", value: "Fox Transfer Factory" },
        ],
      },
      {
        name: "Firebird Team XX AXS",
        components: [
          { label: "Vidlice", value: "Fox 38 Factory GRIP2 170mm" },
          { label: "Tlumič", value: "Fox Float X2 Factory" },
          { label: "Řazení", value: "SRAM XX Eagle AXS T-Type" },
          { label: "Brzdy", value: "SRAM Code Ultimate Stealth 220/200mm" },
          { label: "Kola", value: "Industry Nine Enduro S Hydra" },
          { label: "Pneumatiky", value: "Maxxis Assegai / Minion DHRII" },
          { label: "Sedlovka", value: "RockShox Reverb AXS" },
        ],
      },
    ],
    faqs: [
      {
        question: "Lze Firebird postavit jako mullet (MX)?",
        answer: "Ano, Firebird v XS je výhradně MX (29/27.5). Ostatní velikosti lze stavět jako plný 29er nebo MX kombinaci.",
      },
      {
        question: "Co je Swinger™ dropout?",
        answer: "Patentovaný systém nastavitelných patek, který umožňuje posunout zadní osu o 8mm. Kratší patka = agilnější kolo, delší = stabilnější.",
      },
    ],
    videos: [{ id: "zYha7rV_DUc", title: "Firebird — Vše co potřebujete vědět" }],
    reviews: [
      { quote: "Rychlý, přímý a agilní — jedno z nejlepších kol ve své třídě.", author: "Peter Walker", publication: "Enduro MTB Magazine" },
      { quote: "Spíš ohnivý drak pro jezdce, kteří chtějí kolo co šlape, ale sjíždí jako DH speciál.", author: "Drew Rohde", publication: "The Loam Wolf" },
      { quote: "Svižný, stabilní, nastavitelný a efektivní — přináší hodně na stůl.", author: "Jason Schroeder", publication: "Vital MTB" },
    ],
  },

  // ═══════════════════════════════════════
  // GRAVITY
  // ═══════════════════════════════════════
  {
    slug: "phoenix",
    name: "Phoenix",
    category: "gravity",
    tagline: "Na rychlost jsme si dali čas",
    description:
      "Phoenix je downhill speciál nové generace. 210mm zdvihu vzadu, 200mm vpředu a MX kola. Nová platforma DW6 přináší revoluci v DH odpružení — mid-high pivot s 6-bar linkage. Vítěz závodů Světového poháru.",
    travelRear: "210mm",
    travelFront: "200mm",
    wheelSize: "MX",
    heroImage: "/assets/bikes/phoenix.png",
    galleryImages: [
      "/assets/bikes/gallery/phoenix/phoenix-action-01.webp",
      "/assets/bikes/gallery/phoenix/phoenix-action-02.webp",
      "/assets/bikes/gallery/phoenix/phoenix-action-03.webp",
      "/assets/bikes/gallery/phoenix/phoenix-action-04.webp",
      "/assets/bikes/gallery/phoenix/phoenix-beauty.webp",
      "/assets/bikes/gallery/phoenix/phoenix-detail-01.webp",
      "/assets/bikes/gallery/phoenix/phoenix-detail-02.webp",
    ],
    colors: [
      { name: "Electric Red", hex: "#b70106", hexSecondary: "#000000", image: "/assets/bikes/gallery/phoenix/phoenix-electric-red.webp" },
      { name: "White Cobalt Blue", hex: "#3368b0", hexSecondary: "#a7875b", image: "/assets/bikes/gallery/phoenix/phoenix-white-cobalt.webp" },
      { name: "Black Gold", hex: "#a7875b", hexSecondary: "#4f4421", image: "/assets/bikes/gallery/phoenix/phoenix-black-gold.webp" },
      { name: "Red Mint", hex: "#d1212a", hexSecondary: "#b0c2bc", image: "/assets/bikes/gallery/phoenix/phoenix-red-mint.webp" },
    ],
    productDetails: [
      "DW6 odpružení (6-bar linkage, mid-high pivot)",
      "210mm zdvihu vzadu",
      "200mm zdvihu vpředu",
      "MX kola (29\" přední / 27.5\" zadní)",
      "SRAM XX DH Transmission (bezdrátové řazení)",
      "RockShox BoXXer Ultimate vidlice",
      "RockShox Vivid Ultimate DH tlumič",
      "Dual-chain drive kompatibilita",
      "Pivot Flip Chip (geometrie)",
      "Suspension Flip Chip (progresivita)",
      "Reach adjust hlavové složení",
      "Karbonový rám",
    ],
    features: [
      "DW6 platforma — 6-bar linkage",
      "210mm dw-link™ odpružení",
      "SRAM XX DH Transmission",
      "RockShox BoXXer Ultimate",
      "Dual-chain drive",
      "Flip Chip geometrie + progresivita",
    ],
    highlights: [
      {
        title: "World Cup šampión",
        description: "Vítěz závodů Světového poháru v DH. Stabilní při vysoké rychlosti, břitký v zatáčkách — přesně tam, kde rozhodují desetiny.",
      },
      {
        title: "DW6 — nová éra",
        description: "6-bar linkage s mid-high pivotem. Lepší trakce přes kořeny a kameny, menší brzdný odpor, plynulejší chod. Revoluce v DH odpružení.",
      },
      {
        title: "SRAM Transmission",
        description: "Bezdrátové řazení XX DH s těsnými odstupy mezi převody. Přesné, spolehlivé a bez kabelů.",
      },
    ],
    geometry: [
      { label: "Head Tube Angle", sm: "62.5°", md: "62.5°", lg: "62.5°", xl: "62.5°" },
      { label: "Seat Tube Angle", sm: "76.0°", md: "76.0°", lg: "76.0°", xl: "76.0°" },
      { label: "Reach", sm: "42.0", md: "44.5", lg: "47.5", xl: "50.5" },
      { label: "Chainstay", sm: "44.5", md: "44.5", lg: "44.5", xl: "44.5" },
      { label: "Wheelbase", sm: "125.0", md: "128.0", lg: "131.0", xl: "134.0" },
      { label: "Stack", sm: "61.0", md: "62.5", lg: "64.0", xl: "66.0" },
      { label: "BB Height", sm: "35.5", md: "35.5", lg: "35.5", xl: "35.5" },
    ],
    sizeChart: [
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "180 cm", maxHeight: "193 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [
      {
        name: "Phoenix SRAM XX DH",
        components: [
          { label: "Vidlice", value: "RockShox BoXXer Ultimate 200mm" },
          { label: "Tlumič", value: "RockShox Vivid Ultimate DH" },
          { label: "Řazení", value: "SRAM XX DH Transmission (bezdrátové)" },
          { label: "Brzdy", value: "SRAM Code Ultimate Stealth 220/200mm" },
          { label: "Kola", value: "Industry Nine DH Hydra" },
          { label: "Pneumatiky", value: "Maxxis Assegai DH / Minion DHR II DH" },
          { label: "Řídítka", value: "Chromag BZA 35" },
          { label: "Představec", value: "Chromag HiFi 35" },
        ],
      },
    ],
    faqs: [
      {
        question: "Co je DW6 a čím se liší od dw-link?",
        answer: "DW6 je evoluce dw-link platformy s 6-bar linkage designem a mid-high pivotem. Přináší lepší trakci, menší brzdný odpor a plynulejší chod v nejnáročnějších podmínkách DH závodů.",
      },
      {
        question: "Jaké kola Phoenix používá?",
        answer: "Phoenix používá MX setup — 29\" přední a 27.5\" zadní kolo. Tato kombinace přináší plynulost a rychlost 29\" kola vpředu s agilitou 27.5\" vzadu.",
      },
      {
        question: "Je Phoenix vhodný pro bike park?",
        answer: "Absolutně. Phoenix je navržený pro nejnáročnější DH tratě Světového poháru. V bike parku se bude cítit jako doma.",
      },
    ],
    videos: [{ id: "jvJHmd9eS8E", title: "Phoenix — The Fly By" }],
    reviews: [
      {
        quote: "Toto kolo nevypadá jen extrémně elegantně, ale je i nezastavitelné na trati. Jasné vítězství v našem srovnávacím testu!",
        author: "Peter Walker, Simon Kohler",
        publication: "Enduro Mountainbike Magazine",
      },
      {
        quote: "Pivot si dal za cíl vytvořit závodněji zaměřené kolo, které bude držet stopu v každé části tratě — a přesně to se jim povedlo.",
        author: "Jonathon Simonetti",
        publication: "Vital MTB",
      },
    ],
  },

  // ═══════════════════════════════════════
  // E-BIKE
  // ═══════════════════════════════════════
  {
    slug: "shuttle-lt",
    name: "Shuttle LT",
    category: "e-bike",
    tagline: "Víc trailů. Víc zábavy.",
    description:
      "Prémiový e-bike s 162mm zdvihu, Bosch CX-R motorem (100Nm, 750W) a 800Wh baterií. Fox Podium invertovaná vidlice a patentovaný systém nastavení úhlu sedla Slacky McSteepTube™.",
    travelRear: "162mm",
    travelFront: "170mm",
    wheelSize: "MX",
    heroImage: "/assets/bikes/shuttle-lt.png",
    galleryImages: [
      "/assets/bikes/gallery/shuttle-lt/action-01.webp",
      "/assets/bikes/gallery/shuttle-lt/beauty-01.webp",
      "/assets/bikes/gallery/shuttle-lt/action-02.webp",
      "/assets/bikes/gallery/shuttle-lt/beauty-02.webp",
      "/assets/bikes/gallery/shuttle-lt/action-03.webp",
      "/assets/bikes/gallery/shuttle-lt/action-04.webp",
      "/assets/bikes/gallery/shuttle-lt/action-05.webp",
    ],
    colors: [
      { name: "Black Royal Purple", hex: "#4a026c", hexSecondary: "#0a0407", image: "/assets/bikes/colors/shuttle-lt-purple.png" },
      { name: "Stone Cold White", hex: "#0a0a0a", hexSecondary: "#424242", image: "/assets/bikes/colors/shuttle-lt-stone-cold.png" },
    ],
    productDetails: [
      "162mm dw-link™ odpružení",
      "Bosch CX-R motor (100Nm, 750W peak)",
      "800Wh odnímatelná baterie (kompatibilní s 600Wh)",
      "Fox Podium invertovaná vidlice 170mm",
      "Slacky McSteepTube™ nastavení úhlu sedla (78°/76.5°)",
      "Swinger™ nastavitelné patky (8mm)",
      "Flip-chip pro ladění progresivity",
      "Plovoucí uchycení baterie",
      "Karbonový rám",
    ],
    features: [
      "Bosch CX-R 100Nm motor",
      "800Wh baterie",
      "Fox Podium invertovaná vidlice",
      "Swinger™ nastavitelné patky",
      "162mm dw-link™",
      "Karbonový rám",
    ],
    highlights: [
      {
        title: "Bosch CX-R — nová úroveň výkonu",
        description: "100Nm točivého momentu a 750W špičkového výkonu. 800Wh baterie pro celodenní jízdu v horách.",
      },
      {
        title: "Závodní e-bike",
        description: "Vypadá rychle i když stojí. Postavený pro závodníky a ty, kdo chtějí jezdit jako závodníci.",
      },
    ],
    geometry: [
      { label: "Head Tube Angle", sm: "63.5°", md: "63.5°", lg: "63.5°", xl: "63.5°" },
      { label: "Seat Tube Angle", sm: "78.0°", md: "78.0°", lg: "78.0°", xl: "78.0°" },
      { label: "Reach", sm: "44.0", md: "47.0", lg: "50.0", xl: "53.0" },
      { label: "Wheelbase", sm: "126.0", md: "129.0", lg: "132.0", xl: "135.0" },
    ],
    sizeChart: [
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "185 cm" },
      { size: "L", minHeight: "183 cm", maxHeight: "195 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [],
    faqs: [
      {
        question: "Jaký je dojezd baterie?",
        answer: "S 800Wh baterií v režimu Tour typicky 3–5 hodin jízdy v závislosti na terénu a nastavení asistence. Kompatibilní i s lehčí 600Wh baterií.",
      },
    ],
    videos: [{ id: "jIomm_hQHJk", title: "Shuttle LT — Vše co potřebujete vědět" }],
    reviews: [
      {
        quote: "Postavený jako mullet vypadá Shuttle LT rychle i když stojí — nepochybně: postavený pro závodníky.",
        author: "Dario DiGiulio",
        publication: "Pinkbike",
      },
    ],
  },

  {
    slug: "shuttle-am",
    name: "Shuttle AM",
    category: "e-bike",
    tagline: "All-mountain bez hranic",
    description: "All-mountain e-bike s ultra-lehkým hollow core karbónovým rámem, motorem Bosch Performance CX (100Nm, 750W) a 800Wh baterií. 150mm zdvihu vzadu, 160mm vpředu na 29\" kolech. FOX Live Valve Neo v Team sestavě.",
    travelRear: "150mm",
    travelFront: "160mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/shuttle-am-hires.webp",
    galleryImages: ["/assets/bikes/gallery/shuttle-am/action-01.jpg", "/assets/bikes/gallery/shuttle-am/action-02.jpg", "/assets/bikes/gallery/shuttle-am/action-03.jpg", "/assets/bikes/gallery/shuttle-am/action-04.jpg", "/assets/bikes/gallery/shuttle-am/beauty-01.jpg", "/assets/bikes/gallery/shuttle-am/beauty-02.jpg"],
    colors: [
      { name: "Badlands Brown", hex: "#8b7666", hexSecondary: "#000000", image: "/assets/bikes/colors/shuttle-am-bronze.png" },
      { name: "Blue Dark Sky", hex: "#5784A7", hexSecondary: "#2b4e6e", image: "/assets/bikes/colors/shuttle-am-blue.png" },
    ],
    productDetails: [
      "Ultra-lehký Hollow Core karbonový rám",
      "Bosch Gen 5 Performance CX/CX-R motor (100Nm, 750W peak)",
      "800Wh baterie + PowerMore 250Wh extender kompatibilní",
      "150mm progresivní dw-link odpružení",
      "160mm vidlice",
      "Flip chip v horním uložení",
      "MX kompatibilní",
      "eMTB+ adaptivní asistence",
      "FOX Live Valve Neo (Team)",
    ],
    features: ["Bosch CX 100Nm motor", "800Wh + 250Wh extender", "Hollow Core karbon", "150mm dw-link", "FOX Live Valve Neo (Team)", "eMTB+ adaptivní asistence"],
    highlights: [
      { title: "Ultra-lehký e-bike", description: "Hollow Core karbonový rám drží hmotnost na minimu. Shuttle AM se chová jako klasické trail kolo — motor jen přidává kopce." },
      { title: "Bosch Gen 5 CX", description: "100Nm točivého momentu a 750W špičkového výkonu. 800Wh baterie s možností rozšíření o PowerMore 250Wh extender pro celodenní jízdu." },
      { title: "FOX Live Valve Neo", description: "Team sestava přináší adaptivní odpružení, které čte terén 1000× za sekundu a automaticky upravuje tlumení." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", sm: "37.8", md: "39.9", lg: "43.2", xl: "47.0" },
      { label: "Head Tube Angle", sm: "64.5°", md: "64.5°", lg: "64.5°", xl: "64.5°" },
      { label: "Seat Tube Angle", sm: "76.9°", md: "76.9°", lg: "76.9°", xl: "76.9°" },
      { label: "Chainstay", sm: "44.4", md: "44.4", lg: "44.4", xl: "44.4" },
      { label: "BB Height", sm: "35.0", md: "35.0", lg: "35.0", xl: "35.0" },
      { label: "Wheelbase", sm: "121.6", md: "125.0", lg: "126.9", xl: "129.4" },
      { label: "Stack", sm: "62.9", md: "63.8", lg: "64.7", xl: "65.6" },
      { label: "Reach", sm: "43.5", md: "46.5", lg: "48.0", xl: "50.0" },
    ],
    sizeChart: [
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "185 cm" },
      { size: "L", minHeight: "183 cm", maxHeight: "195 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [{ id: "LiZxcSHqO7w", title: "Shuttle AM — Vše co potřebujete vědět" }],
    reviews: [{ quote: "Tohle kolo jede skvěle do kopce i z kopce. Je rychlé, svižné a nečekaně lehké.", author: "Cy Whitling", publication: "Freehub" }],
  },

  {
    slug: "shuttle-sl",
    name: "Shuttle SL",
    category: "e-bike",
    tagline: "Lehký e-bike, velký zážitek",
    description: "Nejlehčí e-bike v nabídce Pivot. 132mm zdvihu, Fazua Ride 60 motor (60Nm, 450W) a plný karbonový Hollow Core rám. Od 16.5 kg — hranice mezi e-bikem a klasickým kolem se stírá.",
    travelRear: "132mm",
    travelFront: "140–150mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/shuttle-sl-hires.png",
    galleryImages: ["/assets/bikes/gallery/shuttle-sl/action-01.webp", "/assets/bikes/gallery/shuttle-sl/action-02.webp", "/assets/bikes/gallery/shuttle-sl/action-03.webp", "/assets/bikes/gallery/shuttle-sl/beauty-01.webp", "/assets/bikes/gallery/shuttle-sl/beauty-02.webp"],
    colors: [
      { name: "Black Lime", hex: "#303030", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/shuttle-sl-black.png" },
      { name: "Desert Sage Green", hex: "#7c858c", image: "/assets/bikes/colors/shuttle-sl-sage.png" },
      { name: "Aspen White", hex: "#e8e8e8", image: "/assets/bikes/colors/shuttle-sl-white.png" },
    ],
    productDetails: [
      "Hollow Core karbonový rám",
      "Fazua Ride 60 motor (60Nm, 450W peak)",
      "Integrovaná baterie",
      "132mm dw-link odpružení",
      "150mm FOX 36 vidlice",
      "Trunnion-mount Float X tlumič",
      "Velikostně specifické řetězové vzpěry",
      "Nulový odpor při šlapání bez asistence",
      "3 režimy asistence + Boost",
      "Od 16.5 kg",
    ],
    features: ["Fazua Ride 60 motor", "Od 16.5 kg", "132mm dw-link", "Nulový odpor bez asistence", "FOX 36/Float X", "Hollow Core karbon"],
    highlights: [
      { title: "Téměř klasické kolo", description: "16.5 kg a nulový odpor při šlapání bez asistence. Shuttle SL je tak blízko klasickému trail kolu, jak jen e-bike může být." },
      { title: "Fazua Ride 60", description: "Tichý, hladký a efektivní motor s přirozeným pocitem jízdy. 60Nm stačí na strmé stoupání, 450W peak zvládne i krátké sprinty." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", sm: "36.8", md: "39.4", lg: "43.2", xl: "47.0" },
      { label: "Head Tube Angle", sm: "65.5°", md: "65.5°", lg: "65.5°", xl: "65.4°" },
      { label: "Seat Tube Angle", sm: "76.5°", md: "76.5°", lg: "76.5°", xl: "77.2°" },
      { label: "Chainstay", sm: "43.0", md: "43.0", lg: "43.2", xl: "43.6" },
      { label: "BB Height", sm: "35.2", md: "35.2", lg: "35.2", xl: "35.2" },
      { label: "Wheelbase", sm: "118.5", md: "122.2", lg: "123.9", xl: "127.1" },
      { label: "Stack", sm: "60.7", md: "62.2", lg: "62.6", xl: "63.8" },
      { label: "Reach", sm: "43.9", md: "46.9", lg: "48.2", xl: "50.4" },
    ],
    sizeChart: [
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "185 cm" },
      { size: "L", minHeight: "183 cm", maxHeight: "195 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [{ id: "vaHHWTlVjvM", title: "Shuttle SL — Film" }],
    reviews: [{ quote: "Málokteré kolo, které jsme testovali, akcelerovalo, zatáčelo nebo se pohybovalo tak rychle. Hravé v zatáčkách, sen pro skoky.", author: "The Loam Wolf", publication: "The Loam Wolf" }],
  },

  {
    slug: "shuttle-slam",
    name: "Shuttle SL/AM",
    category: "e-bike",
    tagline: "Lehký motor, větší zdvih",
    description: "Shuttle SL/AM kombinuje lehký Bosch Performance SX motor (55Nm, 600W) s 150mm zdvihu vzadu a 160mm vpředu. Pod 18 kg — nejlehčí all-mountain e-bike s plným výkonem. 400Wh baterie s možností rozšíření o PowerMore 250Wh.",
    travelRear: "150mm",
    travelFront: "160mm",
    wheelSize: '29"',
    heroImage: "/assets/bikes/shuttle-slam.png",
    galleryImages: ["/assets/bikes/gallery/shuttle-slam/beauty-01.webp", "/assets/bikes/gallery/shuttle-slam/action-01.webp", "/assets/bikes/gallery/shuttle-slam/beauty-02.webp", "/assets/bikes/gallery/shuttle-slam/action-02.webp", "/assets/bikes/gallery/shuttle-slam/beauty-03.webp", "/assets/bikes/gallery/shuttle-slam/action-03.webp"],
    colors: [
      { name: "Brownstone", hex: "#b2a9a0", hexSecondary: "#8c867e", image: "/assets/bikes/colors/shuttle-slam-bronze.png" },
      { name: "Gloss Grey", hex: "#3a4550", image: "/assets/bikes/colors/shuttle-slam-grey-hires.png" },
    ],
    productDetails: ["Karbonový rám pod 18 kg", "Bosch Performance Line SX (55Nm, 600W peak)", "400Wh integrovaná baterie", "PowerMore 250Wh range extender kompatibilní", "150mm dw-link odpružení", "160mm FOX 36 vidlice", "FOX Live Valve Neo (Pro/Team)", "Flip chip geometrie", "XS s MX koly", "Interní vedení lanek"],
    features: ["Bosch SX 55Nm motor", "Pod 18 kg", "400Wh + 250Wh extender", "150mm dw-link", "FOX Live Valve Neo", "Flip chip geometrie"],
    highlights: [
      { title: "Nejlehčí AM e-bike", description: "Pod 18 kg s plným all-mountain zdvihem. Bosch SX motor je lehký a kompaktní — kolo se chová téměř jako klasické trail kolo." },
      { title: "Bosch Performance SX", description: "55Nm a 600W peak v kompaktním balení. 400Wh baterie s možností rozšíření o PowerMore 250Wh extender. Dostatečný výkon pro celý den v horách." },
    ],
    geometry: [
      { label: "Head Tube Angle", xs: "64.5°", sm: "64.5°", md: "64.5°", lg: "64.5°", xl: "64.5°" },
      { label: "Seat Tube Angle", xs: "76.9°", sm: "76.9°", md: "76.9°", lg: "76.9°", xl: "76.9°" },
      { label: "Chainstay", xs: "44.4", sm: "44.4", md: "44.4", lg: "44.4", xl: "44.4" },
      { label: "BB Height", xs: "35.0", sm: "35.0", md: "35.0", lg: "35.0", xl: "35.0" },
      { label: "Wheelbase", xs: "118.8", sm: "121.8", md: "124.7", lg: "126.6", xl: "129.1" },
      { label: "Seat Tube (C-T)", xs: "34.3", sm: "37.8", md: "39.9", lg: "43.2", xl: "47.0" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "148 cm", maxHeight: "163 cm" },
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "185 cm" },
      { size: "L", minHeight: "183 cm", maxHeight: "195 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "203 cm" },
    ],
    builds: [],
    faqs: [],
    videos: [{ id: "RJTXj1sBqDk", title: "Shuttle SL/AM — Vše co potřebujete vědět" }],
    reviews: [
      { quote: "Univerzál... téměř stejně lehký jako Shuttle SL.", author: "Cy Whitling", publication: "Freehub" },
      { quote: "Poddajný a responzivní, dobrý využitelný zdvih, velmi komfortní.", author: "Francis Cebedo", publication: "E-MTB Review" },
    ],
  },

  // ═══════════════════════════════════════
  // GRAVEL
  // ═══════════════════════════════════════
  {
    slug: "vault",
    name: "Vault",
    category: "gravel",
    tagline: "Kde silnice končí, Vault začíná",
    description:
      "Ultra-lehký hollow core karbonový gravel s patentovaným systémem ISO FLEX pro komfort, Toolshed™ úložištěm a clearance pro 700×50c pláště. Editor's Choice — Best Gravel Bike.",
    travelRear: "Rigid",
    travelFront: "Rigid",
    wheelSize: "700c",
    heroImage: "/assets/bikes/vault.png",
    galleryImages: [
      "/assets/bikes/gallery/vault/beauty-01.webp",
      "/assets/bikes/gallery/vault/action-01.webp",
      "/assets/bikes/gallery/vault/action-02.webp",
      "/assets/bikes/gallery/vault/beauty-02.webp",
      "/assets/bikes/gallery/vault/action-03.webp",
      "/assets/bikes/gallery/vault/beauty-03.webp",
      "/assets/bikes/gallery/vault/action-04.webp",
    ],
    colors: [
      { name: "Copper Comet", hex: "#715241", hexSecondary: "#4f3e34", image: "/assets/bikes/colors/vault-copper.png" },
      { name: "Stealth", hex: "#303030", hexSecondary: "#4e4d54", image: "/assets/bikes/colors/vault-stealth.png" },
      { name: "Mossy Forest", hex: "#c5e3b4", hexSecondary: "#5a6044", image: "/assets/bikes/colors/vault-mossy.png" },
    ],
    productDetails: [
      "Ultra-lehký hollow core karbonový rám",
      "Toolshed™ úložiště v rámu",
      "Clearance pro 700×50c pláště",
      "Patentovaný ISO FLEX systém komfortu",
      "Moderní gravel geometrie",
      "Karbonová vidlice s compliance",
      "Kompatibilní s 1x i 2x převodem",
      "UDH a SRAM Transmission kompatibilní",
      "Plně integrované vedení lanek",
      "Kompatibilní s dropper postem",
    ],
    features: [
      "Hollow Core karbonový rám",
      "ISO FLEX systém komfortu",
      "Toolshed™ úložiště",
      "700×50c clearance",
      "Dropper kompatibilní",
      "SRAM Transmission ready",
    ],
    highlights: [
      {
        title: "Editor's Choice — Best Gravel Bike",
        description: "Bike Rumor: \"Dokonalá rovnováha jako all-around gravel kolo.\" Vault přináší závodní výkon s komfortem pro celodenní jízdu.",
      },
      {
        title: "ISO FLEX komfort",
        description: "Patentovaný systém izolace vibrací. Neuvěřitelně hladká jízda bez ztráty tuhosti a přenosu výkonu.",
      },
    ],
    geometry: [
      { label: "Head Tube Angle", sm: "70.4°", md: "71.0°", lg: "71.5°", xl: "72.0°" },
      { label: "Seat Tube Angle", sm: "74.0°", md: "74.0°", lg: "74.0°", xl: "74.0°" },
      { label: "Reach", sm: "39.0", md: "40.5", lg: "42.0", xl: "43.5" },
      { label: "Chainstay", sm: "42.0", md: "42.0", lg: "42.0", xl: "42.0" },
      { label: "Wheelbase", sm: "103.4", md: "105.0", lg: "107.0", xl: "109.0" },
      { label: "Stack", sm: "56.8", md: "58.5", lg: "60.5", xl: "62.5" },
    ],
    sizeChart: [
      { size: "XS", minHeight: "155 cm", maxHeight: "165 cm" },
      { size: "S", minHeight: "163 cm", maxHeight: "175 cm" },
      { size: "M", minHeight: "173 cm", maxHeight: "183 cm" },
      { size: "L", minHeight: "180 cm", maxHeight: "193 cm" },
      { size: "XL", minHeight: "190 cm", maxHeight: "200 cm" },
    ],
    builds: [],
    faqs: [
      {
        question: "Jaká je maximální šířka plášťů?",
        answer: "Vault pojme pláště až do rozměru 700×50c. Pro většinu gravelových podmínek doporučujeme 700×40c.",
      },
    ],
    videos: [{ id: "yvY3kNVwzO8", title: "Vault — Toolshed™ systém" }],
    reviews: [
      {
        quote: "Editor's Choice — Best Gravel Bike. Dokonalá rovnováha jako all-around gravel kolo.",
        author: "Zach Overholt",
        publication: "Bike Rumor",
      },
      {
        quote: "Přináší skvělý komfort bez kompromisů ve výkonu. Neuvěřitelně hladká jízda pro všechny gravelové jezdce.",
        author: "Chris Cocalis",
        publication: "Pivot Cycles",
      },
    ],
  },

  // ═══════════════════════════════════════
  // DIRT JUMP
  // ═══════════════════════════════════════
  {
    slug: "point",
    name: "Point",
    category: "dirt-jump",
    tagline: "Čistá zábava",
    description: "Point je chromoly dirt jump kolo s ultra-moderní park geometrií. Dlouhý reach, ultra-krátké řetězové vzpěry (385-400mm nastavitelné) a pocit, který dává ocel. Pedáluje, pumpuje, skáče.",
    travelRear: "Rigid",
    travelFront: "100mm",
    wheelSize: '26"',
    heroImage: "/assets/bikes/point.png",
    galleryImages: [
      "/assets/bikes/gallery/point/action-01.webp",
      "/assets/bikes/gallery/point/action-02.webp",
      "/assets/bikes/gallery/point/action-03.webp",
      "/assets/bikes/gallery/point/action-04.webp",
    ],
    colors: [
      { name: "Dusk Blue", hex: "#37748e", hexSecondary: "#194f66" },
      { name: "Mojave", hex: "#9d9b95", hexSecondary: "#3e3a36", image: "/assets/bikes/colors/point-mojave.png" },
    ],
    productDetails: [
      "Double butted 4130 chromoly rám",
      "Ultra-moderní park geometrie",
      "Dlouhý reach, ultra-krátké řetězové vzpěry",
      "Nastavitelné patky 385-400mm",
      "Kompatibilní s řazením i single speed",
      "26\" kola",
      "27.2mm sedlovka",
      "Threaded 73mm středové složení",
    ],
    features: ["4130 chromoly rám", "Nastavitelné patky 385-400mm", "Park geometrie", "Single speed / geared", "26\" kola", "Slopestyle / DJ / Pump"],
    highlights: [
      { title: "Pocit oceli", description: "Double butted chromoly dodává Point pocit, který karbón nikdy nedá. Pružný, odolný a neuvěřitelně zábavný na skocích a v pumptracku." },
      { title: "Ultra-moderní park geometrie", description: "Dlouhý reach a ultra-krátké řetězové vzpěry (385-400mm). Manuály na povel, skoky bez námahy." },
    ],
    geometry: [
      { label: "Seat Tube (C-T)", md: "32.0" },
      { label: "Top Tube (Eff.)", md: "60.5" },
      { label: "Head Tube Angle", md: "68.5°" },
      { label: "Seat Tube Angle", md: "72.0°" },
      { label: "Chainstay", md: "38.5" },
      { label: "BB Height", md: "32.5" },
      { label: "Wheelbase", md: "106.1" },
      { label: "Stack", md: "55.1" },
      { label: "Reach", md: "42.6" },
    ],
    sizeChart: [{ size: "O/S", minHeight: "168 cm", maxHeight: "193 cm" }],
    builds: [],
    faqs: [],
    videos: [
      { id: "F9fixRlh8nM", title: "Point — The Fly By" },
      { id: "HpbbcVLKaRM", title: "Point — The Fulcrum of Radness" },
    ],
    reviews: [],
  },

  // ═══════════════════════════════════════
  // SILNICNI (ROAD)
  // ═══════════════════════════════════════
  {
    slug: "road-coming-soon",
    name: "Již brzy",
    category: "silnicni",
    tagline: "Nová značka silničních kol",
    description: "Připravujeme pro vás prémiovou nabídku silničních kol. Zanedlouho představíme novou značku, která doplní naše portfolio o špičkové silniční stroje.",
    travelRear: "",
    travelFront: "",
    wheelSize: "",
    heroImage: "/assets/images/bike_build.jpg",
    galleryImages: [],
    colors: [],
    features: [],
    highlights: [],
    productDetails: [],
    geometry: [],
    sizeChart: [],
    builds: [],
    faqs: [],
    videos: [],
    reviews: [],
  },
];

export function getBikesByCategory(category: BikeCategory): Bike[] {
  return bikes.filter((b) => b.category === category);
}

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikes.find((b) => b.slug === slug);
}
