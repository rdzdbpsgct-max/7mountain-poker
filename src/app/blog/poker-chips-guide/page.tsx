import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Chips Guide: Werte, Farben & Color-Up | 7Mountain Poker",
  description:
    "Alles über Poker Chips für Home Games: Standard-Farben und Werte, Chip-Verteilung pro Spieler, Color-Up-Timing und Tipps für den Chip-Kauf.",
  alternates: { canonical: "/blog/poker-chips-guide" },
};

export default function PokerChipsGuidePage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Poker Chips Guide", href: "/blog/poker-chips-guide" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Equipment</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Chips</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Anfänger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Poker Chips Guide: Werte, Farben & Color-Up
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 9 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Die richtigen Chips machen den Unterschied zwischen einem professionellen Poker-Erlebnis
            und einer chaotischen Zettelwirtschaft. Dieser Guide erklärt alles: Standard-Farben,
            Werte-Verteilung, wie viele Chips du brauchst und wann du ein Color-Up durchführen solltest.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Standard Chip-Farben und Werte</h2>
          <p className="text-muted leading-relaxed">
            Es gibt keinen offiziellen Standard, aber diese Farbzuordnung hat sich bei Home Games durchgesetzt:
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Farbe</th><th className="pb-2">Üblicher Wert</th><th className="pb-2">Verwendung</th></tr></thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20"><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-white border border-gray-300 mr-2 align-middle"></span> Weiß</td><td>25 / 1</td><td>Niedrigster Wert, Start-Blinds</td></tr>
                <tr className="border-b border-border/20"><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2 align-middle"></span> Rot</td><td>100 / 5</td><td>Standard-Spielchip</td></tr>
                <tr className="border-b border-border/20"><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2 align-middle"></span> Grün</td><td>500 / 25</td><td>Mittlere bis späte Blinds</td></tr>
                <tr className="border-b border-border/20"><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-gray-900 mr-2 align-middle"></span> Schwarz</td><td>1.000 / 100</td><td>Hohe Blinds, Deep Stacks</td></tr>
                <tr className="border-b border-border/20"><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-blue-500 mr-2 align-middle"></span> Blau</td><td>5.000 / 500</td><td>Spätphase, große Stacks</td></tr>
                <tr><td className="py-2"><span className="inline-block w-4 h-4 rounded-full bg-purple-500 mr-2 align-middle"></span> Lila/Violett</td><td>10.000 / 1.000</td><td>Nur bei Deep Stack Turnieren</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Wie viele Chips pro Spieler?</h2>
          <p className="text-muted leading-relaxed">
            Die Chip-Verteilung hängt vom Startstack und der Blindstruktur ab. Hier drei bewährte Setups:
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Setup A: Turbo (5.000 Chips)</h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Farbe</th><th className="pb-2">Wert</th><th className="pb-2">Anzahl</th><th className="pb-2">Summe</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1">Weiß</td><td>25</td><td>8</td><td>200</td></tr>
                <tr><td className="py-1">Rot</td><td>100</td><td>8</td><td>800</td></tr>
                <tr><td className="py-1">Grün</td><td>500</td><td>4</td><td>2.000</td></tr>
                <tr><td className="py-1">Schwarz</td><td>1.000</td><td>2</td><td>2.000</td></tr>
                <tr className="font-semibold text-foreground"><td className="py-1" colSpan={2}>Gesamt</td><td>22</td><td>5.000</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Setup B: Standard (10.000 Chips)</h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Farbe</th><th className="pb-2">Wert</th><th className="pb-2">Anzahl</th><th className="pb-2">Summe</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1">Weiß</td><td>25</td><td>10</td><td>250</td></tr>
                <tr><td className="py-1">Rot</td><td>100</td><td>10</td><td>1.000</td></tr>
                <tr><td className="py-1">Grün</td><td>500</td><td>6</td><td>3.000</td></tr>
                <tr><td className="py-1">Schwarz</td><td>1.000</td><td>4</td><td>4.000</td></tr>
                <tr><td className="py-1">Blau</td><td>5.000</td><td>1</td><td>5.000</td></tr>
                <tr className="font-semibold text-foreground"><td className="py-1" colSpan={2}>Gesamt</td><td>31</td><td>13.250</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-2">
            Der blaue 5.000er-Chip kommt erst beim Color-Up ins Spiel — starte mit den anderen 4 Farben.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Setup C: Deep Stack (20.000 Chips)</h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Farbe</th><th className="pb-2">Wert</th><th className="pb-2">Anzahl</th><th className="pb-2">Summe</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1">Weiß</td><td>25</td><td>12</td><td>300</td></tr>
                <tr><td className="py-1">Rot</td><td>100</td><td>12</td><td>1.200</td></tr>
                <tr><td className="py-1">Grün</td><td>500</td><td>8</td><td>4.000</td></tr>
                <tr><td className="py-1">Schwarz</td><td>1.000</td><td>6</td><td>6.000</td></tr>
                <tr><td className="py-1">Blau</td><td>5.000</td><td>2</td><td>10.000</td></tr>
                <tr className="font-semibold text-foreground"><td className="py-1" colSpan={2}>Gesamt</td><td>40</td><td>21.500</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Wie viele Chips insgesamt kaufen?</h2>
          <p className="text-muted leading-relaxed">
            Die Formel ist einfach:
          </p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 text-center">
            <p className="text-lg font-mono text-foreground">
              Chips gesamt = (Spieler × Chips pro Spieler) + 20% Reserve
            </p>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            Für 8 Spieler mit Setup B (31 Chips/Spieler): 8 × 31 = 248, plus 20% Reserve = <strong className="text-foreground">~300 Chips</strong>.
            Ein 300er- oder 500er-Chipkoffer deckt die meisten Home Games ab.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Reserve brauchst du für:</strong> Rebuys, Color-Ups (größere Chips einwechseln)
            und den einen Spieler, der seine Chips unter der Couch verliert.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Color-Up: Wann und wie?</h2>
          <p className="text-muted leading-relaxed">
            Ein <strong className="text-foreground">Color-Up</strong> (auch „Chip Race") entfernt die kleinste Chip-Denomination
            aus dem Spiel, wenn sie nicht mehr benötigt wird. Das hält den Tisch übersichtlich
            und sorgt dafür, dass Spieler nicht mit Bergen kleiner Chips hantieren.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Wann color-uppen?</h3>
          <p className="text-muted leading-relaxed">
            Faustregel: Entferne eine Chip-Farbe, wenn die <strong className="text-foreground">Blinds mehr als 4× den Chipwert</strong>
            betragen. Beispiel: Weiße 25er-Chips werden entfernt, wenn die Blinds bei 100/200 oder höher sind.
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Chip-Farbe</th><th className="pb-2">Wert</th><th className="pb-2">Color-Up bei Blinds</th></tr></thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20"><td className="py-1">Weiß</td><td>25</td><td>100/200</td></tr>
                <tr className="border-b border-border/20"><td className="py-1">Rot</td><td>100</td><td>500/1.000</td></tr>
                <tr><td className="py-1">Grün</td><td>500</td><td>2.000/4.000</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Wie funktioniert das Color-Up?</h3>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li><strong className="text-foreground">Pausen nutzen</strong> — Color-Ups am besten in einer Turnierpause durchführen.</li>
            <li><strong className="text-foreground">Aufrunden</strong> — Ungerade Restchips werden aufgerundet. Hat ein Spieler 3 weiße 25er (= 75), bekommt er einen roten 100er.</li>
            <li><strong className="text-foreground">Chip Race (optional)</strong> — Bei professionellen Turnieren: Ungerade Chips werden per Chip Race (Kartenziehen) verteilt. Für Home Games ist Aufrunden einfacher.</li>
            <li><strong className="text-foreground">Einsammeln</strong> — Alle entfernten Chips werden eingesammelt und zurück in die Reserve gelegt.</li>
          </ol>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">💡 Timer-Tipp</p>
            <p className="text-sm text-muted">
              Der <Link href="https://7mountainpoker.vercel.app" className="text-emerald hover:underline">7Mountain Poker Timer</Link>
              kündigt Color-Ups automatisch an — per Sprache und Banner. Du definierst die
              Chip-Stückelung im Setup, und der Timer erinnert dich in der richtigen Pause.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Chip-Qualität: Plastik vs. Clay</h2>
          <p className="text-muted leading-relaxed">
            Es gibt drei Qualitätsstufen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
              <h4 className="font-bold text-foreground mb-2">Plastik</h4>
              <p className="text-xs text-muted mb-2">ab 200 Chips</p>
              <p className="text-sm text-muted">Leicht, rutschen leicht, klingen billig. Für den Anfang okay, aber kein Casino-Feeling.</p>
            </div>
            <div className="rounded-xl border border-emerald/30 bg-surface/40 p-4">
              <h4 className="font-bold text-emerald mb-2">Composite / ABS</h4>
              <p className="text-xs text-muted mb-2">ab 200 Chips</p>
              <p className="text-sm text-muted">Guter Kompromiss: angenehmes Gewicht (11–14g), griffige Oberfläche, ordentliches Feeling. <strong className="text-foreground">Empfehlung für Home Games.</strong></p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
              <h4 className="font-bold text-foreground mb-2">Clay / Keramik</h4>
              <p className="text-xs text-muted mb-2">ab 200 Chips</p>
              <p className="text-sm text-muted">Casino-Qualität: perfektes Gewicht, Griffigkeit und Sound. Für Enthusiasten und Liga-Spieler.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Häufige Fehler beim Chip-Setup</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Zu wenige Farben</p>
              <p className="text-sm text-muted">Mit nur 2 Farben wird es spätestens bei Blinds über 500 unübersichtlich. Mindestens 3, besser 4–5 Farben.</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Blinds passen nicht zu Chips</p>
              <p className="text-sm text-muted">Wenn dein kleinstes Chip 100 wert ist, können deine Start-Blinds nicht 25/50 sein. Chips und Blindstruktur müssen zusammenpassen.</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Color-Up vergessen</p>
              <p className="text-sm text-muted">Ohne Color-Up stapeln sich kleine Chips zu Bergen. Das verlangsamt das Spiel und führt zu Fehlern beim Zählen.</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Chip-Management im Timer</h3>
            <p className="text-muted mb-6">Definiere Chipwerte, erhalte automatische Color-Up-Erinnerungen und Kompatibilitätswarnungen.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> Timer öffnen
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog/icm-erklaert" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Vorheriger Artikel
          </Link>
          <Link href="/blog/multi-table-turnier" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Nächster Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
