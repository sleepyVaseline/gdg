"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { slideFromLeft, slideFromRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 transition-shadow md:p-8",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
      )}
      variants={isEven ? slideFromLeft : slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{experience.company}</h3>
          <p className="text-accent">{experience.role}</p>
        </div>
        <div className="flex items-center gap-2">
          {experience.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-2/15 px-2.5 py-1 text-xs font-medium text-accent-2">
              <motion.span
                className="h-2 w-2 rounded-full bg-accent-2"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Live
            </span>
          )}
          <span className="font-mono text-sm text-muted">{experience.dateRange}</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {experience.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted md:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
