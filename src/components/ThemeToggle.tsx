"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("codeweb24-theme");
    const preferredTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.setAttribute("data-theme", preferredTheme);
    setTheme(preferredTheme);
    setMounted(true);
  }, []);

  const applyTheme = (nextTheme: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("codeweb24-theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)] shadow-[var(--shadow-soft)]"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => applyTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)] shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
