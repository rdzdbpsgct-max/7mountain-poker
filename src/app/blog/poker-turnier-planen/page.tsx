import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Turnier planen: Der komplette Guide für 2026 | 7Mountain Poker",
  description:
    "Von der Spieleranzahl über die Blindstruktur bis zur Platzierung. Der umfassende Guide für die perfekte Organisation deines Poker-Turniers zu Hause.",
  alternates: { canonical: "/blog/poker-turnier-planen" },
};

export default function PokerTurnierPlanenPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Poker Turnier planen", href: "/blog/poker-turnier-planen" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Planung</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Home Game</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Poker Turnier planen: Der komplette Guide für 2026
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 12 Min Lesezeit</p>

        <div className="mt-12 prose prose-lg prose-invert max-w-none space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Ein Poker-Turnier zu Hause zu organisieren ist einfacher als du denkst — vorausgesetzt,
            du planst die richtigen Dinge im Voraus. Dieser Guide führt dich Schritt für Schritt
            durch alles, was du brauchst: von der Einladung bis zum letzten Chip.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Spieleranzahl und Einladung</h2>
          <p className="text-muted leading-relaxed">
            Die ideale Gruppengröße für ein Home Game liegt zwischen <strong className="text-foreground">6 und 10 Spielern</strong>.
            Mit weniger als 6 wird es schnell langweilig, mit mehr als 10 brauchst du einen zweiten Tisch.
            Plane mit 1–2 Spielern Puffer ein — es sagt immer jemand ab.
          </p>
          <p className="text-muted leading-relaxed">
            Verschicke die Einladung mindestens <strong className="text-foreground">eine Woche vorher</strong> mit Datum, Uhrzeit,
            Startzeit und Adresse. Eine WhatsApp-Gruppe reicht völlig aus.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Turnier-Format wählen</h2>
          <p className="text-muted leading-relaxed">
            Das Turnier-Format bestimmt die Atmosphäre. Entscheide vorab, ob es ein <strong className="text-foreground">Freezeout</strong> (keine
            zweite Chance) oder ein <strong className="text-foreground">Rebuy-Turnier</strong> wird. Bei Rebuys können eliminierte Spieler
            in den ersten Levels zurückkehren — das hält alle länger im Spiel.
          </p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-2">💡 Tipp</p>
            <p className="text-sm text-muted">
              Ein typisches Setup: Rebuys in den ersten 4 Levels erlaubt,
              danach Freezeout. Optional mit einem Add-On nach der Rebuy-Phase.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Die richtige Blindstruktur</h2>
          <p className="text-muted leading-relaxed">
            Die Blindstruktur bestimmt, wie lange das Turnier dauert und wie viel Skill vs. Glück
            eine Rolle spielt. Als Faustregel:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Schnell (1–2 Std.)</strong>: 6–8 Min Levels, aggressive Steigerung. Ideal für kurze Runden.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Normal (2–4 Std.)</strong>: 10–15 Min Levels, ausgewogene Steigerung. Der Standard für Home Games.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Deep Stack (4+ Std.)</strong>: 15–20 Min Levels, sanfte Steigerung. Für erfahrene Spieler.</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Nutze einen <Link href="/features/blindstruktur" className="text-emerald hover:underline">Blindstruktur-Generator</Link>,
            um die optimale Struktur für deine Spieleranzahl und gewünschte Dauer zu berechnen.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Chips und Startstack</h2>
          <p className="text-muted leading-relaxed">
            Du brauchst mindestens <strong className="text-foreground">3–4 verschiedene Chip-Farben</strong>. Ein typisches Set:
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Farbe</th><th className="pb-2">Wert</th><th className="pb-2">Pro Spieler</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1">Weiß</td><td>25</td><td>10 Stück</td></tr>
                <tr><td className="py-1">Rot</td><td>100</td><td>10 Stück</td></tr>
                <tr><td className="py-1">Grün</td><td>500</td><td>4 Stück</td></tr>
                <tr><td className="py-1">Schwarz</td><td>1.000</td><td>2 Stück</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed">
            Das ergibt einen Startstack von <strong className="text-foreground">5.250 Chips</strong> pro Spieler — ein guter Wert
            für 12–15 Min Levels.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Platzierungen festlegen</h2>
          <p className="text-muted leading-relaxed">
            Standard-Verteilung der Plätze für 6–10 Spieler:
          </p>
          <ul className="space-y-1 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">🏆</span> 1. Platz: 50% des Prizepools</li>
            <li className="flex items-start gap-2"><span className="text-emerald">🥈</span> 2. Platz: 30%</li>
            <li className="flex items-start gap-2"><span className="text-emerald">🥉</span> 3. Platz: 20%</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Bei mehr als 10 Spielern kannst du den 4. Platz noch ins Geld nehmen (10%).
            Alternativ: Bounty-Turniere, bei denen jede Elimination einen kleinen Bonus bringt.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Equipment-Checkliste</h2>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Pokertisch oder großer Esstisch mit Filzauflage</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Pokerchips (mindestens 300 für 8 Spieler)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> 2 Kartendecks (am besten Plastikkarten)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Dealer-Button</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <Link href="https://7mountainpoker.vercel.app" className="text-emerald hover:underline">Poker Timer App</Link> auf Laptop/Tablet</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Optional: TV/Beamer für den <Link href="/features/tv-modus" className="text-emerald hover:underline">TV-Modus</Link></li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Getränke und Snacks</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Timer starten</h2>
          <p className="text-muted leading-relaxed">
            Mit einem <Link href="https://7mountainpoker.vercel.app" className="text-emerald hover:underline">Poker-Timer</Link> läuft
            alles automatisch: Blind-Erhöhungen, Pausen-Timer, Sprachansagen für Level-Wechsel
            und Eliminierungen. Du kannst dich aufs Spielen konzentrieren statt auf die Organisation.
          </p>
          <p className="text-muted leading-relaxed">
            Bonus: Mit der <Link href="/features/fernbedienung" className="text-emerald hover:underline">Smartphone-Fernbedienung</Link>
            steuerst du alles vom Platz aus — Play/Pause, nächstes Level, Spieler eliminieren.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">8. Liga aufbauen</h2>
          <p className="text-muted leading-relaxed">
            Wenn ihr regelmäßig spielt, lohnt sich eine <Link href="/features/liga" className="text-emerald hover:underline">Poker-Liga</Link>.
            Punkte für jedes Turnier, eine Rangliste über die Saison, und am Ende ein Liga-Champion.
            Das motiviert alle, wiederzukommen.
          </p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Bereit für dein Turnier?</h3>
            <p className="text-muted mb-6">Starte in 30 Sekunden — ohne Anmeldung, kostenlos.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> Jetzt Turnier starten
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Alle Artikel
          </Link>
          <Link href="/blog/perfekte-blindstruktur" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Nächster Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
