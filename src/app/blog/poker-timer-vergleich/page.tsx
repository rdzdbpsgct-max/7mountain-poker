import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Poker Timer App Vergleich 2026 | Die besten kostenlosen Timer | 7Mountain Poker",
  description:
    "Vergleich der beliebtesten Poker-Timer-Apps 2026: Features, Preise, Offline-Fähigkeit und Benutzerfreundlichkeit. Welche App ist die beste?",
  alternates: { canonical: "/blog/poker-timer-vergleich" },
};

export default function PokerTimerVergleichPage() {
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

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Poker Timer Vergleich", href: "/blog/poker-timer-vergleich" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Vergleich</span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">Apps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          Poker Timer App Vergleich 2026
        </h1>
        <p className="mt-4 text-muted">22. März 2026 · 10 Min Lesezeit</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Es gibt dutzende Poker-Timer-Apps — aber welche ist die richtige für dein Home Game?
            Wir vergleichen die beliebtesten Optionen nach Features, Preis, Offline-Fähigkeit und
            Benutzerfreundlichkeit.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Was ein guter Poker Timer können muss</h2>
          <p className="text-muted leading-relaxed">
            Mindestens sollte jede Timer-App diese Basisfunktionen bieten:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Konfigurierbarer Countdown mit Blind-Levels</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Automatische Level-Erhöhung</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Pausen-Management</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Akustische Signale bei Level-Wechsel</li>
            <li className="flex items-start gap-2"><span className="text-emerald">✓</span> Spielerverwaltung</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Die Frage ist: Was bieten die Apps <em>darüber hinaus</em>?
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Der Vergleich</h2>

          <div className="rounded-xl border border-border/50 bg-surface/40 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70 border-b border-border/30">
                  <th className="p-3">Feature</th>
                  <th className="p-3 text-emerald">7Mountain</th>
                  <th className="p-3">Blinds Are Up</th>
                  <th className="p-3">Poker Timer Pro</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Preis</td><td className="p-3 text-emerald">Kostenlos</td><td className="p-3">$4,99</td><td className="p-3">Freemium</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Plattform</td><td className="p-3 text-emerald">Web (PWA)</td><td className="p-3">iOS/Android</td><td className="p-3">iOS/Android</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Offline</td><td className="p-3 text-emerald">✓ Voll</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">TV-Modus</td><td className="p-3 text-emerald">✓ 4 Layouts</td><td className="p-3">✓ Basic</td><td className="p-3">✗</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Fernbedienung</td><td className="p-3 text-emerald">✓ QR-Scan</td><td className="p-3">✗</td><td className="p-3">✗</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Sprachansagen</td><td className="p-3 text-emerald">590 MP3s</td><td className="p-3">Beeps</td><td className="p-3">TTS</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Liga-System</td><td className="p-3 text-emerald">✓ Voll</td><td className="p-3">✗</td><td className="p-3">Einfach</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">ICM-Rechner</td><td className="p-3 text-emerald">✓</td><td className="p-3">✗</td><td className="p-3">✗</td></tr>
                <tr className="border-b border-border/20"><td className="p-3 font-medium text-foreground">Multi-Table</td><td className="p-3 text-emerald">✓</td><td className="p-3">✓</td><td className="p-3">✗</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Anmeldung nötig</td><td className="p-3 text-emerald">Nein</td><td className="p-3">Nein</td><td className="p-3">Ja</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7Mountain Poker: Der Allrounder</h2>
          <p className="text-muted leading-relaxed">
            Als <strong className="text-foreground">Progressive Web App (PWA)</strong> läuft 7Mountain Poker auf jedem Gerät
            mit Browser — kein App-Store-Download nötig. Die App bietet den größten Funktionsumfang
            aller kostenlosen Timer:
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <Link href="/features/tv-modus" className="text-emerald hover:underline">4 TV-Display-Layouts</Link> mit 8 rotierenden Info-Screens</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <Link href="/features/fernbedienung" className="text-emerald hover:underline">Smartphone-Fernbedienung</Link> via QR-Code (WebRTC)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> 590 professionelle ElevenLabs-Sprachansagen (DE + EN)</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <Link href="/features/liga" className="text-emerald hover:underline">Komplettes Liga-System</Link> mit ELO-Rating und Head-to-Head</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <Link href="/features/icm-rechner" className="text-emerald hover:underline">ICM-Rechner</Link> für faire Deal-Verhandlungen</li>
            <li className="flex items-start gap-2"><span className="text-emerald">•</span> <Link href="/features/blindstruktur" className="text-emerald hover:underline">Blindstruktur-Generator</Link> mit 3 Geschwindigkeiten</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Blinds Are Up: Der Klassiker</h2>
          <p className="text-muted leading-relaxed">
            Eine solide native App mit gutem UI-Design. Stärken sind die einfache Bedienung und
            der Multi-Table-Support. Schwächen: Keine Fernbedienung, kein Liga-System, kostenpflichtig ($4,99).
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Poker Timer Pro: Der Nische-Player</h2>
          <p className="text-muted leading-relaxed">
            Fokus auf mobile Nutzung mit einfacher Spielerverwaltung. Die kostenlose Version ist
            stark eingeschränkt, die Pro-Version erfordert ein Abo. Kein TV-Modus, keine Fernbedienung.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Fazit</h2>
          <p className="text-muted leading-relaxed">
            Für Home Games mit Anspruch an <strong className="text-foreground">Liga-Tracking, TV-Display und professionelle
            Sprachansagen</strong> gibt es aktuell keine bessere kostenlose Alternative als 7Mountain Poker.
            Die Tatsache, dass keine Installation oder Anmeldung nötig ist, macht den Einstieg
            besonders einfach.
          </p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Selbst überzeugen</h3>
            <p className="text-muted mb-6">Kostenlos, ohne Anmeldung, sofort einsatzbereit.</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> 7Mountain Poker starten
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link href="/blog/perfekte-blindstruktur" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
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
