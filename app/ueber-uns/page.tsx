import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Ovara",
  description: "Ovara ist die Technology Company hinter digitalen Produkten, Software und neuen Marken.",
  alternates: { canonical: "/ueber-uns" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="pageHero shell">
        <div className="eyebrow">ABOUT OVARA</div>
        <h1>Eine Technology Company, gebaut für mehrere Produkte.</h1>
        <p>Ovara ist bewusst breiter positioniert als eine klassische Agentur. Unter der Marke können Kundenprojekte, eigene Softwareprodukte, AI-Systeme und neue digitale Unternehmen entstehen.</p>
      </section>
      <section className="section mutedSection">
        <div className="shell twoColumn">
          <div><div className="eyebrow">PRINZIP</div><h2>Qualität vor Volumen.</h2></div>
          <div className="plainList">
            <div>Produktdenken statt Feature-Sammlungen</div>
            <div>Design und Engineering eng verbunden</div>
            <div>Keine Fake-Cases oder künstlichen Wachstumszahlen</div>
            <div>Architektur, die spätere Skalierung nicht blockiert</div>
            <div>AI dort, wo sie messbaren Nutzen bringt</div>
          </div>
        </div>
      </section>
      <section className="inlineCta"><div className="shell"><h2>Mit Ovara arbeiten.</h2><Link className="primary" href="/kontakt">Kontakt aufnehmen →</Link></div></section>
    </main>
  );
}
