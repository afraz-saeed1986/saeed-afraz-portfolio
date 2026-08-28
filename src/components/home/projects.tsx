
"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

import { projects } from "@/data/projects";

const projectItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Projects() {
  return (
    <section
      id="work"
      className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-32 text-[var(--foreground)] lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
              Selected work
            </p>

            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Things I&apos;ve
              <br />
              built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)] md:pb-1">
            A selection of projects spanning open source, financial technology
            and modern product development.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-[var(--border)]">
          {projects.map((project, index) => {
            const content = (
              <motion.article
                variants={projectItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className={[
                  "group relative grid gap-8 border-b border-[var(--border)] px-6 py-10",
                  "transition-colors duration-300",
                  "hover:bg-[var(--surface-muted)]",
                  "md:grid-cols-[72px_1fr_180px] md:items-center md:px-6",
                  project.href ? "cursor-pointer" : "",
                ].join(" ")}
              >
                {/* Accent indicator */}
                <span
  aria-hidden="true"
  className="pointer-events-none absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-y-100 md:left-1"
/>
                {/* Number */}
                <div
                  className={[
                    "font-mono text-xs transition-colors duration-300",
                    "text-[var(--muted-light)]",
                    "group-hover:text-[var(--accent)]",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Main content */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted-light)]">
                      {project.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-[var(--border)] transition-all duration-300 group-hover:w-8 group-hover:bg-[var(--accent)]"
                    />

                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted-light)]">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-start gap-5">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.03em] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-4xl">
                      {project.title}
                    </h3>

                {project.href && (
  <motion.span
    aria-hidden="true"
    className="mt-1 shrink-0 text-lg text-[var(--muted-light)] transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-xl"
    initial={false}
    whileHover={{
      x: 3,
      y: -3,
    }}
    transition={{
      duration: 0.2,
    }}
  >
    ↗
  </motion.span>
)}
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={[
                        "rounded-full border border-[var(--border)]",
                        "px-3 py-1 text-[11px] font-medium",
                        "text-[var(--muted)]",
                        "transition-all duration-200",
                        "group-hover:border-[var(--border)]",
                      ].join(" ")}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );

            if (project.href) {
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </Link>
              );
            }

            return <div key={project.title}>{content}</div>;
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted-light)]">
            03 selected projects
          </span>

          <span className="font-mono text-xs text-[var(--muted-light)]">
            2024 — 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}

