import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ovara",
    short_name: "Ovara",
    description: "Software, AI und digitale Produkte für Unternehmen.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090d",
    theme_color: "#08090d",
    lang: "de",
    categories: ["business", "productivity", "technology"],
  };
}
