export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  accent: string;
  featured: boolean;
  publishedAt: string;
  websiteUrl?: string;
  logoUrl?: string;
};

const PORTAL_URL = "https://codeweb24-project-portal.vercel.app/api/projects";
const ACCENT_COLORS = ["#5f7cff", "#ffb580", "#65d6a4", "#77b2ff", "#d5a5ff", "#ff9bb0"]; 

function normalizeProject(rawProject: any, index: number): Project {
  const title = rawProject?.projectTitle || rawProject?.clientCompany || "Untitled project";
  const description = rawProject?.fullDescription || rawProject?.shortDescription || "Project update from CODEWEB24.";
  const summary = rawProject?.shortDescription || description;
  const category = rawProject?.category || "Project";
  const publishedAt = rawProject?.createdAt || new Date().toISOString();

  return {
    id: rawProject?.id || `${title}-${index}`,
    title,
    category,
    summary,
    description,
    accent: ACCENT_COLORS[index % ACCENT_COLORS.length],
    featured: index === 0,
    publishedAt,
    websiteUrl: rawProject?.websiteUrl || rawProject?.liveDemoUrl,
    logoUrl: rawProject?.companyLogo,
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(PORTAL_URL, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    const payload = await response.json();
    const list = Array.isArray(payload?.projects) ? payload.projects : [];

    return [...list]
      .map((project, index) => normalizeProject(project, index))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (error) {
    console.error("Unable to load projects from portal.", error);
    return [];
  }
}

export async function getLatestProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  return projects.slice(0, limit);
}
