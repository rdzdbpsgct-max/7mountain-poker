# Website-Relaunch — Juni 2026

Kompletter visueller und technischer Relaunch der Marketing-Website im Stil einer modernen SaaS-/Gaming-Web-App. Designrichtung: **„Midnight Felt"** — edler Card-Room-Look mit tiefem Grün-Schwarz, Emerald/Gold-Akzenten und Mono-Typografie für Timer-/Zahlen-Elemente.

## Was geändert wurde

### Designsystem (`src/app/globals.css`)
- Neue Farbpalette: tieferes Near-Black `#0a1118` (vorher `#0f1923`), zusätzliche Token `background-deep`, `surface-2`, `emerald-bright`, `gold-bright`, `border-strong`
- Body-Hintergrund mit subtilem Emerald-Radial-Glow statt Flachfarbe
- Neue Utilities: `.btn-shine` (Shine-Sweep auf Primär-Buttons), `.card-sheen` (Top-Highlight auf Cards), `.bg-noise` (SVG-Filmkorn)
- Globale `:focus-visible`-Ringe, Emerald-`::selection`
- `prefers-reduced-motion`-Support: alle Animationen werden deaktiviert, Scroll-Reveal-Inhalte sofort sichtbar
- Alle bestehenden Klassennamen (`poker-bg`, `suit-float`, `glow-emerald`, …) blieben kompatibel — Unterseiten profitieren automatisch

### Typografie (`src/app/layout.tsx`)
- **Bricolage Grotesque** für alle Headlines (h1–h4, via `@layer base`)
- **Instrument Sans** als Body-Font (ersetzt Inter)
- **JetBrains Mono** für Stats, Badges, Dauer-Angaben, Locale-Switch
- `viewport`-Export mit `themeColor: #0a1118`

### Komponenten
- **Navigation:** Brand-Link als `next/link`, Pill-CTA mit Shine-Effekt, ARIA am Mobile-Menü (`aria-expanded`, `aria-controls`, Labels), größere Tap-Targets im Mobile-Panel
- **LocaleSwitch (neu):** gemeinsamer segmentierter DE/EN-Schalter mit `aria-pressed`, genutzt von Navigation und SubpageHeader (vorher 3× dupliziert)
- **HeroSection:** größere Display-Headline (bis `text-8xl`), Mono-Badge, neue Stat-Leiste (590+ Sprachansagen, 20+ Profi-Tools, 100% kostenlos, PWA) als `<dl>`, Screenshot im App-Fenster-Rahmen mit Browser-Chrome
- **FeaturesSection:** „Mehr erfahren" jetzt übersetzt (`t.features.learnMore`), Icon-Microinteraction (Tilt on hover)
- **PowerToolsSection:** redundante `iconKeys`/`featureKeys`-Arrays zu einem zusammengeführt
- **QuickStartSection:** „POPULAR"-Badge übersetzt (`t.quickStart.popular`), Dauer/Details in Mono
- **TestimonialsSection:** semantisches `<figure>`/`<blockquote>`/`<figcaption>`
- **TVRemoteSection:** Phone-Mockup responsiv (`max-w-[240px] sm:max-w-[280px]`)
- **CTASection / Footer:** Pill-Buttons, übersetzte Footer-Heading, responsives Padding
- **ImageLightbox:** Thumbnail ist jetzt ein echter `<button>` (Tastatur-bedienbar), Overlay mit `role="dialog"`/`aria-modal`, Close-Button mit Label und Auto-Fokus, Fokus-Rückgabe beim Schließen
- **Alle dekorativen Elemente** (Karten-Suits, Orbs, Icons) mit `aria-hidden="true"`

### i18n (`src/lib/i18n.ts`)
Neue Keys in DE + EN: `hero.stats`, `features.learnMore`, `quickStart.popular`, `footer.featurePages`

### Aufgeräumt
- `framer-motion` und `motion` aus `package.json` entfernt (waren nirgends importiert)
- `useLocale`-Hook: Lazy-Init statt setState-im-Effect (React-Lint-Regel)

## Verifikation
- `npm run build` ✓ (20 statische Seiten, TypeScript fehlerfrei)
- `npm run lint` ✓ (0 Fehler)
- Playwright-Screenshots: Landing Desktop (1440px) + Mobile (390px), Mobile-Menü offen, `/features/tv-modus`, `/blog`

## Sinnvolle nächste Optimierungen
1. **Übersetzungs-Duplikate auflösen:** Jede Feature-/Blog-Seite hält ein eigenes `const t = { de, en }` (~5000 Zeilen über 12 Dateien). Zentralisieren in `i18n.ts` oder pro Seite ein gemeinsames `content.ts`-Schema + Template-Komponenten (`FeaturePageLayout`, `BlogArticleLayout`).
2. **OG-Images pro Unterseite:** aktuell nur ein globales OG-Image; `opengraph-image.tsx` je Feature-/Blog-Route würde Social Sharing deutlich verbessern.
3. **Locale-SEO:** Client-seitiges Sprach-Switching ist für Google unsichtbar — langfristig `/en`-Routen mit `hreflang` erwägen.
4. **Screenshots als WebP/AVIF** exportieren (next/image optimiert zwar, aber kleinere Quelldateien beschleunigen den Build und die Largest-Contentful-Paint-Reserve).
5. **Playwright-Smoke-Tests** einchecken (Screenshot-Script existierte nur temporär) — z. B. „alle 20 Seiten rendern ohne Konsolen-Fehler".
