import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://7mountain-poker.vercel.app";

export const metadata: Metadata = {
  title: "Kostenloser Poker Turnier Timer | 7Mountain Poker",
  description:
    "Kostenloser Poker Turnier Timer mit TV-Modus, Smartphone-Fernbedienung, Liga-System & 590 Sprachansagen. Blindstruktur, Spielerverwaltung, ICM-Rechner und mehr. Ohne Anmeldung sofort starten.",
  keywords: [
    "poker",
    "tournament",
    "timer",
    "blind structure",
    "poker timer",
    "turnier",
    "pokertimer",
    "blindstruktur",
    "tv modus",
    "fernbedienung",
    "liga",
    "poker turnier timer",
    "poker timer app",
    "poker turnier planen",
    "icm rechner",
  ],
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "de": "/",
      "en": "/",
    },
  },
  openGraph: {
    title: "Kostenloser Poker Turnier Timer | 7Mountain Poker",
    description:
      "Poker Turnier Timer mit TV-Modus, Fernbedienung, Ligen, ICM-Rechner & 590 Sprachansagen. Kostenlos und ohne Anmeldung.",
    type: "website",
    url: siteUrl,
    siteName: "7Mountain Poker",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenloser Poker Turnier Timer | 7Mountain Poker",
    description:
      "Poker Turnier Timer mit TV-Modus, Fernbedienung, Ligen & 590 Sprachansagen. Kostenlos und ohne Anmeldung.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "7Mountain Poker",
    alternateName: "7Mountain Poker Tournament Timer",
    description:
      "Professional poker tournament timer with blind structure generator, player management, TV mode, remote control, leagues, ICM calculator and more. Free and no signup required.",
    url: siteUrl,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Tournament Timer",
      "Blind Structure Generator",
      "Player Management",
      "TV Mode with 4 Layouts",
      "Smartphone Remote Control",
      "590 Voice Announcements (DE + EN)",
      "League & Series Mode",
      "ICM Calculator",
      "Side Pot Calculator",
      "Rebuy, Add-On & Bounty",
      "PWA & Offline Support",
      "Multi-Currency (EUR, USD, GBP, CHF, SEK)",
    ],
    author: {
      "@type": "Person",
      name: "Michael Prill",
    },
    inLanguage: ["de", "en"],
  };

  // JSON-LD is a static, hardcoded object with no user input - safe to serialize
  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" hrefLang="de" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
