# 7Mountain Poker - Marketing Website

Marketing- und Landing-Page für den [7Mountain Poker Tournament Timer](https://7mountainpoker.vercel.app).

**Live:** https://7mountain-poker.vercel.app

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack, static prerendering)
- **Styling:** Tailwind CSS 4, custom dark poker theme
- **Animations:** Framer Motion, CSS IntersectionObserver scroll animations
- **Language:** TypeScript, bilingual (DE/EN) with runtime i18n
- **Hosting:** Vercel (auto-deploy via GitHub)
- **OG Image:** Dynamic Edge-generated Open Graph image

## Pages (20 static pages)

### Landing Page
- `/` — Hauptseite mit allen Sektionen (Features, Demo, Power Tools, Quick Start, Testimonials, CTA)

### Feature-Seiten (5)
- `/features/tv-modus` — TV-Display mit 4 Layouts und 8 rotierenden Screens
- `/features/fernbedienung` — Smartphone-Fernbedienung via PeerJS/WebRTC
- `/features/liga` — Liga-Verwaltung mit 3 Ranking-Algorithmen
- `/features/blindstruktur` — Blindstruktur-Generator (3 Geschwindigkeiten)
- `/features/icm-rechner` — ICM-Rechner (Malmuth-Harville-Algorithmus)

### Blog (7 Artikel)
- `/blog` — Blog-Index mit allen Artikeln
- `/blog/poker-turnier-planen` — Kompletter Turnier-Planungsguide
- `/blog/perfekte-blindstruktur` — Blindstruktur-Tutorial mit Beispieltabellen
- `/blog/poker-timer-vergleich` — Timer-App-Vergleich mit Feature-Matrix
- `/blog/poker-liga-organisieren` — Liga-Organisation mit Punktesystemen
- `/blog/icm-erklaert` — ICM-Erklärung mit Berechnungsbeispielen
- `/blog/poker-chips-guide` — Chip-Farben, Werte, 3 Setups, Color-Up
- `/blog/multi-table-turnier` — Multi-Table-Guide (Verteilung, Balancing, Final Table)

### Rechtliches
- `/impressum` — Impressum (§ 5 DDG)
- `/datenschutz` — Datenschutzerklärung (DSGVO)

## SEO

- Dynamic Sitemap (`src/app/sitemap.ts`, 20 URLs)
- JSON-LD: Organization + WebApplication schema
- BreadcrumbList JSON-LD auf allen Unterseiten
- Canonical URLs, Open Graph + Twitter Cards
- Interne Verlinkung: Feature-Cards → Feature-Seiten, Footer, Blog-Cross-Links

## Project Structure

```
src/
  app/
    page.tsx              # Landing Page (client-side, LanguageProvider)
    layout.tsx            # Root Layout, SEO Metadata, JSON-LD Schemas
    globals.css           # Tailwind Theme, Animationen, Poker-Utilities
    opengraph-image.tsx   # Dynamic OG Image (Edge Runtime)
    sitemap.ts            # Dynamic Sitemap (20 URLs)
    impressum/            # Impressum
    datenschutz/          # Datenschutz
    features/             # 5 Feature-Unterseiten
    blog/                 # 7 Blog-Artikel + Index
  components/
    Navigation.tsx        # Header mit Nav, Language Switcher, CTA
    HeroSection.tsx       # Hero mit Badge, Headline, CTAs, Screenshot
    FeaturesSection.tsx   # Feature-Grid mit Links zu Unterseiten
    TVRemoteSection.tsx   # TV-Modus + Fernbedienungs-Mockup
    DemoSection.tsx       # 3-Schritte-Anleitung + Screenshot-Galerie
    ProFeaturesSection.tsx # 6 Profi-Features
    PowerToolsSection.tsx # 12 Power Tools mit Links
    QuickStartSection.tsx # 3 Turnier-Presets
    TestimonialsSection.tsx # Testimonials
    CTASection.tsx        # Finaler Call-to-Action
    Footer.tsx            # 4-Spalten-Footer
    ImageLightbox.tsx     # Klick-Zoom mit React Portal
    AnimatedSection.tsx   # Scroll-Animationen
    LanguageContext.tsx    # DE/EN Language Context
    BreadcrumbJsonLd.tsx  # BreadcrumbList JSON-LD Komponente
  lib/
    i18n.ts               # Alle Übersetzungen (DE + EN)
public/
  screenshots/            # App-Screenshots
  robots.txt              # Crawler-Regeln
```

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production Build (20 statische Seiten)
```

## Contact

Michael Prill — sevenmountainpoker@icloud.com
