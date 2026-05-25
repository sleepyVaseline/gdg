"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-sm text-muted">
          Built by {siteConfig.name} · {new Date().getFullYear()}
        </p>
        <motion.button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
          whileHover={{ y: -2 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="hidden sm:inline">Top</span>
        </motion.button>
      </div>
    </footer>
  );
}
