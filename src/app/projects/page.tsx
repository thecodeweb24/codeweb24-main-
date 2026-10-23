import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import { getProjects } from "@/data/projects";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const hasProjects = projects.length > 0;

  return (
    <main className="site-shell min-h-screen">
      <Header />

      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Project portal</span>
              <h1 className="section-heading mt-6 max-w-xl">Recent projects from the CODEWEB24 studio.</h1>
            </div>
            <Link href="/" className="secondary-btn w-fit">
              Back to Home
            </Link>
          </div>

          {!hasProjects ? (
            <div className="panel-surface rounded-[2rem] border border-[var(--line)] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">No projects published yet.</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                New project updates will appear here once the admin adds them to the project portal.
              </p>
            </div>
          ) : (
            <div className="projects-page-grid">
              {projects.map((project) => (
                <article key={project.id} className="projects-page-card">
                  <div className="project-visual" style={{ background: project.logoUrl ? undefined : `linear-gradient(135deg, ${project.accent}44, rgba(121, 153, 255, 0.12))`, minHeight: "220px" }}>
                    <ProjectImage src={project.logoUrl} alt={`${project.title} logo`} />
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                        {project.category}
                      </span>
                      <span className="text-[0.68rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                        {new Date(project.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{project.title}</h2>
                      <p className="mt-2 text-base leading-7 text-[var(--muted)]">{project.summary}</p>
                    </div>

                    <p className="text-base leading-7 text-[var(--muted)]">{project.description}</p>

                    {project.websiteUrl ? (
                      <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                        View website
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                        View website
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
