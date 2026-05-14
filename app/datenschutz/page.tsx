import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von NIU Media.",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple back link header */}
      <div className="border-b border-white/5 px-6 md:px-8 py-5">
        <Link
          href="/"
          className="text-muted text-sm hover:text-foreground transition-colors duration-300"
        >
          ← Zurück zur Startseite
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className="font-serif font-semibold text-foreground text-4xl md:text-5xl tracking-tight mb-12">
          Datenschutzerklärung
        </h1>

        {/* TODO: Ole, bitte echte Angaben einsetzen */}
        <section className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              {/* TODO: Angaben wie im Impressum einsetzen */}
              Ole Nieuwenhuizen · NIU Media
              <br />
              Musterstraße 1 · 24937 Flensburg
              <br />
              E-Mail:{" "}
              <a
                href="mailto:hallo@niumedia.de"
                className="text-foreground hover:text-accent transition-colors"
              >
                hallo@niumedia.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
              USA gehostet. Vercel ist Empfänger Ihrer personenbezogenen Daten. Näheres entnehmen
              Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p className="mt-3">
              Vercel verarbeitet Ihre Daten in den USA. Für die Übermittlung in Drittländer
              stützt sich Vercel auf die Standardvertragsklauseln der EU-Kommission.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-foreground text-sm font-medium mb-2">Server-Log-Dateien</h3>
            <p>
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen
              in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies
              sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p className="mt-3">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage
              für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-foreground text-sm font-medium mt-6 mb-2">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail, WhatsApp oder über soziale Netzwerke kontaktieren, werden
              Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung / vorvertragliche Maßnahmen).
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              5. Cookies und Tracking
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies und keine Analyse-Dienste von
              Drittanbietern (kein Google Analytics, kein Meta Pixel o. ä.). Es werden
              ausschließlich technisch notwendige Cookies gesetzt, soweit dies für den Betrieb
              der Website erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              6. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-4">
              Wenden Sie sich dazu an:{" "}
              <a
                href="mailto:hallo@niumedia.de"
                className="text-foreground hover:text-accent transition-colors"
              >
                hallo@niumedia.de {/* TODO: echte E-Mail-Adresse einsetzen */}
              </a>
            </p>
            <p className="mt-3">
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-
              Aufsichtsbehörde zu. In Schleswig-Holstein ist dies das Unabhängige
              Landeszentrum für Datenschutz (ULD), Holstenstraße 98, 24103 Kiel.
            </p>
          </div>

          <p className="text-sm text-muted/60 pt-4 border-t border-white/5">
            Stand: Mai 2026 {/* TODO: Datum bei Änderungen aktualisieren */}
          </p>
        </section>
      </main>
    </div>
  );
}
