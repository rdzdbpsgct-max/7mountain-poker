import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "ICM erklärt: Independent Chip Model für Poker Turniere | 7Mountain Poker",
  description:
    "Was ist ICM? Wie funktioniert das Independent Chip Model? Berechnung, Anwendung bei Deal-Verhandlungen und Bubble-Strategie — einfach erklärt mit Beispielen.",
  alternates: { canonical: "/blog/icm-erklaert" },
};

export default function IcmErklaertPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-foreground hover:text-emerald transition-colors">
            ♠ ♥ <span className="font-black">7Mountain Poker</span> ♦ ♣
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">← Blog</Link>
        </div>
      </header>

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "ICM erklärt", href: "/blog/icm-erklaert" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Strategie</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">ICM</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Fortgeschritten</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          ICM erklärt: Das Independent Chip Model verstehen
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 11 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Stell dir vor: Du sitzt am Final Table eines Home-Game-Turniers. Drei Spieler übrig,
            die Punkte sind 50/30/20 aufgeteilt. Du hast den größten Stack. Jemand schlägt
            einen Deal vor. Wie viel steht dir fair zu? Genau hier kommt ICM ins Spiel.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Was ist ICM?</h2>
          <p className="text-muted leading-relaxed">
            Das <strong className="text-foreground">Independent Chip Model</strong> (ICM) berechnet den relativen Wert
            eines Chipstacks in einem Turnier. Anders als bei einem Cash Game, wo 1.000 Chips
            immer den gleichen Wert haben, hängt der Wert von Chips in einem Turnier davon ab,
            wie die Platzierungsstruktur aussieht.
          </p>
          <p className="text-muted leading-relaxed">
            Die zentrale Erkenntnis: <strong className="text-foreground">Chips in einem Turnier sind nicht linear
            an Wert gebunden.</strong> Der erste Chip ist mehr wert als der letzte, weil er dein
            Überleben sichert. Verdoppelst du deinen Stack, verdoppelt sich nicht dein
            Equity-Anspruch.
          </p>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-2">💡 Einfache Faustregel</p>
            <p className="text-sm text-muted">
              Ein Chip-Chop (Equity proportional zu Chips) bevorzugt den Chipleader.
              ICM berücksichtigt, dass auch der Small Stack noch eine reale Chance auf
              den 1. Platz hat — und gibt ihm deshalb mehr als der reine Chip-Anteil vermuten lässt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Wie funktioniert die Berechnung?</h2>
          <p className="text-muted leading-relaxed">
            ICM verwendet den <strong className="text-foreground">Malmuth-Harville-Algorithmus</strong>. Die Grundidee:
          </p>
          <ol className="space-y-3 text-muted list-decimal list-inside">
            <li><strong className="text-foreground">Wahrscheinlichkeit für Platz 1:</strong> Proportional zum Chipanteil. Hat ein Spieler 50% aller Chips, gewinnt er zu 50%.</li>
            <li><strong className="text-foreground">Wahrscheinlichkeit für Platz 2:</strong> Für jeden möglichen Gewinner wird berechnet, wie wahrscheinlich der Spieler unter den verbleibenden Zweiter wird — wieder proportional zum relativen Chipanteil.</li>
            <li><strong className="text-foreground">Rekursiv weiter:</strong> Für Platz 3, 4, usw. wird das Verfahren verschachtelt wiederholt.</li>
            <li><strong className="text-foreground">Equity berechnen:</strong> Für jeden Platz wird die Wahrscheinlichkeit mit dem Platzierungswert multipliziert und aufsummiert.</li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Konkretes Beispiel</h2>
          <p className="text-muted leading-relaxed">
            3 Spieler am Final Table. Preisverteilung: 50% / 30% / 20%. Chipverteilung:
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Spieler</th><th className="pb-2">Chips</th><th className="pb-2">Anteil</th><th className="pb-2">Chip-Chop %</th><th className="pb-2 text-emerald">ICM-Equity %</th></tr></thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20"><td className="py-2 font-medium text-foreground">Anna</td><td>50.000</td><td>50%</td><td>50,0%</td><td className="text-emerald font-semibold">44,4%</td></tr>
                <tr className="border-b border-border/20"><td className="py-2 font-medium text-foreground">Ben</td><td>30.000</td><td>30%</td><td>30,0%</td><td className="text-emerald font-semibold">32,0%</td></tr>
                <tr><td className="py-2 font-medium text-foreground">Clara</td><td>20.000</td><td>20%</td><td>20,0%</td><td className="text-emerald font-semibold">23,6%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            Beachte den Unterschied: Anna bekommt beim Chip-Chop 50%, aber nur 44,4% nach ICM.
            Clara dagegen bekommt 23,6% statt 20%. Das liegt daran, dass Clara selbst mit nur
            20% der Chips noch realistische Chancen auf den 2. oder sogar 1. Platz hat.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">ICM in der Praxis: Deal-Verhandlungen</h2>
          <p className="text-muted leading-relaxed">
            Der häufigste Anwendungsfall für ICM ist der <strong className="text-foreground">Deal am Final Table</strong>.
            Statt weiterzuspielen, einigen sich die verbleibenden Spieler auf eine faire Aufteilung
            basierend auf ihren Chipstacks.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">So funktioniert es:</strong>
          </p>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>Alle notieren ihre Chipstände</li>
            <li>ICM-Equity wird berechnet (z.B. mit dem <Link href="/features/icm-rechner" className="text-emerald hover:underline">7Mountain ICM-Rechner</Link>)</li>
            <li>Die Equity-Werte werden als faire Aufteilung vorgeschlagen</li>
            <li>Alle stimmen zu — oder verhandeln weiter</li>
          </ol>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">💡 Verhandlungstipp</p>
            <p className="text-sm text-muted">
              Oft wird ein Teil der Gesamtequity „für den Gewinner" reserviert. Beispiel:
              ICM-basierte Aufteilung + 10% des Pools an den tatsächlichen Sieger. So hat
              jeder einen Anreiz, das letzte Stück zu spielen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">ICM und Bubble-Strategie</h2>
          <p className="text-muted leading-relaxed">
            ICM hat auch massive Auswirkungen auf die <strong className="text-foreground">Strategie an der Bubble</strong>
            (ein Spieler vor den Platzierungen). An der Bubble verliert jeder Chip, den du riskierst,
            überproportional an ICM-Wert — weil der Sprung in die Ränge den größten
            Equity-Zuwachs bringt.
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Big Stacks</strong> können aggressiv spielen — sie riskieren weniger ICM-Equity</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Medium Stacks</strong> sollten tight spielen — sie haben am meisten zu verlieren</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Short Stacks</strong> können loose shoven — ihr ICM-Verlust beim Ausscheiden ist gering, aber der Gewinn beim Verdoppeln groß</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Grenzen von ICM</h2>
          <p className="text-muted leading-relaxed">
            ICM ist ein Modell — und wie jedes Modell hat es Grenzen:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-red-400">•</span> <strong className="text-foreground">Keine Skill-Berücksichtigung</strong> — ICM nimmt an, dass alle Spieler gleich stark sind. Ein Pro hat aber mehr Equity als ein Anfänger mit dem gleichen Stack.</li>
            <li className="flex items-start gap-2"><span className="text-red-400">•</span> <strong className="text-foreground">Keine Position</strong> — Dealer-Position, Blinds und Tischposition werden nicht berücksichtigt.</li>
            <li className="flex items-start gap-2"><span className="text-red-400">•</span> <strong className="text-foreground">Statisch</strong> — ICM berechnet einen Snapshot, nicht den weiteren Verlauf des Turniers.</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Trotz dieser Grenzen ist ICM der <strong className="text-foreground">Gold-Standard</strong> für faire Deal-Verhandlungen
            und wird weltweit bei professionellen Turnieren eingesetzt.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Exakt vs. Monte Carlo</h2>
          <p className="text-muted leading-relaxed">
            Bei wenigen Spielern (≤10) kann ICM <strong className="text-foreground">exakt</strong> berechnet werden — durch
            vollständige rekursive Permutation aller möglichen Platzierungen. Bei mehr Spielern
            wird die Berechnung exponentiell aufwändig, weshalb <strong className="text-foreground">Monte-Carlo-Simulationen</strong>
            eingesetzt werden (10.000+ Durchläufe für statistisch zuverlässige Ergebnisse).
          </p>
          <p className="text-muted leading-relaxed">
            Der <Link href="/features/icm-rechner" className="text-emerald hover:underline">ICM-Rechner von 7Mountain Poker</Link>
            verwendet beides: exakte Berechnung bis 10 Spieler, Monte Carlo darüber hinaus.
            Alles läuft direkt im Browser — keine Server-Anfrage nötig.
          </p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">ICM selbst berechnen</h3>
            <p className="text-muted mb-6">Chipstacks eingeben, Equity sofort sehen. Kostenlos im Browser.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> ICM-Rechner öffnen
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog/poker-liga-organisieren" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Vorheriger Artikel
          </Link>
          <Link href="/blog/poker-chips-guide" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Nächster Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
