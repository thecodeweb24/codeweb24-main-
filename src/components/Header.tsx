"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="panel-surface flex h-16 items-center justify-between rounded-full px-4 sm:px-6">
          <BrandLogo className="brand-logo-header" />

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="#contact" className="primary-btn text-sm">
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)]"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-base font-medium text-[var(--text)] transition-colors hover:bg-[var(--accent-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="primary-btn mt-2 w-full text-sm"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
