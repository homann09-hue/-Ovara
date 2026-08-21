export type Service = {
  slug: string;
  title: string;
  short: string;
};

export const services: readonly Service[] = [
  { slug: "web", title: "Web", short: "High-End Websites und digitale Plattformen." },
  { slug: "software", title: "Software", short: "Individuelle Web-Apps und Softwarelösungen." },
  { slug: "ai", title: "AI", short: "KI-Systeme, Agenten und intelligente Automatisierung." },
  { slug: "products", title: "Products", short: "Eigene digitale Produkte und Plattformen." },
];

export const capabilities = [
  "Web Development",
  "Product Design",
  "Software Engineering",
  "AI Development",
  "Automation",
  "SaaS Development",
  "Mobile Development",
  "Digital Strategy",
  "Cloud Infrastructure",
  "E-Commerce",
] as const;

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "AI APIs",
] as const;
