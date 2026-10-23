import Link from "next/link";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <BrandLogo className="brand-logo-footer" />
            <p className="mt-5 max-w-sm text-base leading-7 text-[var(--muted)]">
              We Build Digital Experiences. Strategy, design, and software engineering for businesses ready to grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-base text-[var(--muted)] transition-colors hover:text-[var(--text)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-base text-[var(--muted)]">
              <li>
                <a href="mailto:thecodeweb24@gmail.com" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 7l7 6 7-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  thecodeweb24@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917567490201" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                    <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h2.33a1 1 0 0 1 .98.8l.8 4a1 1 0 0 1-.5 1.08l-1.56.78a12.14 12.14 0 0 0 6.84 6.84l.78-1.56a1 1 0 0 1 1.08-.5l4 .8a1 1 0 0 1 .8.98v2.33A1.5 1.5 0 0 1 19.5 21h-1.25A14.25 14.25 0 0 1 4 7.75V6.5Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +91 7567490201
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-6 text-center text-sm text-[var(--muted)]">
          © 2026 CODEWEB24. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
