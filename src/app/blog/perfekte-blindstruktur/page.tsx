import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Die perfekte Blindstruktur für Home Games | 7Mountain Poker",
  description:
    "Schnell, Standard oder Deep Stack? Wie du die Blindstruktur an Spieleranzahl, Dauer und Chipstückelung anpasst. Mit Beispielen und Generator.",
  alternates: { canonical: "/blog/perfekte-blindstruktur" },
};

export default function PerfekteBlindstrukturPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Perfekte Blindstruktur", href: "/blog/perfekte-blindstruktur" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Blindstruktur</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Strategie</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Die perfekte Blindstruktur für Home Games
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 8 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Die Blindstruktur ist das Herzstück jedes Poker-Turniers. Sie bestimmt das Tempo,
            die Dauer und wie viel Skill gegenüber Glück eine Rolle spielt. Eine gut gewählte
            Struktur macht den Unterschied zwischen einem frustrierenden Coin-Flip-Fest und
            einem spannenden, strategischen Turnier.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Was macht eine gute Blindstruktur aus?</h2>
          <p className="text-muted leading-relaxed">
            Eine gute Blindstruktur hat drei Eigenschaften:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald font-bold">1.</span> <strong className="text-foreground">Gleichmäßige Steigerung</strong> — Die Blinds steigen um 50–100% pro Level. Keine plötzlichen Sprünge.</li>
            <li className="flex items-start gap-2"><span className="text-emerald font-bold">2.</span> <strong className="text-foreground">Genug Big Blinds</strong> — Spieler sollten zu Beginn mindestens 100 BB haben, idealerweise 150–200 BB.</li>
            <li className="flex items-start gap-2"><span className="text-emerald font-bold">3.</span> <strong className="text-foreground">Passende Dauer</strong> — Die Struktur sollte zur verfügbaren Zeit passen, nicht umgekehrt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3 Geschwindigkeiten im Vergleich</h2>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">⚡ Schnell (Turbo)</h3>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Level-Dauer:</strong> 6–8 Minuten<br />
            <strong className="text-foreground">Startstack:</strong> 50–80 Big Blinds<br />
            <strong className="text-foreground">Turnierdauer:</strong> 1–2 Stunden für 8 Spieler
          </p>
          <p className="text-muted leading-relaxed">
            Ideal für kurze Runden unter Freunden oder als Aufwärmer vor dem Hauptturnier.
            Der Glücksfaktor ist höher, aber die Action ist schnell und unterhaltsam.
          </p>

          <div className="rounded-xl border border-border/50 bg-surface/40 p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Level</th><th className="pb-2">SB</th><th className="pb-2">BB</th><th className="pb-2">Dauer</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1">1</td><td>25</td><td>50</td><td>6 min</td></tr>
                <tr><td className="py-1">2</td><td>50</td><td>100</td><td>6 min</td></tr>
                <tr><td className="py-1">3</td><td>75</td><td>150</td><td>6 min</td></tr>
                <tr><td className="py-1">4</td><td>100</td><td>200</td><td>6 min</td></tr>
                <tr className="text-amber-400"><td className="py-1">Pause</td><td colSpan={3}>5 min</td></tr>
                <tr><td className="py-1">5</td><td>150</td><td>300</td><td>6 min</td></tr>
                <tr><td className="py-1">6</td><td>200</td><td>400</td><td>6 min</td></tr>
                <tr><td className="py-1">7</td><td>300</td><td>600</td><td>6 min</td></tr>
                <tr><td className="py-1">8</td><td>500</td><td>1.000</td><td>6 min</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">♠ Standard</h3>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Level-Dauer:</strong> 12–15 Minuten<br />
            <strong className="text-foreground">Startstack:</strong> 100–150 Big Blinds<br />
            <strong className="text-foreground">Turnierdauer:</strong> 2,5–4 Stunden für 8 Spieler
          </p>
          <p className="text-muted leading-relaxed">
            Der Klassiker für den Pokerabend. Genug Zeit für strategisches Spiel, aber nicht so lang,
            dass jemand nach Hause will bevor es spannend wird.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">🎰 Deep Stack</h3>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Level-Dauer:</strong> 15–20 Minuten<br />
            <strong className="text-foreground">Startstack:</strong> 150–200+ Big Blinds<br />
            <strong className="text-foreground">Turnierdauer:</strong> 4+ Stunden für 8 Spieler
          </p>
          <p className="text-muted leading-relaxed">
            Für erfahrene Spieler, die tiefes Post-Flop-Spiel bevorzugen. Mehr Raum für Bluffs,
            Fallen und komplexe Entscheidungen. Plane genug Zeit (und Snacks) ein.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Ante: Ja oder Nein?</h2>
          <p className="text-muted leading-relaxed">
            Antes erhöhen den Pot und verhindern zu tightes Spiel in späteren Levels.
            Zwei Optionen:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Standard-Ante</strong>: ~12,5% des Big Blind. Klassisch, aber erfordert ständiges Einwerfen.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Big Blind Ante (BBA)</strong>: Der BB-Spieler zahlt die Ante für den gesamten Tisch. WSOP-Standard seit 2018. Schneller und einfacher.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Pausen richtig planen</h2>
          <p className="text-muted leading-relaxed">
            Alle <strong className="text-foreground">60–90 Minuten</strong> eine Pause von 5–10 Minuten einplanen.
            Nutze die Pause für Color-Ups (kleine Chips entfernen) — der Timer kann das
            automatisch ankündigen.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Automatisch generieren lassen</h2>
          <p className="text-muted leading-relaxed">
            Der <Link href="/features/blindstruktur" className="text-emerald hover:underline">Blindstruktur-Generator</Link>
            von 7Mountain Poker berechnet die optimale Struktur basierend auf deiner Spieleranzahl,
            gewünschter Dauer und Chipstückelung. Du kannst auch eine Endzeit angeben — die Struktur
            wird passend generiert.
          </p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Blindstruktur generieren</h3>
            <p className="text-muted mb-6">3 Geschwindigkeiten, chip-aware Rundung, automatische Pausen.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> Generator öffnen
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog/poker-turnier-planen" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Vorheriger Artikel
          </Link>
          <Link href="/blog/poker-timer-vergleich" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Nächster Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
