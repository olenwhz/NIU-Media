"use client";

import { Camera, Video, Plane, Car, Smartphone, Film } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface MainService {
  icon: LucideIcon;
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
    title: "Immobilienfotografie",
    description: "Innen- und Außenaufnahmen, die Käufer überzeugen – bevor der erste Besichtigungstermin stattfindet.",
    detail: "Architektur · Interiors · Exposé-Fotos",
  },
  {
    icon: Video,
    title: "Immobilienvideo",
    description: "Atmosphärische Walk-throughs und Exposé-Filme, die das Gefühl eines Objekts transportieren.",
    detail: "Walk-through · Kurzfilm · Social-Cut",
  },
  {
    icon: Plane,
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Leistungen
          </motion.p>
          <motion.h2
            id="leistungen-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-5"
          >
            Spezialist für Immobilien.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed"
          >
            Foto, Video und Drohne – alles aus einer Hand, damit dein Objekt online und offline überzeugt.
          </motion.p>
        </motion.div>

        {/* Main services – Immobilien */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16"
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-background p-8 md:p-10 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <service.icon
                size={24}
                className="text-accent mb-6"
                aria-hidden="true"
              />
              <h3 className="font-serif font-semibold text-foreground text-xl mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <p className="text-accent/70 text-xs tracking-wider uppercase">
                {service.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-muted text-xs tracking-widest uppercase mb-6"
          >
            Weitere Leistungen auf Anfrage
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {extraServices.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 px-5 py-3 border border-border text-muted text-sm hover:border-accent/30 hover:text-foreground transition-colors duration-300"
              >
                <s.icon size={15} className="text-accent/60" aria-hidden="true" />
                {s.title}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
