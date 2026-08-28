
"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={[
        "fixed bottom-6 right-6 z-40",
        "flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12",
        "rounded-full border border-[var(--border)]",
        "bg-[var(--background)]/90 text-[var(--foreground)]",
        "shadow-sm backdrop-blur-md",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-[var(--accent)]",
        "hover:bg-[var(--accent)]",
        "hover:text-[var(--accent-foreground)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2",
        "focus:ring-offset-[var(--background)]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className="text-base leading-none transition-transform duration-300 sm:text-lg"
      >
        ↑
      </span>
    </button>
  );
}

