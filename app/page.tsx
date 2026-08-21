import Link from "next/link";
import { content } from "@/content";
import { capabilities, services, technologies } from "@/data/services";
import { projects } from "@/data/projects";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow">{content.home.eyebrow}</div>
          <h1>{content.home.title}</h1>
          <p className="heroLead">{content.home.intro}</p>
          <div className="heroActions">
            <Link className="primary" href="/kontakt">{content.home.primaryCta}</Link>
            <Link className="secondary" href="/projekte">{content.home.secondaryCta}</Link>
          </div>
          <div className="heroMeta" aria-label="Ovara Fokusbereiche">
            {content.home.focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
        <div className="signalVisual" aria-hidden="true">
          <div className="signalGrid" />
          <div className="signalRing ringOne" />
          <div className="signalRing ringTwo" />
          <div className="signalCore">O</div>
          <div className="signalLabel">OVARA / SYSTEM 01</div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statementInner">
          <span>{content.home.statementLabel}</span>
          <p>{content.home.statementPrefix} <strong>{content.home.statementEmphasis}</strong></p>
        </div>
      </section>

      <section className="section shell" id="what-we-build">
        <div className="sectionHead">
          <div><div className="eyebrow">{content.home.buildEyebrow}</div><h2>{content.home.buildTitle}</h2></div>
          <p>{content.home.buildIntro}</p>
        </div>
        <div className="buildRail">
          {services.map((service, index) => (
            <article className="buildItem" key={service.slug}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workSection">
        <div className="shell">
          <div className="sectionHead">
            <div><div className="eyebrow">{content.home.workEyebrow}</div><h2>{content.home.workTitle}</h2></div>
            <p>{content.home.workIntro}</p>
          </div>
          <div className="workGrid">
            {projects.map((project, index) => (
              <Link className="workCard" href={`/projekte/${project.slug}`} key={project.slug}>
                <div className="workVisual"><span>0{index + 1}</span><b>{project.category}</b><div>{project.name.slice(0, 1)}</div></div>
                <div className="workCopy">
                  <div className="statusRow"><span>{project.status}</span><span>{project.technologies.join(" · ")}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <strong>{content.global.selectedWorkCta}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHead compactHead">
          <div><div className="eyebrow">{content.home.productsEyebrow}</div><h2>{content.home.productsTitle}</h2></div>
          <p>{content.home.productsIntro}</p>
        </div>
        <div className="workGrid">
          {products.map((product, index) => (
            <Link className="workCard" href={`/produkte/${product.slug}`} key={product.slug}>
              <div className="workVisual"><span>0{index + 1}</span><b>{product.category}</b><div>{product.name.slice(0, 1)}</div></div>
              <div className="workCopy">
                <div className="statusRow"><span>{product.status}</span><span>{product.platform}</span></div>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <strong>{content.home.productsCta}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="shell splitGrid">
          <div>
            <div className="eyebrow">{content.home.capabilitiesEyebrow}</div>
            <h2>{content.home.capabilitiesTitle}</h2>
            <p className="sectionIntro">{content.home.capabilitiesIntro}</p>
          </div>
          <div className="capabilityList">
            {capabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHead">
          <div><div className="eyebrow">{content.home.technologyEyebrow}</div><h2>{content.home.technologyTitle}</h2></div>
          <p>{content.home.technologyIntro}</p>
        </div>
        <div className="techStrip">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>

      <section className="section processSection">
        <div className="shell">
          <div className="sectionHead"><div><div className="eyebrow">{content.home.processEyebrow}</div><h2>{content.home.processTitle}</h2></div><p>{content.home.processIntro}</p></div>
          <div className="processGrid">{content.home.process.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHead"><div><div className="eyebrow">{content.home.whyEyebrow}</div><h2>{content.home.whyTitle}</h2></div><p>{content.home.whyIntro}</p></div>
        <div className="whyGrid">{content.home.why.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div><div className="eyebrow">{content.home.finalEyebrow}</div><h2>{content.home.finalTitle}</h2></div>
          <Link className="primary largeButton" href="/kontakt">{content.global.contactCta}</Link>
        </div>
      </section>
    </main>
  );
}
