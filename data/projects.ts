export type ProjectStatus = "Live" | "Beta" | "Development" | "Research";

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  technologies: readonly string[];
  href?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "webforge",
    name: "WebForge",
    category: "Web Platform",
    summary:
      "Eigenständige Plattform für moderne Unternehmenswebsites, digitale Verkaufsprozesse und wiederverwendbare Branchenlösungen.",
    status: "Development",
    technologies: ["Next.js", "TypeScript", "Supabase", "Vercel"],
  },
  {
    slug: "stockpilot",
    name: "StockPilot",
    category: "AI Finance Product",
    summary:
      "Datengetriebenes Analyseprodukt für Märkte, Watchlists, News, Sentiment und KI-gestützte Auswertung.",
    status: "Development",
    technologies: ["Next.js", "TypeScript", "APIs", "AI"],
  },
];
