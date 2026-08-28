
"use client";

import { motion, type Variants } from "motion/react";

const ctaItemVariants: Variants = {
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

export function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-32 text-[var(--foreground)] lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={ctaItemVariants}
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
            Let&apos;s work together
          </p>

          <h2
            id="contact-title"
            className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-8xl"
          >
            Have a product
            <br />
            worth building?
          </h2>
        </motion.div>

        {/* Contact content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={ctaItemVariants}
          className="mt-16 grid gap-10 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              I&apos;m interested in working on challenging products where
              thoughtful engineering, performance and great user experience
              come together.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-light)]">
              <span
                aria-hidden="true"
                className="status-indicator h-2 w-2 rounded-full bg-[var(--success)]"
              />

              Open to opportunities
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:afraz.saeed1986@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-medium !text-[var(--accent-foreground)] transition-transform duration-300 hover:-translate-y-1"
            >
              Get in touch

              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="mailto:afraz.saeed1986@gmail.com"
              className="text-sm text-[var(--muted)] underline decoration-[var(--border)] underline-offset-4 transition-colors duration-200 hover:text-[var(--foreground)] hover:decoration-[var(--foreground)]"
            >
              afraz.saeed1986@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

