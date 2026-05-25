"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { siteConfig } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

function ParticleGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent/40"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
      <ParticleGrid />
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full glow-blob blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 font-mono text-sm text-accent"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {siteConfig.location}
        </motion.p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedText text="Hello, I'm " className="text-muted" delay={0} />
          <br />
          <AnimatedText
            text={`${siteConfig.name}.`}
            className="text-gradient"
            delay={0.8}
          />
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-[#1c140e] shadow-retro transition-shadow hover:bg-accent-3 hover:shadow-retro-olive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          {[
            { icon: Github, href: siteConfig.social.github, label: "GitHub" },
            { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
            { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-accent"
            >
              <motion.span whileHover={{ scale: 1.2, y: -2 }}>
                <Icon className="h-5 w-5" />
              </motion.span>
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-muted" />
      </motion.div>
    </section>
  );
}
