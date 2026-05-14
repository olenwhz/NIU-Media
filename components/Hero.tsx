"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Fallback image – shown when video hasn't loaded yet */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Drohnenaufnahme Ostseeküste"
          fill
          sizes="100vw"
          className="object-cover"
          preload
          fetchPriority="high"
        />
      </div>

      {/* Background video – place your file at public/videos/hero.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/0514.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <h1 className="font-serif font-semibold text-foreground leading-[1.05] tracking-tight text-5xl md:text-7xl lg:text-8xl mb-6">
            Immobilien.{" "}
            <br className="hidden sm:block" />
            Marken.{" "}
            <br className="hidden sm:block" />
            Fahrzeuge.{" "}
            <br className="sm:hidden" />
            <span className="text-accent">Professionell</span> präsentiert.
          </h1>

          <p className="text-muted text-lg md:text-xl mb-10 max-w-md leading-relaxed">
            Hochwertige visuelle Vermarktung aus Flensburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#arbeiten"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-background font-medium text-sm tracking-wide rounded-none transition-colors duration-300 hover:bg-accent-hover"
            >
              Arbeiten ansehen
            </motion.a>

            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-foreground font-medium text-sm tracking-wide rounded-none transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Kontakt aufnehmen
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-blink"
        aria-hidden="true"
      >
        <ChevronDown size={24} className="text-muted" />
      </motion.div>
    </section>
  );
}
