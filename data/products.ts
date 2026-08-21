export type ProductStatus = "Live" | "Beta" | "Development" | "Research";

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: ProductStatus;
  platform: string;
  technologies: readonly string[];
  focus: readonly string[];
};

export const products: readonly Product[] = [
  {
    slug: "stockpilot",
    name: "StockPilot",
    category: "AI Finance Product",
    summary:
      "Ein datengetriebenes Produkt für Marktbeobachtung, Watchlists, News, Sentiment und KI-gestützte Auswertung.",
    status: "Development",
    platform: "Web · Mobile in Entwicklung",
    technologies: ["Next.js", "TypeScript", "APIs", "AI"],
    focus: [
      "Marktdaten und Watchlists in einer klaren Oberfläche bündeln",
      "News und Sentiment strukturiert auswertbar machen",
      "KI-gestützte Analyse als nachvollziehbare Produktschicht integrieren",
      "Web und Mobile aus einer wartbaren Produktarchitektur entwickeln",
    ],
  },
];
