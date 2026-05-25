"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function TechStack() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Tools and technologies I work with daily.">
          Tech Stack
        </SectionTitle>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <SkillIcon name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
