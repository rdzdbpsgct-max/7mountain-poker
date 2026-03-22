import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Liga organisieren: Punktesystem, Spieltage & Ranking | 7Mountain Poker",
  description:
    "So organisierst du eine Poker-Liga für deine Home-Game-Gruppe. Punktesystem, Saisons, Tiebreaker, Ranking und digitale Verwaltung — der komplette Guide.",
  alternates: { canonical: "/blog/poker-liga-organisieren" },
};

export default function PokerLigaOrganisierenPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Poker Liga organisieren", href: "/blog/poker-liga-organisieren" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Liga</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Organisation</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Home Game</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Poker Liga organisieren: Der komplette Guide
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 14 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Eine Poker-Liga verwandelt lose Pokerabende in ein fortlaufendes Event, auf das sich
            alle freuen. Statt einzelner Turniere ohne Konsequenz entsteht ein Wettbewerb über
            eine ganze Saison — mit Rangliste, Rivalitäten und einem Liga-Champion am Ende.
            Dieser Guide zeigt dir, wie du eine Liga aufbaust, die funktioniert und Spaß macht.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Warum eine Liga?</h2>
          <p className="text-muted leading-relaxed">
            Die Vorteile gegenüber einzelnen Turnieren liegen auf der Hand:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Motivation</strong> — Eine Rangliste motiviert, regelmäßig zu kommen. „Ich bin Dritter, nächste Woche hol ich mir den zweiten Platz."</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Verbindlichkeit</strong> — Feste Spieltage mit Liga-Punkten sorgen dafür, dass weniger abgesagt wird.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Fairness</strong> — Über viele Turniere setzt sich Skill gegen Glück durch.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <strong className="text-foreground">Gemeinschaft</strong> — Eine Liga schafft Zusammenhalt und Running Gags, die über Jahre halten.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 1: Grundregeln festlegen</h2>
          <p className="text-muted leading-relaxed">
            Bevor der erste Chip fällt, sollten alle Spieler diese Fragen klären:
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Spielrhythmus</h3>
          <p className="text-muted leading-relaxed">
            Der häufigste Rhythmus ist <strong className="text-foreground">einmal pro Monat</strong> — regelmäßig genug für Spannung,
            aber mit genug Abstand, damit alle Zeit finden. Wöchentlich funktioniert nur bei sehr
            motivierten Gruppen. Alle 2 Wochen ist ein guter Kompromiss.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Saisondauer</h3>
          <p className="text-muted leading-relaxed">
            Eine Saison von <strong className="text-foreground">8–12 Spieltagen</strong> ist ideal. Kürzer und der Zufall dominiert,
            länger und es wird schwer, die Motivation zu halten. Bei monatlichen Spielen ergibt
            das eine natürliche Saison von September bis Juni — perfekt abgestimmt auf Poker im Winter.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Turnier-Format festlegen</h3>
          <p className="text-muted leading-relaxed">
            Halte das Turnier-Format konstant über die Saison. Einigt euch auf Startchips, Blindstruktur
            und ob Rebuys erlaubt sind. Konsistenz macht die Liga fair und vergleichbar.
          </p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">💡 Organisations-Tipp</p>
            <p className="text-sm text-muted">
              Führe eine <strong className="text-foreground">Ergebnistabelle</strong> mit Platzierungen und Punkten pro Spieler und
              Spieltag. Am Ende der Saison weiß jeder genau, wo er steht. Die
              <Link href="/features/liga" className="text-emerald hover:underline ml-1">Liga-Funktion von 7Mountain Poker</Link> macht
              das automatisch.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 2: Punktesystem wählen</h2>
          <p className="text-muted leading-relaxed">
            Das Punktesystem bestimmt, wie viel jede Platzierung wert ist. Es gibt drei bewährte Modelle:
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Modell 1: Standard-Punkte</h3>
          <p className="text-muted leading-relaxed">
            Feste Punkte pro Platzierung. Einfach, transparent, bewährt.
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">Platz</th><th className="pb-2">1.</th><th className="pb-2">2.</th><th className="pb-2">3.</th><th className="pb-2">4.</th><th className="pb-2">5.</th><th className="pb-2">6.</th><th className="pb-2">7.</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1 font-medium text-foreground">Punkte</td><td>10</td><td>7</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-2">
            Der Abstand zwischen 1. und 2. Platz (3 Punkte) ist bewusst größer als zwischen
            den hinteren Plätzen — ein Sieg soll sich deutlich lohnen.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Modell 2: ELO-Rating</h3>
          <p className="text-muted leading-relaxed">
            Angelehnt an Schach: Jeder Spieler startet mit 1500 Punkten. Nach jedem Turnier werden
            Punkte basierend auf der erwarteten vs. tatsächlichen Leistung umverteilt. Ein Sieg
            gegen starke Spieler bringt mehr als gegen schwache.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Vorteil:</strong> Selbst-adjustierend, berücksichtigt Gegner-Stärke.<br />
            <strong className="text-foreground">Nachteil:</strong> Weniger intuitiv, schwerer zu erklären.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Modell 3: Gewichtete Punkte</h3>
          <p className="text-muted leading-relaxed">
            Wie Standard-Punkte, aber neuere Turniere zählen mehr als ältere. Ein Decay-Faktor
            sorgt dafür, dass aktuelle Form mehr wiegt als vergangene Erfolge.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">Vorteil:</strong> Belohnt aktuelle Performance, hält die Tabelle dynamisch.<br />
            <strong className="text-foreground">Nachteil:</strong> Frühes Führen wird weniger belohnt.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 3: Tiebreaker definieren</h2>
          <p className="text-muted leading-relaxed">
            Bei Punktgleichheit braucht ihr klare Regeln. Empfohlene Reihenfolge:
          </p>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li><strong className="text-foreground">Durchschnittliche Platzierung</strong> — Wer hat über alle Turniere besser abgeschnitten?</li>
            <li><strong className="text-foreground">Anzahl Siege</strong> — Bei gleichem Durchschnitt: Wer hat öfter gewonnen?</li>
            <li><strong className="text-foreground">Anzahl Cashes</strong> — Wer war öfter im Geld?</li>
            <li><strong className="text-foreground">Head-to-Head</strong> — Wer hat den anderen öfter geschlagen?</li>
            <li><strong className="text-foreground">Letztes Ergebnis</strong> — Wer war zuletzt besser?</li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 4: Gastspieler handhaben</h2>
          <p className="text-muted leading-relaxed">
            Gäste beleben die Runde, aber sie sollten die Liga-Wertung nicht verzerren.
            Zwei bewährte Ansätze:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">A)</span> <strong className="text-foreground">Gastspieler markieren</strong> — Gäste spielen mit, erscheinen aber nicht in der Gesamttabelle. Ihre Punkte gehen an niemanden.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">B)</span> <strong className="text-foreground">Mindest-Teilnahme</strong> — Nur Spieler mit ≥50% Teilnahmequote erscheinen in der Endwertung.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 5: Saison-Abschluss planen</h2>
          <p className="text-muted leading-relaxed">
            Das letzte Turnier der Saison sollte besonders sein:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">🏆</span> <strong className="text-foreground">Doppelte Punkte</strong> — Das Finale mit doppelten Punkten für extra Spannung.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">🎉</span> <strong className="text-foreground">Liga-Trophäe</strong> — Ein kleiner Pokal oder eine Trophäe für den Liga-Champion.</li>
            <li className="flex items-start gap-2"><span className="text-emerald">📊</span> <strong className="text-foreground">Saisonrückblick</strong> — Zeige die finale Tabelle, Statistiken und lustige Awards (meiste Rebuys, meiste Bubble-Finishes, etc.).</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Schritt 6: Digitale Verwaltung</h2>
          <p className="text-muted leading-relaxed">
            Zettelwirtschaft und Excel-Tabellen funktionieren — bis sie es nicht mehr tun.
            Sobald eure Liga mehr als 3–4 Spieltage hat, lohnt sich eine digitale Lösung:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Automatische Punkteberechnung nach jedem Turnier</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Ergebnistabelle mit Statistiken pro Spieler</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Head-to-Head-Statistiken</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> QR-Code zum Teilen der Tabelle</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Export als CSV oder Text (für WhatsApp)</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Die <Link href="/features/liga" className="text-emerald hover:underline">Liga-Funktion von 7Mountain Poker</Link>
            bietet all das — inklusive 3 Ranking-Algorithmen, Saison-Verwaltung, Gastspieler-Markierung,
            Punkt-Korrekturen und TV-Display für die Tabelle.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Häufige Fehler vermeiden</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Zu kompliziertes Punktesystem</p>
              <p className="text-sm text-muted">Wenn du 5 Minuten brauchst, um das System zu erklären, ist es zu komplex. Start einfach, erweitere später.</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Keine festen Termine</p>
              <p className="text-sm text-muted">„Wir spielen, wenn alle können" heißt: Ihr spielt nie. Legt einen festen Wochentag fest (z.B. „Erster Freitag im Monat").</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Ergebnisse nicht tracken</p>
              <p className="text-sm text-muted">Am Ende der Saison will jeder wissen, wie er abgeschnitten hat. Tracke Platzierungen von Anfang an.</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">❌ Kein Mindest-Teilnahme-Kriterium</p>
              <p className="text-sm text-muted">Jemand kommt einmal, gewinnt, und ist „Liga-Führer". Setze eine Mindest-Teilnahme von 50%.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Beispiel: Unsere Liga „Mountain League"</h2>
          <p className="text-muted leading-relaxed">
            Hier ein konkretes Beispiel, wie eine gut funktionierende Liga aussehen kann:
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 space-y-3 text-sm text-muted">
            <p><strong className="text-foreground">Spieler:</strong> 8 Stammspieler + 2–3 Gäste pro Abend</p>
            <p><strong className="text-foreground">Rhythmus:</strong> Jeden 1. Samstag im Monat, 19 Uhr</p>
            <p><strong className="text-foreground">Format:</strong> Freezeout + 1 Rebuy in Level 1–4</p>
            <p><strong className="text-foreground">Punkte:</strong> Standard (10/7/5/4/3/2/1)</p>
            <p><strong className="text-foreground">Saison:</strong> September bis Juni (10 Spieltage)</p>
            <p><strong className="text-foreground">Finale:</strong> Doppelte Punkte</p>
            <p><strong className="text-foreground">Tiebreaker:</strong> Ø Platzierung → Siege → Head-to-Head</p>
            <p><strong className="text-foreground">Trophäe:</strong> Wanderpokal + Gruppenfoto</p>
          </div>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Liga erstellen</h3>
            <p className="text-muted mb-6">Punktesystem, Spieltage, Statistiken — alles in einer App.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> Liga starten
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            Alle Artikel
          </Link>
          <Link href="/blog/icm-erklaert" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            Nächster Artikel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
