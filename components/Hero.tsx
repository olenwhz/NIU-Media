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
      {/* Fallback image */}
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

      {/* Background video */}
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

      {/* Gradient overlays – always dark, hero text must always be white */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"
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
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/85 text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Foto · Video · Drohne · Flensburg
          </motion.p>

          <h1 className="font-serif font-semibold text-white leading-[1.05] tracking-tight text-5xl md:text-7xl lg:text-8xl mb-6">
            Immobilien,
            <br />
            die{" "}
            <span className="text-accent">verkaufen.</span>
          </h1>

          <p className="text-white/65 text-lg md:text-xl mb-3 max-w-md leading-relaxed">
            Hochwertige Immobilienfotografie, -video und Drohnenaufnahmen aus Norddeutschland.
          </p>
          <p className="text-white/40 text-sm mb-10 max-w-md">
            Auf Wunsch auch für Fahrzeuge, Unternehmen und Events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projekte"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-black font-medium text-sm tracking-wide rounded-none transition-colors duration-300 hover:bg-accent-hover"
            >
              Projekte ansehen
            </motion.a>

            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-medium text-sm tracking-wide rounded-none transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
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
        <ChevronDown size={24} className="text-white/50" />
      </motion.div>
    </section>
  );
}
