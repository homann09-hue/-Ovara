import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";

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
        <p>Ovara entwickelt neben Kundenprojekten eigene digitale Produkte und baut sie schrittweise zu eigenständigen Marken aus.</p>
      </section>
      <section className="section shell">
        <div className="workGrid">
          {products.map((product, index) => (
            <Link className="workCard" href={`/produkte/${product.slug}`} key={product.slug}>
              <div className="workVisual">
                <span>0{index + 1}</span>
                <b>{product.category}</b>
                <div>{product.name.slice(0, 1)}</div>
              </div>
              <div className="workCopy">
                <div className="statusRow"><span>{product.status}</span><span>{product.platform}</span></div>
                <h2>{product.name}</h2>
                <p>{product.summary}</p>
                <strong>Produkt ansehen →</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
