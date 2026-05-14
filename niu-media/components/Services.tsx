"use client";

import { Home, Plane, Smartphone, Car, Film, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Immobilienfoto & -video",
    description: "Objekte, die verkaufen, bevor der Termin steht.",
  },
  {
    icon: Plane,
    title: "Drohnenaufnahmen",
    description: "Perspektiven, die am Boden niemand sieht.",
  },
  {
    icon: Smartphone,
    title: "Social Media Content",
    description: "Reels, Stories und Posts mit Wiedererkennungswert.",
  },
  {
    icon: Car,
    title: "Fahrzeug-Content",
    description: "Autos, Boote und Maschinen cinematic in Szene gesetzt.",
  },
  {
    icon: Film,
    title: "Reels & Kurzvideos",
    description: "Schnell, modern, atmosphärisch.",
  },
  {
    icon: Sparkles,
    title: "Imagefilme",
    description: "Marken-Geschichten in 60 bis 120 Sekunden.",
  },
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
          className="mb-16 md:mb-20"
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
            className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight"
          >
            Was ich für dich produziere.
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-background p-8 border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <service.icon
                size={22}
                className="text-accent mb-5"
                aria-hidden="true"
              />
              <h3 className="font-serif font-semibold text-foreground text-lg mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
