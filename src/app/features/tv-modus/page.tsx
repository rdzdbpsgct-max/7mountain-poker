import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV-Modus für Poker Turniere | 7Mountain Poker",
  description:
    "Zeige Blindstruktur, Timer und Spielerstände auf TV oder Beamer. 4 Layouts, 8 rotierende Screens, Cross-Device-Display. Kostenlos.",
  alternates: { canonical: "/features/tv-modus" },
};

export default function TVModusPage() {
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
          TV-Modus für Poker Turniere
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          Verwandle jeden Fernseher oder Beamer in ein professionelles Tournament Display.
          Zeige Blindstruktur, Timer, Spielerstände und mehr auf dem großen Bildschirm.
        </p>

        {/* Screenshot */}
        <div className="mt-10 rounded-2xl border border-border/50 overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/tv-mode.jpg"
            alt="7Mountain Poker TV-Modus mit Timer, Blindstruktur und Turnier-Statistiken"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">4 Display-Layouts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Standard (55/45)", desc: "Timer oben, rotierende Info-Screens unten. Der Allrounder für die meisten Setups." },
              { name: "Kompakt (40/60)", desc: "Mehr Platz für Infos. Ideal wenn Spieler direkt vor dem Screen sitzen." },
              { name: "Timer-Only (100%)", desc: "Nur der Timer, bildschirmfüllend. Perfekt für kleine Räume oder als Zweitdisplay." },
              { name: "Ultra Large (70/30)", desc: "Übergroßer Timer für Sichtbarkeit auf 5+ Meter Distanz." },
            ].map((layout) => (
              <div key={layout.name} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{layout.name}</h3>
                <p className="text-sm text-muted">{layout.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">8 rotierende Info-Screens</h2>
          <p className="text-muted mb-6">
            Alle 15 Sekunden wechselt der untere Bereich automatisch zwischen diesen Screens.
            Manuelle Navigation per Pfeiltasten möglich.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Timer & Blinds", "Spieler-Übersicht", "Turnier-Statistiken", "Auszahlungsstruktur", "Blindstruktur-Tabelle", "Chip-Werte", "Sitzplan (SVG)", "Liga-Tabelle"].map((screen) => (
              <span key={screen} className="rounded-full bg-emerald/10 border border-emerald/20 px-4 py-1.5 text-sm text-emerald">
                {screen}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Verbindungsmöglichkeiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Cross-Device Display", desc: "Öffne die Display-URL auf einem anderen Gerät (Tablet, Laptop, Smart-TV). Verbindet sich automatisch via PeerJS." },
              { title: "AirPlay & Chromecast", desc: "Streame kabellos auf Apple TV oder Chromecast. Funktioniert direkt aus dem Browser." },
              { title: "HDMI-Kabel", desc: "Klassische Kabelverbindung für maximale Zuverlässigkeit. Funktioniert mit jedem TV." },
            ].map((method) => (
              <div key={method.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted">{method.desc}</p>
              </div>
            ))}
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
            <span>▶</span> TV-Modus ausprobieren
          </a>
          <p className="mt-3 text-sm text-muted">Kostenlos, ohne Anmeldung. Tastenkürzel: T</p>
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
