"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/motion";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  id?: string;
}

/** Section heading with animated underline reveal on scroll */
export function SectionTitle({ children, subtitle, id }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      className="mb-12 md:mb-16"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
      <motion.div
        className="mt-3 h-1 rounded-full bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      {subtitle && (
        <p className="mt-4 max-w-xl text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
