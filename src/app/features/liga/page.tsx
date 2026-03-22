import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Liga verwalten | Kostenlose Ligaverwaltung | 7Mountain Poker",
  description:
    "Verwalte deine Poker-Liga mit Punktesystem, Spieltagen, Finanzen und Tiebreaker. ELO-Rating, Head-to-Head-Matrix, QR-Sharing. Kostenlos.",
  alternates: { canonical: "/features/liga" },
};

export default function LigaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-foreground hover:text-emerald transition-colors">
            ♠ ♥ <span className="font-black">7Mountain Poker</span> ♦ ♣
          </Link>
          <Link href="/#features" className="text-sm text-muted hover:text-foreground transition-colors">
            ← Alle Features
          </Link>
        </div>
      </header>

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "Liga", href: "/features/liga" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">Feature</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          Poker Liga verwalten
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          Vom ersten Spieltag bis zur Saisonwertung — die komplette Liga-Verwaltung
          für deine Home-Game-Gruppe. Kein Zettel, kein Chaos.
        </p>

        {/* Screenshot */}
        <div className="mt-10 rounded-2xl border border-border/50 overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/liga-mode.jpg"
            alt="7Mountain Poker Liga-Modus mit Tabelle, Spieltagen, Finanzen und Head-to-Head-Matrix"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        {/* Core Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Liga-Funktionen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Punktesystem", desc: "Konfigurierbares Punktesystem (Standard: 1.→10, 2.→7, 3.→5, ...). Punkte pro Platzierung individuell anpassbar." },
              { title: "Spieltage & Ergebnisse", desc: "Automatische Spieltag-Erstellung bei Turnierende. Platzierungen, Punkte und Statistiken pro Spieler und Spieltag." },
              { title: "Erweiterte Standings", desc: "Gesamttabelle mit Punkten, Platzierungen, Teilnahmequote, Knockouts und detaillierten Statistiken." },
              { title: "Tiebreaker-Konfiguration", desc: "5 konfigurierbare Tiebreaker-Kriterien: Ø Platzierung, Siege, Cashes, Head-to-Head, letztes Ergebnis." },
              { title: "3 Ranking-Algorithmen", desc: "Standard-Punkte, ELO-Rating (konfigurierbarer K-Faktor) oder gewichtete Punkte mit Aktualitäts-Decay." },
              { title: "Head-to-Head-Matrix", desc: "NxN Heatmap zeigt direkte Duelle zwischen allen Liga-Teilnehmern. Wer hat wen wie oft geschlagen?" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Weitere Features</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Saison-Konzept</strong> — Erstelle, aktiviere und beende Saisons. Historische Saisons bleiben erhalten.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Gastspieler</strong> — Markiere Gäste mit optionalem Ausschluss aus der Gesamttabelle.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Punkt-Korrekturen</strong> — Bonus oder Abzug pro Spieler mit Begründung.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">QR-Code Sharing</strong> — Teile die Liga-Tabelle per QR-Code. Empfänger sehen die Standings in der App.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">TV-Display</strong> — Liga-Tabelle als rotierender Screen im TV-Modus (Top 10).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Export</strong> — JSON-Import/Export, CSV-Download, Text-Export (WhatsApp-freundlich).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://7mountainpoker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
          >
            <span>▶</span> Liga erstellen
          </a>
          <p className="mt-3 text-sm text-muted">Kostenlos, ohne Anmeldung. Alle Daten bleiben lokal.</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    </div>
  );
}
