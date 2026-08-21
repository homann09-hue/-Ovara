import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { projects } from "@/data/projects";

const siteUrl = "https://ovara.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/leistungen", "/projekte", "/produkte", "/ueber-uns", "/kontakt"];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projekte/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/produkte/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...productEntries];
}
