"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  category: string;
  image: string;
  alt: string;
  colSpan?: string;
  rowSpan?: string;
}

// TODO: Ole, ersetze diese Unsplash-Platzhalter durch deine eigenen Portfolio-Bilder (public/images/portfolio/)
const projects: Project[] = [
  {
    title: "Ferienhaus an der Förde",
    category: "Tourismus",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
    alt: "Ferienhaus direkt an der Förde im Abendlicht",
    colSpan: "md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    title: "Villa Glücksburg",
    category: "Immobilie",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    alt: "Moderne Villa in Glücksburg",
  },
  {
    title: "Hotel Nordmeer",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Elegantes Restaurant-Interior Hotel Nordmeer",
  },
  {
    title: "Porsche 911 Carrera",
    category: "Fahrzeug",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    alt: "Porsche 911 Carrera im Studio-Setting",
  },
  {
    title: "Bäckerei Hansen",
    category: "Lokales Unternehmen",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80",
    alt: "Handwerk und Wärme – Bäckerei Hansen Flensburg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  return (
    <section
      id="arbeiten"
      aria-labelledby="arbeiten-heading"
      className="py-24 md:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Ausgewählte Arbeiten
          </motion.p>
          <motion.h2
            id="arbeiten-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight"
          >
            Atmosphäre, die bleibt.
          </motion.h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[320px] md:auto-rows-[280px]"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href="#"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group relative overflow-hidden bg-background-alt ${project.colSpan ?? ""} ${project.rowSpan ?? ""}`}
              aria-label={`${project.title} ansehen`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Category tag */}
              <span className="absolute top-4 left-4 text-xs text-foreground/80 tracking-widest uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="absolute bottom-5 left-5 right-5 font-serif font-semibold text-foreground text-lg leading-snug">
                {project.title}
              </h3>
            </motion.a>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-muted text-sm italic mt-10"
        >
          Mehr Arbeiten auf Anfrage.
        </motion.p>
      </div>
    </section>
  );
}
