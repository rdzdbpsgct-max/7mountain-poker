import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Multi-Table Poker Turnier organisieren | Tischverteilung, Balancing & Final Table | 7Mountain Poker",
  description:
    "So organisierst du ein Poker-Turnier mit mehreren Tischen: Tischverteilung, Balancing, Tischauflösung, Final Table und Spielerwechsel — der komplette Guide.",
  alternates: { canonical: "/blog/multi-table-turnier" },
};

export default function MultiTableTurnierPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Multi-Table Turnier", href: "/blog/multi-table-turnier" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Multi-Table</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Organisation</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Fortgeschritten</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Multi-Table Poker Turnier organisieren
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 10 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Ab 11 Spielern wird es an einem Tisch eng. Die Lösung: Mehrere Tische.
            Aber Multi-Table-Turniere stellen besondere Herausforderungen: Wer sitzt wo?
            Wann werden Tische zusammengelegt? Wie bleibt es fair? Dieser Guide erklärt
            alles, was du als Turnierleiter wissen musst.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Wann brauchst du mehrere Tische?</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Spieler</th><th className="pb-2">Tische</th><th className="pb-2">Pro Tisch</th></tr></thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20"><td className="py-1">2–10</td><td>1</td><td>Alle an einem Tisch</td></tr>
                <tr className="border-b border-border/20"><td className="py-1 font-medium text-foreground">11–18</td><td>2</td><td>5–9 Spieler</td></tr>
                <tr className="border-b border-border/20"><td className="py-1">19–27</td><td>3</td><td>6–9 Spieler</td></tr>
                <tr><td className="py-1">28–36</td><td>4</td><td>7–9 Spieler</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            Die <strong className="text-foreground">ideale Tischgröße</strong> für Home Games liegt bei <strong className="text-foreground">7–9 Spielern</strong>.
            Weniger als 5 pro Tisch macht keinen Spaß, mehr als 9 wird unpraktisch.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 1: Tischverteilung</h2>
          <p className="text-muted leading-relaxed">
            Die Verteilung der Spieler auf Tische sollte <strong className="text-foreground">zufällig und gleichmäßig</strong> sein.
            Am besten funktioniert Round-Robin:
          </p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-3">Round-Robin-Verteilung (14 Spieler, 2 Tische)</p>
            <p className="text-sm text-muted font-mono">
              Spieler 1 → Tisch 1, Sitz 1<br />
              Spieler 2 → Tisch 2, Sitz 1<br />
              Spieler 3 → Tisch 1, Sitz 2<br />
              Spieler 4 → Tisch 2, Sitz 2<br />
              ... usw.
            </p>
            <p className="text-sm text-muted mt-3">
              So hat jeder Tisch die gleiche Anzahl Spieler (7/7). Kein Tisch wird bevorzugt.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 2: Table Balancing</h2>
          <p className="text-muted leading-relaxed">
            Wenn Spieler eliminiert werden, entstehen Ungleichgewichte. Ein Tisch hat vielleicht
            noch 8 Spieler, der andere nur 5. Das ist unfair — der kleinere Tisch spielt
            öfter die Blinds und verliert schneller Chips.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Die Regel:</strong> Balanciere, sobald die Differenz zwischen dem größten
            und kleinsten Tisch <strong className="text-foreground">&gt; 1 Spieler</strong> beträgt.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Wer wird verschoben?</strong> Der Spieler auf dem höchsten besetzten Sitz
            am großen Tisch wird zum niedrigsten freien Sitz am kleinen Tisch gesetzt.
          </p>

          <div className="rounded-xl border border-border/50 bg-surface/40 p-5 mt-4">
            <h4 className="font-bold text-foreground mb-3">Beispiel:</h4>
            <p className="text-sm text-muted">
              Tisch 1: 7 Spieler<br />
              Tisch 2: 5 Spieler<br />
              → Differenz = 2 → <span className="text-emerald font-semibold">Balancing nötig</span><br />
              → Sitz 9 von Tisch 1 wechselt zu Sitz 3 (frei) an Tisch 2<br />
              → Ergebnis: 6 / 6 ✓
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 3: Tischauflösung</h2>
          <p className="text-muted leading-relaxed">
            Wenn ein Tisch zu wenige Spieler hat, wird er <strong className="text-foreground">aufgelöst</strong>.
            Die verbliebenen Spieler werden gleichmäßig auf die aktiven Tische verteilt.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Schwelle:</strong> Löse einen Tisch auf, wenn er weniger als 4–5 Spieler hat
            (oder wenn die Gesamtzahl an Spielern an einem einzigen Tisch Platz findet).
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">1.</span> Tisch wird als „aufgelöst" markiert</li>
            <li className="flex items-start gap-2"><span className="text-emerald">2.</span> Verbleibende Spieler werden Round-Robin auf aktive Tische verteilt</li>
            <li className="flex items-start gap-2"><span className="text-emerald">3.</span> Gesperrte Sitze werden dabei übersprungen</li>
            <li className="flex items-start gap-2"><span className="text-emerald">4.</span> Alle Tisch-Wechsel werden dokumentiert und angekündigt</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 4: Der Final Table</h2>
          <p className="text-muted leading-relaxed">
            Der <strong className="text-foreground">Final Table</strong> ist der Höhepunkt des Turniers — alle verbleibenden
            Spieler an einem Tisch. In der Regel wird der Final Table gebildet, wenn
            <strong className="text-foreground"> 9 oder weniger Spieler</strong> übrig sind (bei 9-er Tischen).
          </p>
          <p className="text-muted leading-relaxed">
            Der Übergang zum Final Table verdient besondere Aufmerksamkeit:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">🏆</span> <strong className="text-foreground">Pause einlegen</strong> — Gib den Spielern 10 Minuten zum Umsetzen und Durchatmen.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">📺</span> <strong className="text-foreground">TV-Modus aktivieren</strong> — Wenn vorhanden, ist jetzt der perfekte Zeitpunkt für den <Link href="/features/tv-modus" className="text-emerald hover:underline">TV-Modus</Link>.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">🎙️</span> <strong className="text-foreground">Ankündigung</strong> — „Willkommen am Final Table!" Die Sprachansage von 7Mountain Poker macht das automatisch.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">📸</span> <strong className="text-foreground">Foto</strong> — Final-Table-Foto für die Nachwelt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Sonderregeln für Multi-Table</h2>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Hand-for-Hand an der Bubble</h3>
          <p className="text-muted leading-relaxed">
            Wenn ein Spieler vor dem Geld, wird <strong className="text-foreground">Hand-for-Hand</strong> gespielt:
            Alle Tische spielen gleichzeitig eine Hand, dann wird pausiert, bis alle
            Tische fertig sind. So kann niemand die Bubble „aussitzen" und hoffen,
            dass ein anderer Tisch zuerst jemanden eliminiert.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Dealer-Button bei Tischwechsel</h3>
          <p className="text-muted leading-relaxed">
            Ein Spieler, der den Tisch wechselt, kann am neuen Tisch in eine Position geraten,
            in der er die Blinds doppelt zahlen müsste. <strong className="text-foreground">Faire Regel:</strong> Der Wechselspieler
            sitzt eine Hand aus, wenn er zwischen Small Blind und Button platziert wird.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Seat Locking</h3>
          <p className="text-muted leading-relaxed">
            Manchmal willst du bestimmte Sitze sperren — zum Beispiel wenn ein Tisch physisch
            nur 8 Plätze hat, oder wenn ein Sitz kaputt ist. Gesperrte Sitze werden beim
            Balancing und bei der Verteilung automatisch übersprungen.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Equipment für Multi-Table</h2>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <strong className="text-foreground">2+ Tische</strong> — Klapptische, Pokertische oder große Esstische.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <strong className="text-foreground">2 Kartendecks pro Tisch</strong> — Eins im Spiel, eins wird gemischt.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <strong className="text-foreground">Dealer-Button pro Tisch</strong> — 7Mountain Poker trackt den Dealer automatisch pro Tisch.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <strong className="text-foreground">Tischnummern</strong> — Einfache Schilder (Tisch 1, Tisch 2) reichen aus.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> <strong className="text-foreground">Timer sichtbar für alle</strong> — Ein großer Bildschirm mit <Link href="/features/tv-modus" className="text-emerald hover:underline">TV-Modus</Link>, oder ein Tablet pro Tisch.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Digitale Multi-Table-Verwaltung</h2>
          <p className="text-muted leading-relaxed">
            Bei einem einzelnen Tisch kann man alles im Kopf behalten. Bei mehreren Tischen
            wird es ohne Tool schnell chaotisch. 7Mountain Poker unterstützt Multi-Table nativ:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Automatische Spielerverteilung (Round-Robin)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Auto-Balancing bei Elimination (max ±1 Differenz)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Tischauflösung mit automatischer Umverteilung</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Final-Table-Erkennung und Zusammenlegung</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Sprachansagen bei Tischwechsel und Auflösung</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Move-Log mit Quell-/Zieltisch und Sitzplatz</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> Seat-Level-Tracking (kein Spieler geht verloren)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Ablauf-Checkliste</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 space-y-2 text-sm text-muted">
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Tische und Stühle aufstellen</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Kartendecks und Dealer-Buttons verteilen</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Spieler im Timer eintragen</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Multi-Table-Modus aktivieren (Tischanzahl, Sitze)</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> „Verteilen" drücken → Spieler werden zugewiesen</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Tischnummern aushängen</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Timer starten — Balancing + Auflösung laufen automatisch</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Bei Tischwechsel: Spieler informieren (Sprachansage)</p>
            <p className="flex items-start gap-2"><span className="text-emerald">☐</span> Final Table: Pause, Foto, weiter geht&apos;s!</p>
          </div>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Multi-Table-Turnier starten</h3>
            <p className="text-muted mb-6">Automatische Verteilung, Balancing und Tischauflösung inklusive.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> Turnier starten
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog/poker-chips-guide" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Vorheriger Artikel
          </Link>
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Alle Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
