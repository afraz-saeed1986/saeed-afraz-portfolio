"use client";

import { motion, type Variants } from "motion/react";

const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-screen overflow-hidden bg-[var(--background)] px-6 pb-20 pt-36 text-[var(--foreground)] lg:px-8"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.035)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col justify-between"
      >
        {/* Top label */}
        <motion.div
          variants={heroItemVariants}
          className="flex items-center justify-between"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
            Senior Frontend / Product Engineer
          </p>

          <span className="hidden font-mono text-xs text-[var(--muted-light)] sm:block">
            01 / 04
          </span>
        </motion.div>

        {/* Main content */}
        <div className="py-20">
          <motion.h1
            id="hero-title"
            variants={heroItemVariants}
            className="max-w-6xl font-[family-name:var(--font-space-grotesk)] text-[clamp(3.25rem,10vw,9.5rem)] font-bold leading-[0.86] tracking-[-0.065em]"
          >
            I build digital
            <br />
            products that
            <br />
            <span className="text-[var(--muted-light)]">matter.</span>
          </motion.h1>

          <motion.div
            variants={heroItemVariants}
            className="mt-16 grid gap-10 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_auto] md:items-end"
          >
            {/* Introduction */}
            <div className="max-w-2xl">
              <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
                Senior Frontend Engineer with 12+ years of experience building
                scalable, high-performance and data-driven products with React,
                TypeScript, Next.js and Angular.
              </p>

              <p className="mt-5 text-sm leading-6 text-[var(--muted-light)] sm:text-base">
                I specialize in frontend architecture, complex interfaces and
                products where performance, reliability and maintainability
                matter.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium !text-[var(--accent-foreground)] transition-transform duration-300 hover:-translate-y-1"
              >
                View my work
                <span
                  aria-hidden="true"
                  className="text-[var(--accent-foreground)] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                Let&apos;s talk
              </a>

              <a
                href="/resume/saeed-afraz-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Saeed Afraz resume in a new tab"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          variants={heroItemVariants}
          className="flex flex-col gap-4 border-t border-[var(--border)] pt-5 text-xs uppercase tracking-[0.16em] text-[var(--muted-light)] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>React · TypeScript · Next.js · Angular · Fintech</span>

          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="status-indicator h-2 w-2 rounded-full bg-[var(--success)]"
            />
            Open to opportunities
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
