import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poker Timer per Handy steuern | Smartphone-Fernbedienung | 7Mountain Poker",
  description:
    "Steuere dein Poker-Turnier vom Smartphone. QR-Code scannen, verbinden, Timer steuern. Spieler eliminieren, Rebuys vergeben — alles per Handy.",
  alternates: { canonical: "/features/fernbedienung" },
};

export default function FernbedienungPage() {
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

      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">Feature</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          Smartphone-Fernbedienung
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          QR-Code scannen und dein Handy wird zur vollwertigen Turnier-Fernbedienung.
          Keine App-Installation nötig — funktioniert direkt im Browser.
        </p>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">So funktioniert&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "QR-Code anzeigen", desc: "Öffne den Share Hub (📡) im Spielmodus. Ein QR-Code mit eindeutiger Raum-ID wird generiert." },
              { step: "2", title: "Mit Handy scannen", desc: "Scanne den QR-Code mit der Smartphone-Kamera. Die App öffnet sich automatisch und verbindet sich." },
              { step: "3", title: "Turnier steuern", desc: "Große Touch-Buttons für Play/Pause, Levels, Dealer, Sound und Spieler-Management." },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-border/50 bg-surface/40 p-6">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2 mt-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Controls */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Steuerungsmöglichkeiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Timer-Steuerung", desc: "Play/Pause, nächstes/vorheriges Level, Level zurücksetzen. Alles mit großen Touch-Targets (min. 48px)." },
              { title: "Spieler-Management", desc: "Spieler eliminieren, Rebuys/Add-Ons vergeben. Bei Bounty-Turnieren: Eliminator per Touch auswählen." },
              { title: "Turnier-Infos", desc: "Live-Prizepool, Durchschnitts-Stack in BB, Spielzeit, nächstes Level, Break-Anzeige und ITM-Badge." },
              { title: "Sound & Dealer", desc: "Sound an/aus, Dealer weiterrücken, Call the Clock starten. Alles vom Sofa aus." },
            ].map((ctrl) => (
              <div key={ctrl.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{ctrl.title}</h3>
                <p className="text-sm text-muted">{ctrl.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technische Details</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">WebRTC via PeerJS</strong> — Peer-to-Peer-Verbindung ohne eigenen Server. Signaling über PeerJS Cloud.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Auto-Reconnect</strong> — Verbindung überlebt Browser-Refresh. Exponentieller Backoff (3 Versuche).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Multi-Controller</strong> — Bis zu 4 Smartphones gleichzeitig als Fernbedienung nutzbar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span><strong className="text-foreground">Wake Lock</strong> — Display bleibt an. Touch-optimiert mit Safe-Area-Insets für alle Smartphone-Modelle.</span>
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
            <span>▶</span> Fernbedienung ausprobieren
          </a>
          <p className="mt-3 text-sm text-muted">Kostenlos, ohne Anmeldung. 📡 Share Hub im Spielmodus</p>
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
