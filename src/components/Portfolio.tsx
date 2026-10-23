import Link from "next/link";
import { getLatestProjects } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";

export default async function Portfolio() {
  const latestProjects = await getLatestProjects();

  if (latestProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">Selected work</span>
            <h2 className="section-heading mt-6 max-w-xl">A portfolio built around clarity, performance, and product thinking.</h2>
          </div>

          <Link href="/projects" className="primary-btn w-fit">
            View More
          </Link>
        </div>

        <div className="project-carousel">
          {latestProjects.map((project, index) => (
            <article key={project.id} className="project-slide">
              <div className="project-visual" style={{ background: project.logoUrl ? undefined : `linear-gradient(135deg, ${project.accent}44, rgba(121, 153, 255, 0.12))` }}>
                <ProjectImage src={project.logoUrl} alt={`${project.title} logo`} />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {project.category}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{project.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{project.summary}</p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{new Date(project.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  {project.websiteUrl ? (
                    <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                      View website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                      View website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
