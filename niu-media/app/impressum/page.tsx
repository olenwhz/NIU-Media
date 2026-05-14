import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von NIU Media.",
  robots: { index: false },
};

export default function Impressum() {
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
          Impressum
        </h1>

        {/* TODO: Ole, bitte echte Angaben einsetzen */}
        <section className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {/* TODO: Vor- und Nachname einsetzen */}
              Ole Nieuwenhuizen
              <br />
              NIU Media
              <br />
              {/* TODO: Straße und Hausnummer einsetzen */}
              Musterstraße 1
              <br />
              {/* TODO: PLZ und Ort einsetzen */}
              24937 Flensburg
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Kontakt
            </h2>
            <p>
              {/* TODO: Telefonnummer einsetzen (oder Zeile entfernen) */}
              Telefon: +49 (0) XXX XXX XXXX
              <br />
              {/* TODO: echte E-Mail-Adresse einsetzen */}
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
              Umsatzsteuer-ID
            </h2>
            <p>
              {/* TODO: USt-IdNr. einsetzen, falls vorhanden – sonst diesen Abschnitt entfernen */}
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE XXX XXX XXX
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              {/* TODO: Berufsbezeichnung anpassen */}
              Berufsbezeichnung: Fotograf / Videograf
              <br />
              Zuständige Kammer: {/* TODO: ggf. Kammer einsetzen oder Zeile entfernen */} —
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-medium text-sm tracking-widest uppercase mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
