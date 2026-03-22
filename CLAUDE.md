@AGENTS.md

# 7Mountain Poker - Marketing Website

## Project Overview
Marketing landing page and content hub for the 7Mountain Poker Tournament Timer webapp.

- **Website (this project):** https://7mountain-poker.vercel.app
- **Webapp:** https://7mountainpoker.vercel.app
- **GitHub:** https://github.com/rdzdbpsgct-max/7mountain-poker
- **Contact:** sevenmountainpoker@icloud.com

## Tech Stack
- **Framework:** Next.js 16.2 (App Router, Turbopack, static prerendering)
- **Styling:** Tailwind CSS 4, custom dark poker theme
- **Animations:** Framer Motion, CSS IntersectionObserver scroll animations
- **Language:** TypeScript, bilingual (DE/EN) with runtime i18n
- **Hosting:** Vercel (auto-deploy on push to main)
- **OG Image:** Dynamic Edge-generated Open Graph image

## Key Conventions
- Dark poker theme: background #0f1923, emerald #10b981 accent, gold #f59e0b secondary
- All text content in `src/lib/i18n.ts` (bilingual DE/EN)
- Components use `useLanguage()` hook from LanguageContext
- Screenshots of the real webapp stored in `public/screenshots/`
- ImageLightbox component uses React Portal for click-to-zoom
- AnimatedSection uses IntersectionObserver for scroll animations
- Logo: white card suits (♠ ♥ ♦ ♣) — never colored
- **No real-money references**: No €, EUR, Dollar amounts, no Buy-In prices, no monetary values anywhere on the site. The app is presented as a chip-based tournament timer without gambling context.

## Commands
- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (20 static pages)
- `git push origin main` — Auto-deploys to Vercel

## Pages (20 total)

### Landing Page
- `/` — Main landing page (client-side, LanguageProvider)

### Feature Pages (5)
- `/features/tv-modus` — TV display mode with 4 layouts, 8 screens
- `/features/fernbedienung` — Smartphone remote control via PeerJS/WebRTC
- `/features/liga` — League management with 3 ranking algorithms
- `/features/blindstruktur` — Blind structure generator (3 speeds)
- `/features/icm-rechner` — ICM calculator (Malmuth-Harville)

### Blog (7 articles + index)
- `/blog` — Blog index listing all articles
- `/blog/poker-turnier-planen` — Complete tournament planning guide
- `/blog/perfekte-blindstruktur` — Blind structure tutorial
- `/blog/poker-timer-vergleich` — Timer app comparison
- `/blog/poker-liga-organisieren` — League organization guide
- `/blog/icm-erklaert` — ICM explanation with examples
- `/blog/poker-chips-guide` — Chip colors, values, setups
- `/blog/multi-table-turnier` — Multi-table tournament guide

### Legal Pages
- `/impressum` — German legal notice (§ 5 DDG)
- `/datenschutz` — DSGVO privacy policy
- Both are server-rendered (no client-side language switching)

## SEO Infrastructure
- **Sitemap:** Dynamic `src/app/sitemap.ts` (20 URLs, auto-generated)
- **JSON-LD:** Organization schema + WebApplication schema in layout.tsx
- **BreadcrumbJsonLd:** Shared component on all subpages (`src/components/BreadcrumbJsonLd.tsx`)
- **Canonical URLs:** On every page via `alternates.canonical`
- **OG Image:** Dynamic Edge-generated Open Graph image
- **Internal linking:** Feature cards → feature pages, footer links, blog cross-links

## Project Structure

```
src/
  app/
    page.tsx                    # Main landing page
    layout.tsx                  # Root layout, SEO metadata, JSON-LD schemas
    globals.css                 # Tailwind theme, animations, poker utilities
    opengraph-image.tsx         # Dynamic OG image (Edge runtime)
    sitemap.ts                  # Dynamic sitemap (20 URLs)
    impressum/page.tsx          # Legal notice
    datenschutz/page.tsx        # Privacy policy
    features/
      tv-modus/page.tsx         # TV display feature page
      fernbedienung/page.tsx    # Remote control feature page
      liga/page.tsx             # League feature page
      blindstruktur/page.tsx    # Blind structure feature page
      icm-rechner/page.tsx      # ICM calculator feature page
    blog/
      page.tsx                  # Blog index (7 articles)
      poker-turnier-planen/     # Tournament planning guide
      perfekte-blindstruktur/   # Blind structure tutorial
      poker-timer-vergleich/    # App comparison
      poker-liga-organisieren/  # League organization guide
      icm-erklaert/             # ICM explanation
      poker-chips-guide/        # Chip guide
      multi-table-turnier/      # Multi-table guide
  components/
    Navigation.tsx              # Fixed header with nav, language switcher, CTA
    HeroSection.tsx             # Hero with badge, headline, CTAs, screenshot
    FeaturesSection.tsx         # Core + advanced features grid (with links)
    TVRemoteSection.tsx         # TV mode + remote mockup
    DemoSection.tsx             # 3-step how-it-works + gallery
    ProFeaturesSection.tsx      # 6 professional features
    PowerToolsSection.tsx       # 12 power tools (with links)
    QuickStartSection.tsx       # 3 preset tournament modes
    TestimonialsSection.tsx     # Testimonial cards
    CTASection.tsx              # Final call-to-action
    Footer.tsx                  # 4-column footer (Produkt, Features, Blog, Rechtliches)
    ImageLightbox.tsx           # Click-to-zoom with React Portal
    AnimatedSection.tsx         # IntersectionObserver scroll animations
    LanguageContext.tsx          # React Context for DE/EN switching
    BreadcrumbJsonLd.tsx        # Shared BreadcrumbList JSON-LD component
  lib/
    i18n.ts                     # All translations (DE + EN, ~450 keys)
public/
  screenshots/                  # Real app screenshots
  robots.txt                    # Crawler rules
```
