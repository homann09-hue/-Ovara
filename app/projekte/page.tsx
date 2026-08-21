import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ausgewählte reale Projekte und digitale Produkte von Ovara.",
  alternates: { canonical: "/projekte" },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="pageHero shell">
        <div className="eyebrow">SELECTED WORK</div>
        <h1>Produkte, Systeme und Plattformen mit echter Substanz.</h1>
        <p>Hier erscheinen ausschließlich reale Projekte. Keine erfundenen Case Studies, keine Fake-Kunden, keine geschönten Kennzahlen.</p>
      </section>
      <section className="section shell">
        <div className="workGrid">
          {projects.map((project, index) => (
            <Link className="workCard" href={`/projekte/${project.slug}`} key={project.slug}>
              <div className="workVisual"><span>0{index + 1}</span><b>{project.category}</b><div>{project.name.slice(0, 1)}</div></div>
              <div className="workCopy"><div className="statusRow"><span>{project.status}</span><span>{project.technologies.join(" · ")}</span></div><h2>{project.name}</h2><p>{project.summary}</p><strong>Projekt ansehen →</strong></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
