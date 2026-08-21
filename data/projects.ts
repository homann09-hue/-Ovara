export type ProjectStatus = "Live" | "Beta" | "Development" | "Research";

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  technologies: readonly string[];
  focus: readonly string[];
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
    focus: [
      "Wiederverwendbare Website-Systeme für unterschiedliche Branchen entwickeln",
      "Leads, Admin-Flows und digitale Verkaufsprozesse zusammenführen",
      "Sichere, wartbare Mandanten- und Datenstrukturen vorbereiten",
      "Schnelle Auslieferung ohne Template-Eindruck ermöglichen",
    ],
  },
  {
    slug: "stockpilot",
    name: "StockPilot",
    category: "AI Finance Product",
    summary:
      "Datengetriebenes Analyseprodukt für Märkte, Watchlists, News, Sentiment und KI-gestützte Auswertung.",
    status: "Development",
    technologies: ["Next.js", "TypeScript", "APIs", "AI"],
    focus: [
      "Marktdaten und Watchlists strukturiert zusammenführen",
      "News und Sentiment für Analyseprozesse nutzbar machen",
      "KI-gestützte Auswertung nachvollziehbar in das Produkt integrieren",
      "Web- und Mobile-Nutzung aus einer gemeinsamen Produktbasis entwickeln",
    ],
  },
];
