"use client";

import { Camera, Video, Plane, Car, Smartphone, Film } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface MainService {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  detail: string;
}

interface ExtraService {
  icon: LucideIcon;
  title: string;
}

const mainServices: MainService[] = [
  {
    icon: Camera,
    number: "01",
    title: "Fotografie",
    description: "Immobilien-Interiors, Architektur und Deckfotos von Booten – Bilder, die überzeugen, bevor der erste Besichtigungstermin stattfindet.",
    detail: "Immobilien · Yachten · Exposé-Fotos",
  },
  {
    icon: Video,
    number: "02",
    title: "Video & Film",
    description: "Atmosphärische Walk-throughs für Immobilien und cineastische Bootsfilme, die das Feeling eines Objekts transportieren.",
    detail: "Walk-through · Bootsfilm · Social-Cut",
  },
  {
    icon: Plane,
    number: "03",
    title: "Drohnenaufnahmen",
    description: "Objekte und Liegeplätze aus der Luft – für Immobilien und Schiffe an der Förde, bei denen die Perspektive den Unterschied macht.",
    detail: "Luftaufnahmen · Hafen · Umgebung",
  },
];

const extraServices: ExtraService[] = [
  { icon: Car, title: "Fahrzeug-Content" },
  { icon: Smartphone, title: "Social Media" },
  { icon: Film, title: "Imagefilme" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="py-20 md:py-28 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Leistungen
          </motion.p>
          <motion.h2
            id="leistungen-heading"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6"
          >
            Spezialist für<br className="hidden md:block" /> Immobilien & Schiffe.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/55 leading-relaxed font-medium text-lg"
          >
            Foto, Video und Drohne – für Immobilien und Boote an der Flensburger Förde, alles aus einer Hand.
          </motion.p>
        </motion.div>

        {/* Main services – Apple-style cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12"
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-border/40 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle number watermark */}
              <span className="absolute top-6 right-8 font-serif text-6xl font-semibold text-foreground/[0.04] select-none pointer-events-none leading-none">
                {service.number}
              </span>

              {/* Icon container */}
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-8">
                <service.icon size={20} className="text-accent" aria-hidden="true" />
              </div>

              <h3 className="font-serif font-semibold text-foreground text-xl md:text-2xl mb-3.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-foreground/55 text-[15px] leading-relaxed mb-7 font-medium">
                {service.description}
              </p>

              {/* Detail tags */}
              <p className="text-accent text-[11px] font-semibold tracking-[0.15em] uppercase">
                {service.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/60 mb-8" />

        {/* Secondary services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/35 text-xs font-semibold tracking-[0.18em] uppercase shrink-0"
          >
            Weitere auf Anfrage
          </motion.p>
          <div className="flex flex-wrap gap-2.5">
            {extraServices.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border border-border/60 text-foreground/55 text-sm font-medium hover:border-accent/40 hover:text-foreground transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              >
                <s.icon size={14} className="text-accent/70" aria-hidden="true" />
                {s.title}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
