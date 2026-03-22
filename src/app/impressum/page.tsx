import Link from "next/link";

export const metadata = {
  title: "Impressum | 7Mountain Poker Tournament Timer",
  description: "Impressum und Angaben gemäß § 5 DDG für 7Mountain Poker Tournament Timer.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-foreground hover:text-emerald transition-colors">
            <span className="text-foreground">♠</span>{" "}
            <span className="text-foreground">♥</span>{" "}
            <span className="font-black">7Mountain Poker</span>{" "}
            <span className="text-foreground">♦</span>{" "}
            <span className="text-foreground">♣</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/impressum" className="text-emerald font-semibold">Impressum</Link>
            <Link href="/datenschutz" className="text-muted hover:text-foreground transition-colors">Datenschutz</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">Impressum</h1>
        <p className="text-muted mb-10">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>

        <Section title="Verantwortlicher">
          <address className="not-italic rounded-lg border border-border/50 border-l-4 border-l-emerald bg-surface/40 px-5 py-4 leading-8 text-foreground/80">
            Michael Prill<br />
            Im Schönblick 31a<br />
            53604 Bad Honnef<br />
            Deutschland
          </address>
        </Section>

        <Section title="Kontakt">
          <InfoBox>
            <p>E-Mail: <a href="mailto:sevenmountainpoker@icloud.com" className="text-emerald hover:underline">sevenmountainpoker@icloud.com</a></p>
          </InfoBox>
        </Section>

        <Section title="Redaktionell verantwortlich">
          <p>Michael Prill (Anschrift wie oben)</p>
        </Section>

        <Section title="Hinweis zur Website">
          <p>
            Diese Website stellt eine kostenlose, nicht-kommerzielle Webanwendung
            (<em>7Mountain Poker – Tournament Timer</em>) zur privaten Nutzung bereit.
            Sie richtet sich an Privatpersonen, die Pokerturniere im privaten Rahmen
            organisieren möchten. Es werden keine entgeltlichen Leistungen erbracht und
            keine Verträge über die Website geschlossen.
          </p>
          <p className="mt-3">
            Webapp: <a href="https://7mountainpoker.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald hover:underline">7mountainpoker.vercel.app</a><br />
            Website: <a href="https://7mountain-poker.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald hover:underline">7mountain-poker.vercel.app</a>
          </p>
        </Section>

        <Section title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" className="text-emerald hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>.
          </p>
          <p className="mt-2">
            Meine E-Mail-Adresse finden Sie oben im Impressum. Ich bin nicht bereit und
            nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Die Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte
            ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der
            Verlinkung wurden die verlinkten Seiten auf mögliche Rechtsverstöße geprüft.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>
        </Section>

        {/* Back link */}
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-emerald mb-3 pb-2 border-b border-border/40">{title}</h2>
      <div className="text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border/50 bg-surface/40 px-5 py-4">
      {children}
    </div>
  );
}
