import Link from "next/link";

export const metadata = {
  title: "Datenschutz | 7Mountain Poker – DSGVO-konform",
  description: "Datenschutzerklärung für 7Mountain Poker. Keine Cookies, keine Tracking-Tools, alle Daten bleiben lokal im Browser. DSGVO-konform.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
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
            <Link href="/impressum" className="text-muted hover:text-foreground transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-emerald font-semibold">Datenschutz</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">Datenschutzerklärung</h1>
        <p className="text-muted mb-10">Stand: März 2026 · Gültig für 7mountain-poker.vercel.app &amp; 7mountainpoker.vercel.app</p>

        <Section title="1. Überblick">
          <p>
            Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung
            informiert Sie darüber, welche Daten beim Besuch von
            <em> 7Mountain Poker</em> erhoben werden, zu welchem Zweck und auf welcher
            Rechtsgrundlage dies geschieht.
          </p>
          <InfoBox>
            <p className="font-semibold text-foreground mb-1">Kurzfassung:</p>
            <p>
              Die Anwendung erfordert <strong className="text-emerald">keine Registrierung</strong>,
              speichert <strong className="text-emerald">keine personenbezogenen Daten</strong> auf einem Server und verwendet
              <strong className="text-emerald"> keine Tracking- oder Analyse-Tools</strong>. Turnierdaten werden
              ausschließlich lokal in Ihrem Browser gespeichert.
            </p>
          </InfoBox>
        </Section>

        <Section title="2. Verantwortlicher">
          <address className="not-italic rounded-lg border border-border/50 border-l-4 border-l-emerald bg-surface/40 px-5 py-4 leading-8 text-foreground/80">
            Michael Prill<br />
            Im Schönblick 31a<br />
            53604 Bad Honnef<br />
            E-Mail: <a href="mailto:sevenmountainpoker@icloud.com" className="text-emerald hover:underline">sevenmountainpoker@icloud.com</a>
          </address>
        </Section>

        <Section title="3. Welche Daten werden erhoben?">
          <h3 className="text-base font-semibold text-foreground/90 mt-4 mb-2">3.1 Server-Logfiles (Hosting durch Vercel)</h3>
          <p>
            Diese Website wird über die Hosting-Plattform <strong>Vercel</strong>{" "}
            (Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA)
            bereitgestellt. Bei jedem Seitenaufruf protokolliert Vercels Infrastruktur
            automatisch technische Zugriffsdaten in sogenannten Server-Logfiles:
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {[
              "IP-Adresse (anonymisiert)",
              "Datum und Uhrzeit des Abrufs",
              "Aufgerufene URL",
              "Browsertyp und -version",
              "Betriebssystem",
              "HTTP-Statuscode",
              "Übertragene Datenmenge",
            ].map((tag) => (
              <span key={tag} className="inline-block rounded-md bg-surface border border-border/50 px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
          <p>
            Diese Daten sind technisch notwendig, um die Website ausliefern und die
            Stabilität des Betriebs sicherstellen zu können. Sie werden nicht mit anderen
            Datenquellen zusammengeführt.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einem störungsfreien und sicheren Betrieb der Website).
          </p>
          <p className="mt-2">
            <strong>Speicherdauer:</strong> Logfiles werden nach spätestens 30 Tagen
            automatisch gelöscht. Maßgeblich ist die Datenschutzrichtlinie von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-emerald hover:underline">
              vercel.com/legal/privacy-policy
            </a>.
          </p>
          <p className="mt-2">
            <strong>Drittlandtransfer (USA):</strong> Vercel Inc. hat seinen Sitz in den USA.
            Die Datenübertragung erfolgt auf Basis von EU-Standardvertragsklauseln (SCC)
            gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen:{" "}
            <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener" className="text-emerald hover:underline">
              Vercel Data Processing Agreement
            </a>.
          </p>

          <h3 className="text-base font-semibold text-foreground/90 mt-6 mb-2">3.2 Lokaler Browser-Speicher (localStorage / IndexedDB)</h3>
          <p>
            Turnierkonfigurationen, Spielernamen, Blindstrukturen, Liga-Daten und
            Statistiken werden ausschließlich <strong>lokal in Ihrem Browser</strong>{" "}
            gespeichert (localStorage / IndexedDB). Diese Daten verlassen Ihr Gerät
            nicht und werden nicht an Server übertragen.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an der Bereitstellung der Anwendungsfunktionalität ohne
            serverseitige Datenhaltung).
          </p>
          <p className="mt-2">
            <strong>Speicherdauer:</strong> Die Daten verbleiben solange im Browser,
            bis Sie diese manuell löschen (Browser-Einstellungen → Websitedaten löschen).
          </p>

          <h3 className="text-base font-semibold text-foreground/90 mt-6 mb-2">3.3 Keine Cookies</h3>
          <p>
            Die Anwendung setzt <strong>keine Cookies</strong> zu Tracking- oder
            Analysezwecken. Technisch notwendige, kurzlebige Session-Informationen
            werden ausschließlich im Arbeitsspeicher des Browsers gehalten.
          </p>

          <h3 className="text-base font-semibold text-foreground/90 mt-6 mb-2">3.4 Keine Nutzungsanalyse</h3>
          <p>
            Es werden keine Analyse- oder Tracking-Dienste (z. B. Google Analytics,
            Matomo, Hotjar o. Ä.) eingesetzt. Es findet keine Auswertung des
            Nutzungsverhaltens statt.
          </p>
        </Section>

        <Section title="4. Kontaktaufnahme per E-Mail">
          <p>
            Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (E-Mail-Adresse,
            Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
            Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an der Beantwortung von Anfragen). Soweit eine Anfrage auf den
            Abschluss eines Vertrages gerichtet ist, gilt zusätzlich Art. 6 Abs. 1 lit. b
            DSGVO.
          </p>
          <p className="mt-2">
            <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald die Anfrage
            abschließend bearbeitet ist und keine gesetzliche Aufbewahrungspflicht
            entgegensteht (in der Regel nach spätestens 3 Jahren).
          </p>
        </Section>

        <Section title="5. Ihre Rechte (DSGVO)">
          <p className="mb-3">Sie haben gegenüber mir folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <InfoBox>
            <p>
              <strong>Auskunft</strong> (Art. 15) ·{" "}
              <strong>Berichtigung</strong> (Art. 16) ·{" "}
              <strong>Löschung</strong> (Art. 17) ·{" "}
              <strong>Einschränkung der Verarbeitung</strong> (Art. 18) ·{" "}
              <strong>Datenübertragbarkeit</strong> (Art. 20) ·{" "}
              <strong>Widerspruch</strong> (Art. 21)
            </p>
          </InfoBox>
          <p className="mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:sevenmountainpoker@icloud.com" className="text-emerald hover:underline">sevenmountainpoker@icloud.com</a>
          </p>
          <p className="mt-2">
            Ferner haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren. Die zuständige Aufsichtsbehörde für NRW ist:<br />
            <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit NRW</strong><br />
            Postfach 20 04 44, 40102 Düsseldorf ·{" "}
            <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener" className="text-emerald hover:underline">www.ldi.nrw.de</a>
          </p>
        </Section>

        <Section title="6. Datensicherheit">
          <p>
            Die Website wird über HTTPS (TLS/SSL) ausgeliefert. Die Datenübertragung
            zwischen Ihrem Browser und dem Hosting-Server ist damit verschlüsselt.
            Darüber hinaus werden keine Formulardaten oder personenbezogene Inhalte
            serverseitig verarbeitet oder gespeichert.
          </p>
        </Section>

        <Section title="7. Aktualität und Änderungen">
          <p>
            Diese Datenschutzerklärung ist aktuell gültig (Stand: März 2026). Sie kann
            angepasst werden, wenn sich die rechtlichen Rahmenbedingungen oder die
            technische Umsetzung der Website ändern. Die jeweils aktuelle Fassung
            finden Sie stets auf dieser Seite.
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
    <div className="rounded-lg border border-border/50 bg-surface/40 px-5 py-4 my-3">
      {children}
    </div>
  );
}
