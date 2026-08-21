import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projekte/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main-content">
      <section className="pageHero shell projectHero">
        <div className="eyebrow">{project.category} · {project.status}</div>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="techStrip">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>
      <section className="section mutedSection">
        <div className="shell caseGrid">
          <div><div className="eyebrow">DEVELOPMENT FOCUS</div><h2>Aktueller technischer Fokus.</h2></div>
          <div className="capabilityList">
            {project.focus.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>
      <section className="inlineCta"><div className="shell"><h2>Ähnliches vor?</h2><Link className="primary" href="/kontakt">Projekt besprechen →</Link></div></section>
    </main>
  );
}
