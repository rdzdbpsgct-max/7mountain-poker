import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "ICM Rechner für Poker Turniere | 7Mountain Poker",
  description:
    "Independent Chip Model (ICM) Equity-Berechnung für faire Deal-Verhandlungen. Malmuth-Harville Algorithmus, exakt bis 10 Spieler, Monte Carlo für größere Felder.",
  alternates: { canonical: "/features/icm-rechner" },
};

export default function IcmRechnerPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "ICM-Rechner", href: "/features/icm-rechner" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">Feature</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          ICM Rechner für Poker Turniere
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          Berechne die faire Equity jedes Spielers basierend auf seinem Chipstack und der
          Auszahlungsstruktur. Das Independent Chip Model (ICM) ist der Standard für
          professionelle Deal-Verhandlungen.
        </p>

        {/* What is ICM */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Was ist ICM?</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 text-muted leading-relaxed space-y-4">
            <p>
              Das <strong className="text-foreground">Independent Chip Model</strong> berechnet den monetären Wert eines
              Chipstacks, indem es die Wahrscheinlichkeit analysiert, mit der ein Spieler jeden
              Platz im Turnier erreicht — basierend auf seinem relativen Chipanteil.
            </p>
            <p>
              Anders als ein einfacher Chip-Chop berücksichtigt ICM, dass Chips in einem Turnier
              nicht linear an Wert gewinnen: Der erste Chip ist mehr wert als der letzte, weil er
              das Überleben sichert.
            </p>
            <p>
              ICM wird verwendet für <strong className="text-foreground">Deal-Verhandlungen</strong> am Final Table,
              <strong className="text-foreground"> Bubble-Entscheidungen</strong> und die Bewertung von Spielsituationen.
            </p>
          </div>
        </section>

        {/* Algorithm */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Malmuth-Harville Algorithmus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Exakte Berechnung (≤10 Spieler)", desc: "Vollständige rekursive Permutation aller möglichen Platzierungen. Mathematisch exakt, keine Abweichung." },
              { title: "Monte Carlo (>10 Spieler)", desc: "10.000 Simulationen für größere Felder. Statistisch zuverlässig mit minimaler Abweichung." },
              { title: "Echtzeit-Berechnung", desc: "Ergebnisse in Millisekunden direkt im Browser. Keine Serveranfrage, kein Warten." },
              { title: "In der App integriert", desc: "Öffne den ICM-Rechner direkt im Spielmodus. Chipstacks werden automatisch übernommen." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Anwendungsfälle</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">🤝</span>
                <span><strong className="text-foreground">Deal am Final Table</strong> — Berechne faire Auszahlungen für alle verbleibenden Spieler basierend auf ihren Chipstacks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">💡</span>
                <span><strong className="text-foreground">Bubble-Play</strong> — Verstehe den ICM-Druck: Wer hat am meisten zu verlieren, wer kann aggressiv spielen?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">📊</span>
                <span><strong className="text-foreground">Lernwerkzeug</strong> — Vergleiche Chip-Chop mit ICM-Equity und verstehe den Unterschied.</span>
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
            <span>▶</span> ICM Rechner öffnen
          </a>
          <p className="mt-3 text-sm text-muted">Kostenlos, ohne Anmeldung. Im Spielmodus verfügbar.</p>
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
