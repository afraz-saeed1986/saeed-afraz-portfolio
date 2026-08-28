"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-10 rounded-full border border-[var(--border)]"
      />
    );
  }

  const currentTheme: Theme = theme === "dark" ? "dark" : "light";
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)]"
    >
      {/* Sun */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className={[
          "absolute h-[17px] w-[17px] transition-all duration-300",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100",
        ].join(" ")}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.42 1.42" />
        <path d="m17.65 17.65 1.42 1.42" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.42 1.42" />
      </svg>

      {/* Moon */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={[
          "absolute h-[17px] w-[17px] transition-all duration-300",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0",
        ].join(" ")}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>

      <span className="sr-only">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
