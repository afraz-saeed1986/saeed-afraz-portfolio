
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-32 text-[var(--foreground)] lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
              Experience
            </p>

            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[0.92] tracking-[-0.05em]">
              Where I&apos;ve
              <br />
              made an impact.
            </h2>
          </div>

          <p className="text-sm leading-6 text-[var(--muted)] md:pb-1">
            More than a list of positions — a selection of problems,
            responsibilities and systems I&apos;ve worked on throughout my
            career.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-24 border-t border-[var(--border)]">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="group relative grid gap-8 border-b border-[var(--border)] px-6 py-10 transition-colors duration-300 hover:bg-[var(--surface-muted)] md:grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr]"
            >
              {/* Accent indicator */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-y-100"
              />

              {/* Period */}
              <div>
                <span className="font-mono text-xs text-[var(--muted-light)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {item.period}
                </span>
              </div>

              {/* Content */}
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted-light)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-[var(--border)] transition-all duration-300 group-hover:w-8 group-hover:bg-[var(--accent)]"
                    />

                    <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted-light)]">
                      {item.company}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.03em] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-4xl">
                    {item.role}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-light)]">
                    Focus
                  </p>

                  <ul className="space-y-4">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-[var(--muted-light)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--accent)]"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

