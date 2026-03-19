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
  title: "7Mountain Poker - Tournament Timer",
  description:
    "Der ultimative Poker-Turnier-Timer. Blindstruktur, Spielerverwaltung, TV-Modus, Fernbedienung, Ligen und mehr. Kostenlos und ohne Anmeldung.",
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
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "7Mountain Poker - Tournament Timer",
    description:
      "Der ultimative Poker-Turnier-Timer. TV-Modus, Fernbedienung, Ligen, ICM-Rechner und mehr. Kostenlos und ohne Anmeldung.",
    type: "website",
    url: siteUrl,
    siteName: "7Mountain Poker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "7Mountain Poker - Tournament Timer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7Mountain Poker - Tournament Timer",
    description:
      "Der ultimative Poker-Turnier-Timer. Kostenlos und ohne Anmeldung.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
