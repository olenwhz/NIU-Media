export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © 2026 NIU Media · Ole Nieuwenhuizen · Flensburg
        </p>
        <nav aria-label="Rechtliche Links" className="flex items-center gap-6">
          <a
            href="/impressum"
            className="text-muted text-sm hover:text-foreground transition-colors duration-300"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-muted text-sm hover:text-foreground transition-colors duration-300"
          >
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
