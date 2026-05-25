"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Hackathons in Bengaluru, overnight builds, and literary society work on campus.">
          Experience
        </SectionTitle>

        <div className="relative space-y-8 md:space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-8 md:block" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative md:pl-20">
              <div className="absolute left-6 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:block" />
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
