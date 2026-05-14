"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="ueber"
      aria-labelledby="ueber-heading"
      className="py-24 md:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 overflow-hidden"
          >
            <Image
              src="/images/IMG_0009.jpeg"
              alt="Ole Nieuwenhuizen, Inhaber NIU Media"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
            >
              Über NIU Media
            </motion.p>

            <motion.h2
              id="ueber-heading"
              variants={fadeUp}
              className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-8"
            >
              Eine Person. Ein Auge für Atmosphäre.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted leading-relaxed mb-5">
              Hinter NIU Media steht Ole Nieuwenhuizen. Ich helfe Unternehmen, Immobilien und
              Marken in Norddeutschland dabei, hochwertig wahrgenommen zu werden — durch Foto,
              Video und Drohnenaufnahmen, die mehr zeigen als nur Produkte.
            </motion.p>

            <motion.p variants={fadeUp} className="text-muted leading-relaxed">
              Persönlich, regional, ohne Agentur-Apparat. Direkt aus Flensburg an die Ostsee,
              ins Binnenland und überall dahin, wo gute Bilder gebraucht werden.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
