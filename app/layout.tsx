import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niumedia.de"), // TODO: Ole, bitte echte Domain einsetzen
  title: {
    template: "%s · NIU Media",
    default: "NIU Media — Visuelle Vermarktung aus Flensburg",
  },
  description:
    "Hochwertige Foto-, Video- und Drohnenaufnahmen für Immobilien, Tourismus, Fahrzeuge und lokale Unternehmen in Norddeutschland. Direkt aus Flensburg.",
  keywords: [
    "Immobilienfotografie Flensburg",
    "Drohnenaufnahmen Schleswig-Holstein",
    "Videoproduktion Flensburg",
    "Social Media Content Norddeutschland",
    "NIU Media",
  ],
  authors: [{ name: "Ole Nieuwenhuizen" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://niumedia.de",
    siteName: "NIU Media",
    title: "NIU Media — Visuelle Vermarktung aus Flensburg",
    description:
      "Hochwertige Foto-, Video- und Drohnenaufnahmen für Immobilien, Tourismus, Fahrzeuge und lokale Unternehmen in Norddeutschland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIU Media — Visuelle Vermarktung aus Flensburg",
    description:
      "Hochwertige Foto-, Video- und Drohnenaufnahmen für Immobilien, Tourismus, Fahrzeuge und lokale Unternehmen in Norddeutschland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
