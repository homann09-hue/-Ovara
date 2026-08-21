import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Projekt mit Ovara besprechen.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="pageHero shell contactHero">
        <div className="eyebrow">START A PROJECT</div>
        <h1>Erzähl uns, was du bauen willst.</h1>
        <p>Für den aktuellen Foundation-Stand läuft der Kontakt bewusst direkt über E-Mail. Ein serverseitig validierter Lead-Flow wird erst aktiviert, wenn sichere Speicherung, Rate Limiting und Benachrichtigung vollständig stehen.</p>
      </section>
      <section className="section shell">
        <div className="contactPanel">
          <div><span>E-Mail</span><a href="mailto:homann@ovara.de">homann@ovara.de</a></div>
          <div><span>Telefon</span><a href="tel:+4915146227737">0151 46227737</a></div>
          <div><span>Projektarten</span><p>Website · Web-App · Software · AI · Automation · E-Commerce · SaaS · Sonstiges</p></div>
        </div>
      </section>
    </main>
  );
}
