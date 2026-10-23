import Link from "next/link";

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "8+", label: "Years building digital products" },
  { value: "96%", label: "Client retention" },
];

const badges = ["Web Design", "Development", "Software", "Automation"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="section-label mb-8">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              WEB DESIGN · DEVELOPMENT · SOFTWARE · DIGITAL
            </div>

            <h1 className="display-font text-[3.5rem] leading-[0.88] tracking-[-0.07em] text-[var(--text)] sm:text-[4.5rem] lg:text-[6rem]">
              We Code.
              <br />
              We Build.
              <br />
              <span className="accent-text">We Deliver.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              We build custom websites, powerful web applications, and digital solutions that help businesses grow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="primary-btn">
                Start Your Project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="#projects" className="secondary-btn">
                Explore Our Work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="panel-surface rounded-2xl px-4 py-4">
                  <div className="display-font text-3xl leading-none text-[var(--text)]">{stat.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-visual">
              <div className="window-bar">
                <div className="window-dots" aria-hidden="true">
                  <span className="window-dot bg-[#ff6048]" />
                  <span className="window-dot bg-[#ffc12f]" />
                  <span className="window-dot bg-[#41c76c]" />
                </div>
                <span className="window-chip">Project Preview</span>
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-main">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Growth dashboard</p>
                      <h2 className="mt-2 display-font text-4xl text-[var(--text)]">+142%</h2>
                    </div>
                    <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                      Live
                    </span>
                  </div>

                  <div className="mini-chart" aria-hidden="true" />
                </div>

                <div className="dashboard-side space-y-3">
                  <div className="metric-card">
                    <strong>2.6x</strong>
                    <span>Engagement</span>
                  </div>
                  <div className="metric-card">
                    <strong>41ms</strong>
                    <span>Page speed</span>
                  </div>
                  <div className="metric-card">
                    <strong>24/7</strong>
                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
