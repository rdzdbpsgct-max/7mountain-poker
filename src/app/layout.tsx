import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontDisplay = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://7mountain-poker-webseite.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0a1118",
};

export const metadata: Metadata = {
  title: "Kostenloser Poker Turnier Timer | 7Mountain Poker",
  description:
    "Kostenloser Poker Turnier Timer mit TV-Modus, Multi-Controller-Fernbedienung, Liga-Charts, Deal-Making, Statistik-Dashboard & 590 Sprachansagen. ICM-Rechner, Call the Clock und mehr. Ohne Anmeldung sofort starten.",
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
    "deal making",
    "call the clock",
    "statistik dashboard",
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
  const jsonLd = [
    {
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
        priceCurrency: "USD",
      },
      featureList: [
        "Tournament Timer",
        "Blind Structure Generator with Drag & Drop",
        "Player Management with Search & Duplicate Detection",
        "TV Mode with 4 Layouts & Admin/Viewer Roles",
        "Multi-Controller Smartphone Remote",
        "590 Voice Announcements (DE + EN) + Custom Audio",
        "League & Series Mode with Charts",
        "ICM Calculator & Deal-Making (Chop)",
        "Statistics Dashboard with Trend Charts",
        "Side Pot Calculator",
        "Rebuy, Add-On, Bounty & Re-Entry",
        "Call the Clock (Shot Clock)",
        "Advanced Exports (CSV, Hendon Mob, Cloud)",
        "PWA & Offline Support",
        "Setup Wizard & Guided Tour",
      ],
      author: {
        "@type": "Organization",
        name: "7Mountain Poker",
        url: siteUrl,
      },
      inLanguage: ["de", "en"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "7Mountain Poker",
      url: siteUrl,
      logo: `${siteUrl}/pwa-512x512.png`,
      founder: {
        "@type": "Person",
        name: "Michael Prill",
      },
    },
  ];

  // JSON-LD is a static, hardcoded object with no user input - safe to serialize
  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <html lang="de" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}>
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
