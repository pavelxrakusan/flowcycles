import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ═══════════════════════════════════════
      // HOMEPAGE
      // ═══════════════════════════════════════
      {
        name: "homepage",
        label: "Úvodní strana",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            name: "heroSlides",
            label: "Hero Carousel",
            type: "object",
            list: true,
            ui: {
              itemProps: (item: { label?: string }) => ({
                label: item?.label || "Slide",
              }),
            },
            fields: [
              { name: "label", label: "Label (malý text nahoře)", type: "string", required: true },
              { name: "title", label: "Nadpis (velký text)", type: "string", required: true },
              { name: "subtitle", label: "Popis", type: "string", required: true, ui: { component: "textarea" } },
              { name: "image", label: "Obrázek na pozadí", type: "image", required: true },
              { name: "ctaText", label: "Tlačítko — text", type: "string" },
              { name: "ctaHref", label: "Tlačítko — odkaz", type: "string" },
              { name: "ctaSecondaryText", label: "Druhé tlačítko — text", type: "string" },
              { name: "ctaSecondaryHref", label: "Druhé tlačítko — odkaz", type: "string" },
            ],
          },
          {
            name: "intro",
            label: "Intro sekce (Andrej)",
            type: "object",
            fields: [
              { name: "heading", label: "Nadpis", type: "string" },
              { name: "paragraphs", label: "Odstavce", type: "string", list: true, ui: { component: "textarea" } },
              { name: "quote", label: "Citát (kurzívou)", type: "string" },
              { name: "image", label: "Foto", type: "image" },
            ],
          },
        ],
      },

      // ═══════════════════════════════════════
      // BLOG
      // ═══════════════════════════════════════
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        format: "mdx",
        fields: [
          { name: "title", label: "Název článku", type: "string", required: true, isTitle: true },
          {
            name: "category",
            label: "Kategorie",
            type: "string",
            required: true,
            options: [
              { value: "stavba-mesice", label: "Stavba měsíce" },
              { value: "zakaznici", label: "Příběhy zákazníků" },
              { value: "servis", label: "Ze servisu" },
              { value: "technologie", label: "Technologie" },
              { value: "poradna", label: "Poradna" },
              { value: "pribehy", label: "Příběhy" },
              { value: "zavodni-tym", label: "Závodní tým" },
              { value: "dobrodruzstvi", label: "Dobrodružství" },
            ],
          },
          { name: "date", label: "Datum", type: "datetime", required: true },
          { name: "excerpt", label: "Úvodní text (excerpt)", type: "string", required: true, ui: { component: "textarea" } },
          { name: "image", label: "Hlavní obrázek", type: "image", required: true },
          { name: "featured", label: "Zvýrazněný článek", type: "boolean" },
          { name: "body", label: "Obsah", type: "rich-text", isBody: true },
        ],
      },

      // ═══════════════════════════════════════
      // KOLA
      // ═══════════════════════════════════════
      {
        name: "bike",
        label: "Kola",
        path: "content/bikes",
        format: "json",
        fields: [
          { name: "name", label: "Název modelu", type: "string", required: true, isTitle: true },
          { name: "slug", label: "URL slug", type: "string", required: true },
          {
            name: "category",
            label: "Kategorie",
            type: "string",
            required: true,
            options: [
              { value: "cross-country", label: "Cross Country" },
              { value: "trail", label: "Trail" },
              { value: "enduro", label: "Enduro" },
              { value: "gravity", label: "Gravity" },
              { value: "e-bike", label: "E-Bike" },
              { value: "gravel", label: "Gravel" },
              { value: "dirt-jump", label: "Dirt Jump" },
              { value: "silnicni", label: "Road" },
            ],
          },
          { name: "tagline", label: "Tagline", type: "string", required: true },
          { name: "description", label: "Popis", type: "string", required: true, ui: { component: "textarea" } },
          { name: "travelRear", label: "Zdvih vzadu", type: "string" },
          { name: "travelFront", label: "Zdvih vpředu", type: "string" },
          { name: "wheelSize", label: "Velikost kol", type: "string" },
          { name: "heroImage", label: "Hlavní obrázek (listing)", type: "image", required: true },
          {
            name: "colors",
            label: "Barevné varianty",
            type: "object",
            list: true,
            fields: [
              { name: "name", label: "Název barvy", type: "string", required: true },
              { name: "hex", label: "HEX barva", type: "string", required: true },
              { name: "hexSecondary", label: "HEX sekundární", type: "string" },
              { name: "image", label: "Obrázek kola v této barvě", type: "image" },
            ],
          },
          { name: "galleryImages", label: "Galerie fotek", type: "image", list: true },
          { name: "productDetails", label: "Detaily produktu", type: "string", list: true },
          { name: "features", label: "Klíčové vlastnosti", type: "string", list: true },
          {
            name: "highlights",
            label: "Highlights (text + obrázek bloky)",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Nadpis", type: "string", required: true },
              { name: "description", label: "Text", type: "string", required: true, ui: { component: "textarea" } },
            ],
          },
          {
            name: "builds",
            label: "Sestavy",
            type: "object",
            list: true,
            fields: [
              { name: "name", label: "Název sestavy", type: "string", required: true },
              {
                name: "components",
                label: "Komponenty",
                type: "object",
                list: true,
                fields: [
                  { name: "label", label: "Typ (Vidlice, Tlumič...)", type: "string", required: true },
                  { name: "value", label: "Hodnota", type: "string", required: true },
                ],
              },
            ],
          },
          {
            name: "geometry",
            label: "Geometrie",
            type: "object",
            list: true,
            fields: [
              { name: "label", label: "Parametr", type: "string", required: true },
              { name: "xs", label: "XS", type: "string" },
              { name: "sm", label: "S", type: "string" },
              { name: "md", label: "M", type: "string" },
              { name: "lg", label: "L", type: "string" },
              { name: "xl", label: "XL", type: "string" },
            ],
          },
          {
            name: "sizeChart",
            label: "Velikostní tabulka",
            type: "object",
            list: true,
            fields: [
              { name: "size", label: "Velikost", type: "string", required: true },
              { name: "minHeight", label: "Min. výška", type: "string", required: true },
              { name: "maxHeight", label: "Max. výška", type: "string", required: true },
            ],
          },
          {
            name: "faqs",
            label: "FAQ",
            type: "object",
            list: true,
            fields: [
              { name: "question", label: "Otázka", type: "string", required: true },
              { name: "answer", label: "Odpověď", type: "string", required: true, ui: { component: "textarea" } },
            ],
          },
          {
            name: "videos",
            label: "Videa",
            type: "object",
            list: true,
            fields: [
              { name: "id", label: "YouTube ID", type: "string", required: true },
              { name: "title", label: "Název", type: "string", required: true },
            ],
          },
          {
            name: "reviews",
            label: "Recenze",
            type: "object",
            list: true,
            fields: [
              { name: "quote", label: "Citát", type: "string", required: true, ui: { component: "textarea" } },
              { name: "author", label: "Autor", type: "string", required: true },
              { name: "publication", label: "Publikace", type: "string", required: true },
            ],
          },
        ],
      },

      // ═══════════════════════════════════════
      // SERVIS
      // ═══════════════════════════════════════
      {
        name: "servis",
        label: "Servis",
        path: "content/servis",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { name: "heroText", label: "Hero popis", type: "string", ui: { component: "textarea" } },
          { name: "introText", label: "Intro text (velký citát)", type: "string", ui: { component: "textarea" } },
          {
            name: "services",
            label: "Služby",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Název služby", type: "string", required: true },
              { name: "description", label: "Popis", type: "string", required: true, ui: { component: "textarea" } },
              { name: "detail", label: "Detail (menší text)", type: "string", ui: { component: "textarea" } },
              { name: "image", label: "Ilustrační fotka", type: "image" },
            ],
          },
          {
            name: "process",
            label: "Jak to funguje (kroky)",
            type: "object",
            list: true,
            fields: [
              { name: "step", label: "Číslo (01, 02...)", type: "string", required: true },
              { name: "title", label: "Název", type: "string", required: true },
              { name: "text", label: "Popis", type: "string", required: true, ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ═══════════════════════════════════════
      // KOMPONENTY / ZNAČKY
      // ═══════════════════════════════════════
      {
        name: "brand",
        label: "Značky komponentů",
        path: "content/brands",
        format: "json",
        fields: [
          { name: "name", label: "Název značky", type: "string", required: true, isTitle: true },
          { name: "slug", label: "URL slug", type: "string", required: true },
          { name: "tagline", label: "Tagline", type: "string" },
          { name: "description", label: "Popis", type: "string", ui: { component: "textarea" } },
          { name: "story", label: "Příběh značky", type: "string", ui: { component: "textarea" } },
          { name: "products", label: "Produkty", type: "string", list: true },
          { name: "origin", label: "Původ", type: "string" },
          { name: "website", label: "Web", type: "string" },
          { name: "accentColor", label: "Barva značky (hex)", type: "string" },
          { name: "logo", label: "Logo", type: "image" },
        ],
      },

      // ═══════════════════════════════════════
      // CUSTOM STAVBY
      // ═══════════════════════════════════════
      {
        name: "customStavby",
        label: "Custom stavby",
        path: "content/custom-stavby",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { name: "heroTitle", label: "Hero nadpis", type: "string" },
          { name: "heroDescription", label: "Hero popis", type: "string", ui: { component: "textarea" } },
          {
            name: "steps",
            label: "Kroky procesu",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Název kroku", type: "string", required: true },
              { name: "description", label: "Popis", type: "string", required: true, ui: { component: "textarea" } },
              { name: "image", label: "Fotka", type: "image" },
            ],
          },
        ],
      },

      // ═══════════════════════════════════════
      // STUDIO
      // ═══════════════════════════════════════
      {
        name: "studio",
        label: "Studio",
        path: "content/studio",
        format: "mdx",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { name: "title", label: "Nadpis", type: "string", required: true, isTitle: true },
          { name: "subtitle", label: "Podnadpis", type: "string" },
          { name: "heroImage", label: "Hero fotka", type: "image" },
          { name: "andrejImage", label: "Fotka Andreje", type: "image" },
          { name: "body", label: "Obsah", type: "rich-text", isBody: true },
        ],
      },

      // ═══════════════════════════════════════
      // KONTAKT
      // ═══════════════════════════════════════
      {
        name: "kontakt",
        label: "Kontaktní údaje",
        path: "content/kontakt",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { name: "studioName", label: "Název studia", type: "string" },
          { name: "phone", label: "Telefon", type: "string" },
          { name: "email", label: "E-mail", type: "string" },
          { name: "address", label: "Adresa", type: "string" },
          { name: "instagram", label: "Instagram URL", type: "string" },
          { name: "facebook", label: "Facebook URL", type: "string" },
          { name: "openingHours", label: "Otevírací doba", type: "string" },
        ],
      },

      // ═══════════════════════════════════════
      // POLICY STRÁNKY
      // ═══════════════════════════════════════
      {
        name: "policy",
        label: "Právní stránky",
        path: "content/policies",
        format: "mdx",
        fields: [
          { name: "title", label: "Název", type: "string", required: true, isTitle: true },
          { name: "body", label: "Obsah", type: "rich-text", isBody: true },
        ],
      },
    ],
  },
});
