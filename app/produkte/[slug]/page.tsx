import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/produkte/${product.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main id="main-content">
      <section className="pageHero shell projectHero">
        <div className="eyebrow">{product.category} · {product.status}</div>
        <h1>{product.name}</h1>
        <p>{product.summary}</p>
        <div className="statusRow"><span>{product.platform}</span></div>
        <div className="techStrip">{product.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>
      <section className="section mutedSection">
        <div className="shell caseGrid">
          <div><div className="eyebrow">CURRENT FOCUS</div><h2>Woran das Produkt aktuell arbeitet.</h2></div>
          <div className="capabilityList">
            {product.focus.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>
      <section className="inlineCta"><div className="shell"><h2>Mehr Ovara Produkte ansehen.</h2><Link className="primary" href="/produkte">Alle Produkte →</Link></div></section>
    </main>
  );
}
