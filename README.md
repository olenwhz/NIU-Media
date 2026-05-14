# NIU Media

Moderne One-Page-Website für NIU Media — Visuelle Vermarktung aus Flensburg. Gebaut mit Next.js 16, Tailwind CSS v4 und Framer Motion.

## Tech-Stack

- **Framework**: Next.js 16 (App Router)
- **Sprache**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Animationen**: Framer Motion
- **Icons**: lucide-react
- **Fonts**: Inter + Fraunces (via `next/font/google`)
- **Deployment**: Vercel-ready

## Lokaler Start

```bash
npm install
npm run dev
```

Die Seite ist dann unter `http://localhost:3000` erreichbar.

## Inhalte austauschen

Alle Platzhalter sind im Code mit `// TODO:` markiert. Die wichtigsten:

### Hero-Video
Lege deine Videodatei unter `public/videos/hero.mp4` ab.  
Öffne danach `components/Hero.tsx` und entferne das `style={{ display: "none" }}` vom `<video>` Element.

### Kontaktdaten
In `components/Contact.tsx` die echten Werte einsetzen:
- E-Mail-Adresse (aktuell `hallo@niumedia.de`)
- WhatsApp-Nummer (aktuell `+49 (0) XXX XXX XXXX`)
- Instagram-Handle (aktuell `@niumedia`)

### Portrait
Eigenes Foto unter `public/images/portrait.jpg` ablegen und den Unsplash-Link in `components/About.tsx` ersetzen.

### Portfolio-Bilder
Eigene Bilder unter `public/images/portfolio/` ablegen und die Unsplash-Links in `components/Work.tsx` ersetzen.

### Impressum & Datenschutz
Alle Platzhalter in `app/impressum/page.tsx` und `app/datenschutz/page.tsx` mit echten Angaben befüllen.

### Domain / Metadaten
In `app/layout.tsx` und `app/sitemap.ts` die Domain `niumedia.de` durch die tatsächliche Domain ersetzen.

## Deployment auf Vercel

1. Repository auf GitHub pushen (siehe Befehle unten)
2. Auf [vercel.com](https://vercel.com) einloggen → **Add New Project**
3. GitHub-Repository auswählen
4. Framework: **Next.js** (wird automatisch erkannt)
5. Alle anderen Einstellungen können auf Default bleiben
6. **Deploy** klicken

### Domain verbinden
Nach dem ersten Deployment: Vercel Dashboard → Projekt → **Settings → Domains** → eigene Domain eintragen.

## GitHub Push (Ersteinrichtung)

```bash
git remote add origin https://github.com/DEIN-USERNAME/niu-media.git
git branch -M main
git push -u origin main
```

> Ersetze `DEIN-USERNAME` durch deinen GitHub-Benutzernamen.
