"use client";

import { Mail, MessageCircle, AtSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ContactBlock {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

// TODO: Ole, bitte echte Kontaktdaten einsetzen
const contacts: ContactBlock[] = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "hallo@niumedia.de", // TODO: echte E-Mail-Adresse einsetzen
    href: "mailto:hallo@niumedia.de",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+49 (0) XXX XXX XXXX", // TODO: echte WhatsApp-Nummer einsetzen
    href: "https://wa.me/49XXXXXXXXXX",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@niumedia", // TODO: echten Instagram-Handle einsetzen
    href: "https://instagram.com/niumedia",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
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
            Kontakt
          </motion.p>
          <motion.h2
            id="kontakt-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-5"
          >
            Lass uns über dein Projekt sprechen.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted"
          >
            Antwort meist innerhalb von 24 Stunden.
          </motion.p>
        </motion.div>

        {/* Contact blocks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group flex items-center justify-between bg-background border border-white/5 hover:border-white/10 p-8 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <contact.icon
                  size={20}
                  className="text-accent mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs text-muted tracking-widest uppercase mb-1.5">
                    {contact.label}
                  </p>
                  <p className="text-foreground font-medium">{contact.value}</p>
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
