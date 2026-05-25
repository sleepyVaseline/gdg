"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, Sparkles, Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { imageNeedsUnoptimized } from "@/lib/images";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-border bg-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseLeave={() => setSummaryOpen(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized={imageNeedsUnoptimized(project.image)}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Desktop: hover summary panel */}
        <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          <ProjectSummaryPanel project={project} />
        </div>

        {/* Mobile: tap to open summary */}
        <button
          type="button"
          className="absolute bottom-3 right-3 z-10 flex items-center gap-1 rounded-full border border-border/80 bg-card/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm md:hidden"
          onClick={() => setSummaryOpen((o) => !o)}
          aria-expanded={summaryOpen}
          aria-label={`${summaryOpen ? "Hide" : "Show"} summary for ${project.title}`}
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Summary
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform", summaryOpen && "rotate-180")}
          />
        </button>

        <AnimatePresence>
          {summaryOpen && (
            <motion.div
              className="absolute inset-0 z-20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectSummaryPanel project={project} />
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full bg-card/80 px-2 py-1 text-xs text-muted backdrop-blur-sm"
                onClick={() => setSummaryOpen(false)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent-2/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-2">
            {project.category}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>

        {/* Always-visible quick summary line on desktop when not hovering */}
        <p className="mt-3 hidden border-l-2 border-accent/60 pl-3 text-sm italic text-foreground/80 md:group-hover:opacity-0 md:block">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectSummaryPanel({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between bg-gradient-to-t from-background via-background/95 to-background/70 p-5 backdrop-blur-md">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <span className="rounded-full bg-accent/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <Sparkles className="h-4 w-4 shrink-0 text-accent-3" aria-hidden />
        </div>
        <h4 className="text-lg font-bold leading-tight">{project.title}</h4>
        <p className="mt-2 text-sm font-medium text-accent">{project.summary}</p>
        <ul className="mt-4 space-y-2.5">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-left text-xs leading-relaxed text-foreground/90 md:text-sm"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-2" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex gap-3 border-t border-border/60 pt-3">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-1.5 rounded-lg bg-accent/15 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/25"
        >
          <Github className="h-3.5 w-3.5" />
          Code
        </Link>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-1.5 rounded-lg bg-accent-3/20 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent-3/30"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Demo
        </Link>
      </div>
    </div>
  );
}
