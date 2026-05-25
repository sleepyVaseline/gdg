"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, defaultViewport } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="A bit about who I am and what I do.">About Me</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted">{siteConfig.bio}</p>
            <div className="space-y-3 rounded-xl border border-border bg-card p-5">
              {siteConfig.funFacts.map((fact) => (
                <div key={fact.label}>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {fact.label}
                  </span>
                  <p className="mt-1 text-sm">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: 0.15 }}
            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src="/avatar.svg"
              alt={siteConfig.name}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
