"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="Have a project in mind? Let's talk.">
          Contact
        </SectionTitle>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className={cn(
                "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors",
                "focus:border-accent focus:ring-1 focus:ring-accent",
                errors.name && "border-red-500"
              )}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className={cn(
                "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors",
                "focus:border-accent focus:ring-1 focus:ring-accent",
                errors.email && "border-red-500"
              )}
              placeholder="you@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "At least 10 characters" },
              })}
              className={cn(
                "w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors",
                "focus:border-accent focus:ring-1 focus:ring-accent",
                errors.message && "border-red-500"
              )}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-[#1c140e] shadow-retro disabled:opacity-60 dark:text-[#1c140e]"
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-accent-2"
            >
              <CheckCircle className="h-4 w-4" />
              Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-red-500"
            >
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </motion.form>

        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <p className="text-muted">
            Or contact me directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <div className="mt-6 flex justify-center gap-6">
            {[
              { icon: Github, href: siteConfig.social.github },
              { icon: Linkedin, href: siteConfig.social.linkedin },
              { icon: Twitter, href: siteConfig.social.twitter },
            ].map(({ icon: Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
