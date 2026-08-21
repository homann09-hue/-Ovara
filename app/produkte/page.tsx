import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produkte",
  description: "Eigene digitale Produkte und Ventures von Ovara.",
  alternates: { canonical: "/produkte" },
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="pageHero shell">
        <div className="eyebrow">BUILT BY OVARA</div>
        <h1>Eigene Produkte. Eigenständige Marken.</h1>
        <p>Ovara entwickelt neben Kundenprojekten eigene digitale Produkte. Dieser Bereich wird nur mit realen, öffentlich zeigbaren Produkten befüllt.</p>
      </section>
      <section className="section shell">
        <div className="productPlaceholder largePlaceholder">
          <span>PRODUCT PIPELINE</span>
          <h2>No fake launches.</h2>
          <p>Produkte erscheinen hier mit Status, Plattform, Features und eigener Detailseite, sobald sie tatsächlich veröffentlichbar sind.</p>
        </div>
      </section>
    </main>
  );
}
