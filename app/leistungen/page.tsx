import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, services, technologies } from "@/data/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Web, Software, AI und digitale Produkte — entwickelt von Ovara.",
  alternates: { canonical: "/leistungen" },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="pageHero shell">
        <div className="eyebrow">LEISTUNGEN</div>
        <h1>Design, Engineering und AI für digitale Produkte.</h1>
        <p>Ovara entwickelt digitale Systeme von der ersten Struktur bis zum produktiven Betrieb. Der Umfang richtet sich nach dem Produkt — nicht nach starren Agenturpaketen.</p>
      </section>
      <section className="section shell">
        <div className="detailGrid">
          {services.map((service, index) => (
            <article className="detailCard" key={service.slug}><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.short}</p></article>
          ))}
        </div>
      </section>
      <section className="section mutedSection">
        <div className="shell twoColumn">
          <div><div className="eyebrow">CAPABILITIES</div><h2>Was wir technisch abdecken.</h2></div>
          <div className="plainList">{capabilities.map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>
      <section className="section shell">
        <div className="sectionHead"><div><div className="eyebrow">TECHNOLOGY</div><h2>Moderner Stack. Bewusste Auswahl.</h2></div><p>Keine Technologie wird eingesetzt, nur weil sie gerade beliebt ist. Entscheidend sind Produktanforderung, Wartbarkeit, Sicherheit und Performance.</p></div>
        <div className="techStrip">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>
      <section className="inlineCta"><div className="shell"><h2>Ein konkretes Projekt?</h2><Link className="primary" href="/kontakt">Projekt besprechen →</Link></div></section>
    </main>
  );
}
