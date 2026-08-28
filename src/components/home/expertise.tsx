
"use client";

import { motion, type Variants } from "motion/react";

const expertise = [
  {
    number: "01",
    title: "Frontend Architecture",
    description:
      "Designing maintainable frontend architectures for complex, long-lived applications with clear boundaries, reusable systems and predictable data flow.",
  },
  {
    number: "02",
    title: "Performance Engineering",
    description:
      "Improving rendering performance, runtime behavior, bundle size and user experience across data-heavy and highly interactive interfaces.",
  },
  {
    number: "03",
    title: "Data-driven Interfaces",
    description:
      "Building complex financial and enterprise interfaces where dynamic schemas, large datasets and correctness are first-class concerns.",
  },
  {
    number: "04",
    title: "Product Engineering",
    description:
      "Turning product requirements into reliable experiences while balancing usability, technical constraints, maintainability and long-term scalability.",
  },
] as const;

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Angular",
  "Node.js",
  "Supabase",
  "Redux",
  "Zustand",
  "Testing",
  "CI/CD",
  "Accessibility",
  "Web Performance",
] as const;

const expertiseItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-32 text-[var(--foreground)] lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
              Engineering
            </p>

            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              More than
              <br />
              writing UI.
            </h2>
          </div>

          <p className="text-sm leading-6 text-[var(--muted)] md:pb-1">
            I care about the systems behind the interface: architecture,
            performance, reliability and the experience of the people using
            the product.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-24 border-t border-[var(--border)]">
          <div className="grid md:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.article
                key={item.number}
                variants={expertiseItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className={[
                  "group relative border-b border-[var(--border)]",
                  "py-10 pl-6 pr-6",
                  "transition-colors duration-300 hover:bg-[var(--surface-muted)]",
                  "md:pl-12 md:pr-12",
                  index % 2 === 0 ? "md:border-r" : "",
                ].join(" ")}
              >
                {/* Accent indicator */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-y-100"
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-[var(--muted-light)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {item.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-[var(--muted-light)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  >
                    ↗
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-12 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.02em] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted)] sm:text-base">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <div className="mt-24 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[220px_1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-light)]">
              Core stack
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

