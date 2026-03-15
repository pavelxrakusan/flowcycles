import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowcycles.cz"),
  title: {
    default: "Flowcycles | Prémiové Bike Studio Praha",
    template: "%s | Flowcycles",
  },
  description:
    "Prémiové bike studio s individuálním přístupem. Pivot kola, custom stavby, autorizovaný servis Fox & Marzocchi v Praze. Domluvte si návštěvu showroomu.",
  keywords: [
    "bike studio Praha",
    "Pivot bikes",
    "Pivot kola Praha",
    "custom stavby kol",
    "servis kol Praha",
    "Fox servis Praha",
    "Marzocchi servis",
    "prémiová kola",
    "horská kola",
    "e-bike",
    "enduro kola",
    "Chromag",
    "Industry Nine",
  ],
  authors: [{ name: "Flowcycles — Andrej Jakovlev" }],
  creator: "Flowcycles",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://flowcycles.cz",
    siteName: "Flowcycles",
    title: "Flowcycles | Prémiové Bike Studio Praha",
    description:
      "Pivot kola, custom stavby, autorizovaný servis Fox & Marzocchi. Individuální přístup ke každému kolu i jezdci.",
    images: [
      {
        url: "/assets/images/showroom.jpg",
        width: 1600,
        height: 1067,
        alt: "Flowcycles Bike Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowcycles | Prémiové Bike Studio Praha",
    description: "Pivot kola, custom stavby, autorizovaný servis Fox & Marzocchi.",
    images: ["/assets/images/showroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://flowcycles.cz",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Flowcycles Bike Studio",
  description:
    "Prémiové bike studio s individuálním přístupem. Pivot kola, custom stavby, autorizovaný servis Fox & Marzocchi.",
  url: "https://flowcycles.cz",
  telephone: "+420608420006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dolínecká 3417/17",
    addressLocality: "Praha 10",
    postalCode: "100 00",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.07,
    longitude: 14.48,
  },
  image: "https://flowcycles.cz/assets/images/showroom.jpg",
  sameAs: [
    "https://www.instagram.com/flowcycles_bike_studio",
    "https://www.facebook.com/flowcyclescz",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
    description: "Po předchozí domluvě",
  },
  priceRange: "$$$$",
  currenciesAccepted: "CZK",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
