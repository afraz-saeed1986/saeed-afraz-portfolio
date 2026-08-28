
"use client";

import { motion } from "motion/react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saeed-afraz",
  },
  {
    label: "GitHub",
    href: "https://github.com/afraz-saeed1986",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 text-[var(--foreground)] lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-7xl flex-col gap-8 text-sm md:flex-row md:items-center md:justify-between"
      >
        {/* Copyright */}
        <div className="flex flex-col gap-2">
          <p className="text-[var(--foreground)]">
            © {new Date().getFullYear()} Saeed Afraz
          </p>

          <p className="text-xs text-[var(--muted-light)]">
            Senior Frontend / Product Engineer
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="mailto:afraz.saeed1986@gmail.com"
                className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </footer>
  );
}

