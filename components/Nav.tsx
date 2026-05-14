"use client";

import { useState, useEffect } from "react";
import { X, Menu, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über", href: "#ueber" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "dark" | "light" | null;
      if (saved) setTheme(saved);
      else setTheme("light");
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const closeMenu = () => setMenuOpen(false);

  const scrolledClass =
    theme === "dark"
      ? "backdrop-blur-md bg-black/60 border-b border-white/5"
      : "backdrop-blur-md bg-white/90 border-b border-border shadow-sm";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? scrolledClass : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="NIU Media – Zurück nach oben"
          >
            NIU MEDIA
          </a>

          {/* Desktop nav */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 tracking-wide ${scrolled ? "text-muted hover:text-foreground" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
              className={`transition-colors duration-300 p-1 ${scrolled ? "text-muted hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
              className={`transition-colors duration-300 p-1 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`transition-colors duration-300 p-1 ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-serif text-sm font-semibold tracking-widest uppercase text-foreground">
                NIU MEDIA
              </span>
              <button
                onClick={closeMenu}
                className="text-foreground hover:text-accent transition-colors p-1"
                aria-label="Menü schließen"
              >
                <X size={22} />
              </button>
            </div>

            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col items-center justify-center flex-1 gap-10"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-serif text-3xl font-semibold text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
