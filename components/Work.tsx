"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  category: string;
  categoryType: "immobilie" | "andere";
  image: string;
  alt: string;
  colSpan?: string;
  rowSpan?: string;
}

const projects: Project[] = [
  {
    title: "Einfamilienhaus Flensburg-Mürwik",
    category: "Immobilie",
    categoryType: "immobilie",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    alt: "Einfamilienhaus in Flensburg-Mürwik",
    colSpan: "md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    title: "Penthouse Glücksburg",
    category: "Immobilie",
    categoryType: "immobilie",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    alt: "Modernes Penthouse in Glücksburg mit Fördeblick",
  },
  {
    title: "Ferienhaus an der Förde",
    category: "Immobilie",
    categoryType: "immobilie",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80",
    alt: "Ferienhaus direkt an der Förde im Abendlicht",
  },
  {
    title: "Porsche 911 Carrera",
    category: "Fahrzeug",
    categoryType: "andere",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    alt: "Porsche 911 Carrera",
  },
  {
    title: "Café Hafen Flensburg",
    category: "Unternehmen",
    categoryType: "andere",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Café am Hafen Flensburg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  return (
    <section
      id="projekte"
      aria-labelledby="projekte-heading"
      className="py-24 md:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Vergangene Projekte
          </motion.p>
          <motion.h2
            id="projekte-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-5"
          >
            Objekte, die für sich sprechen.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted text-sm leading-relaxed"
          >
            Schwerpunkt Immobilien — vereinzelt auch Fahrzeuge und lokale Unternehmen.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[320px] md:auto-rows-[280px]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group relative overflow-hidden ${project.colSpan ?? ""} ${project.rowSpan ?? ""}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay – always dark since images are behind */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                aria-hidden="true"
              />

              {/* Category tag */}
              <span
                className={`absolute top-4 left-4 text-xs tracking-widest uppercase backdrop-blur-sm px-2.5 py-1 ${
                  project.categoryType === "immobilie"
                    ? "text-white bg-accent/80"
                    : "text-white/80 bg-black/50"
                }`}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="absolute bottom-5 left-5 right-5 font-serif font-semibold text-white text-lg leading-snug">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-muted text-sm mt-10"
        >
          Weitere Referenzen auf Anfrage.
        </motion.p>
      </div>
    </section>
  );
}
