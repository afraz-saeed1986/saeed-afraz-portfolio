
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Expertise",
    href: "#expertise",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

type SectionId = (typeof navigation)[number]["href"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visibleSections.length > 0) {
          const id = `#${visibleSections[0].target.id}` as SectionId;
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-subtle)] bg-[color:var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
 <Link
  href="/"
  onClick={closeMenu}
  className="relative z-10 flex items-center gap-3.5"
  aria-label="Saeed Afraz home"
>
  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] sm:h-12 sm:w-12">
    <Image
      src="/images/afraz.jpg"
      alt="Saeed Afraz"
      fill
      sizes="(max-width: 640px) 40px, 48px"
      className="object-cover"
      priority
    />
  </span>

  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[var(--foreground)]">
    SA.
  </span>
</Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-[var(--muted)]">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "relative py-2 transition-colors duration-200",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]",
                    ].join(" ")}
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={[
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[var(--foreground)] transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <a
            href="mailto:afraz.saeed1986@gmail.com"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-[var(--accent-foreground)]"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="flex flex-col gap-1.5">
              <span
                className={[
                  "block h-px w-4 bg-[var(--foreground)] transition-transform duration-300",
                  isOpen ? "translate-y-[3px] rotate-45" : "",
                ].join(" ")}
              />

              <span
                className={[
                  "block h-px w-4 bg-[var(--foreground)] transition-transform duration-300",
                  isOpen ? "-translate-y-[3px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--background)] transition-[max-height,opacity] duration-300 md:hidden",
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation" className="px-6 py-6">
          <ul className="space-y-1">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "flex items-center justify-between border-b py-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium transition-colors duration-200",
                      isActive
                        ? "border-[var(--foreground)] text-[var(--foreground)]"
                        : "border-[var(--border)] text-[var(--foreground)]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>

                    <span
                      aria-hidden="true"
                      className={[
                        "text-sm transition-colors duration-200",
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted-light)]",
                      ].join(" ")}
                    >
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="mailto:afraz.saeed1986@gmail.com"
            onClick={closeMenu}
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium !text-[var(--accent-foreground)]"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}

