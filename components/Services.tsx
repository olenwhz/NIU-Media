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
    title: "Immobilienfotografie",
    description: "Innen- und Außenaufnahmen, die Käufer überzeugen – bevor der erste Besichtigungstermin stattfindet.",
    detail: "Architektur · Interiors · Exposé-Fotos",
  },
  {
    icon: Video,
    number: "02",
    title: "Immobilienvideo",
    description: "Atmosphärische Walk-throughs und Exposé-Filme, die das Gefühl eines Objekts transportieren.",
    detail: "Walk-through · Kurzfilm · Social-Cut",
  },
  {
    icon: Plane,
    number: "03",
    title: "Drohnenaufnahmen",
    description: "Lage, Grundstück und Umgebung aus der Luft – für Objekte, bei denen die Perspektive den Unterschied macht.",
    detail: "Luftaufnahmen · Lage · Umgebung",
  },
];

const extraServices: ExtraService[] = [
  { icon: Car, title: "Fahrzeug-Content" },
  { icon: Smartphone, title: "Social Media" },
  { icon: Film, title: "Imagefilme" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="py-32 md:py-44 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Leistungen
          </motion.p>
          <motion.h2
            id="leistungen-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6"
          >
            Spezialist für<br className="hidden md:block" /> Immobilien.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-foreground/55 leading-relaxed font-medium text-lg"
          >
            Foto, Video und Drohne – alles aus einer Hand, damit dein Objekt online und offline überzeugt.
          </motion.p>
        </motion.div>

        {/* Main services – Apple-style cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-20"
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
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
        <div className="border-t border-border/60 mb-10" />

        {/* Secondary services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-foreground/35 text-xs font-semibold tracking-[0.18em] uppercase shrink-0"
          >
            Weitere auf Anfrage
          </motion.p>
          <div className="flex flex-wrap gap-2.5">
            {extraServices.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
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
