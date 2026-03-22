import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Blindstruktur Generator | 7Mountain Poker",
  description:
    "Generiere die perfekte Blindstruktur in 3 Geschwindigkeiten. Chip-aware Rundung, Ante-Berechnung, Endzeit-Planung. Kostenlos und ohne Anmeldung.",
  alternates: { canonical: "/features/blindstruktur" },
};

export default function BlindstrukturPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "Blindstruktur", href: "/features/blindstruktur" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">Feature</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          Poker Blindstruktur Generator
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          Die perfekte Blindstruktur für jedes Turnier — automatisch berechnet basierend auf
          Spieleranzahl, gewünschter Dauer und Chipstückelung.
        </p>

        {/* 3 Speeds */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">3 Geschwindigkeiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { speed: "Schnell ⚡", time: "1–2 Stunden", desc: "Kurze Levels, aggressive Blind-Steigerung. Perfekt für schnelle Cash-Game-Runden unter Freunden.", color: "border-emerald/30" },
              { speed: "Normal ♠", time: "2–4 Stunden", desc: "Ausgewogene Struktur mit genug Spielraum. Der Standard für Home Games.", color: "border-gold/30" },
              { speed: "Deep Stack 🎰", time: "4+ Stunden", desc: "Lange Levels, sanfte Blind-Steigerung. Für ernsthafte Pokerspieler, die tiefes Spiel bevorzugen.", color: "border-red-accent/30" },
            ].map((s) => (
              <div key={s.speed} className={`rounded-xl border ${s.color} bg-surface/40 p-6`}>
                <h3 className="text-xl font-black text-foreground mb-1">{s.speed}</h3>
                <p className="text-sm text-emerald font-semibold mb-3">{s.time}</p>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Smart Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Intelligente Berechnung</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Chip-aware Rundung", desc: "Blinds werden automatisch auf die kleinste verfügbare Chipstückelung gerundet. Keine krummen Werte." },
              { title: "Ante-Berechnung", desc: "Standard-Ante (~12,5% des Big Blind) oder Big Blind Ante (BBA, WSOP-Standard). Automatisch berechnet." },
              { title: "Endzeit-Planung", desc: "Gib eine gewünschte Endzeit an und die Blindstruktur wird passend generiert. Tab im Generator mit Live-Preview." },
              { title: "Dauer-Prognose", desc: "Geschätzte Turnierdauer basierend auf Spieleranzahl, Rebuy-Wahrscheinlichkeit und Blindstruktur." },
              { title: "Benannte Pausen", desc: "Automatische Pausen mit konfigurierbaren Intervallen. Color-Up-Hinweise an die nächste Pause gekoppelt." },
              { title: "Vollständig editierbar", desc: "Jedes Level einzeln anpassbar — Blinds, Ante, Dauer, Pausen. Oder komplett manuell erstellen." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Print */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Druckbare Blindstruktur</h2>
          <p className="text-muted">
            Drucke die komplette Blindstruktur als übersichtliche Tabelle — inklusive Chip-Werte,
            Auszahlungsstruktur und Turnier-Infos. Print-optimiertes Layout in Schwarz-Weiß.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://7mountainpoker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
          >
            <span>▶</span> Blindstruktur generieren
          </a>
          <p className="mt-3 text-sm text-muted">Kostenlos, ohne Anmeldung. Vorlagen speicherbar.</p>
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
