const services = [
  ["01", "Software", "Individuelle Software für reale Abläufe, Produkte und interne Systeme."],
  ["02", "Web Apps", "Schnelle, moderne Web-Anwendungen mit sauberer UX und skalierbarer Architektur."],
  ["03", "Mobile", "Mobile-first Produkte und App-Erlebnisse für iOS, Android und Web."],
  ["04", "Cloud", "Sichere Backends, Datenflüsse, APIs und Infrastruktur für wachsende Produkte."],
  ["05", "KI & Automation", "KI-gestützte Workflows, Agenten und Automationen, die echte Arbeit abnehmen."],
];

const projects = [
  ["WebForge", "Websites für lokale Unternehmen", "Eigenständige Plattform für moderne Unternehmenswebsites, Demos, Leads und digitale Verkaufsprozesse."],
  ["StockPilot", "Finanzanalyse mit KI", "Ein datengetriebenes Produkt für Märkte, Watchlists, News, Sentiment und intelligente Auswertung."],
  ["Weitere Produkte", "Build. Test. Scale.", "Neue digitale Produkte werden unter Ovara entwickelt, validiert und schrittweise zu eigenständigen Marken ausgebaut."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="logo">OVARA</a>
        <div className="navlinks">
          <a href="#leistungen">Leistungen</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a className="navcta" href="mailto:homann@ovara.de">Projekt starten</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">TECHNOLOGIE · INNOVATION · ZUKUNFT</div>
          <h1>Wir entwickeln <span>digitale Systeme</span>, die morgen relevant sind.</h1>
          <p>
            Ovara entwickelt Software, Web-Apps, mobile Produkte, Cloud-Systeme und KI-Automationen — von der ersten Idee bis zum produktiven System.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#projekte">Projekte ansehen</a>
            <a className="secondary" href="mailto:homann@ovara.de">Kontakt aufnehmen</a>
          </div>
        </div>
        <div className="orb-wrap" aria-hidden="true">
          <div className="orb"><div className="orb-core">O</div></div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-grid">
          <div className="manifesto-label">OVARA / 2026</div>
          <p>Wir entwickeln Lösungen.<br/><span>Für heute. Für morgen. Für dich.</span></p>
        </div>
      </section>

      <section className="section shell" id="leistungen">
        <div className="section-head">
          <div>
            <div className="eyebrow">WAS WIR BAUEN</div>
            <h2>Technologie mit klarer Funktion.</h2>
          </div>
          <p>Keine austauschbaren Digitalprodukte. Ovara verbindet Produktidee, Design, Engineering und Automatisierung zu einem belastbaren Gesamtsystem.</p>
        </div>
        <div className="service-grid">
          {services.map(([n, title, text]) => (
            <article className="service-card" key={title}>
              <div className="service-no">{n}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projekte">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">PROJEKTE & PRODUKTE</div>
              <h2>Unter Ovara entstehen eigenständige Marken.</h2>
            </div>
            <p>Ovara ist die technologische Heimat hinter verschiedenen Produkten. Jedes Projekt kann eine eigene Marke, Zielgruppe und Plattform haben.</p>
          </div>
          <div className="project-grid">
            {projects.map(([name, kicker, text], i) => (
              <article className="project-card" key={name}>
                <div className="project-top"><span>0{i + 1}</span><b>{kicker}</b></div>
                <h3>{name}</h3>
                <p>{text}</p>
                <div className="project-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="shell contact-grid">
          <div>
            <div className="eyebrow">KONTAKT</div>
            <h2>Eine Idee braucht keinen langen Pitch.</h2>
            <p>Ein Problem, eine Idee oder ein bestehendes System reicht als Startpunkt. Wir klären, was technisch sinnvoll ist und wie daraus ein Produkt wird.</p>
          </div>
          <div className="contact-card">
            <div><span>Name</span><strong>Angelo Homann</strong></div>
            <div><span>Rolle</span><strong>Founder & Developer</strong></div>
            <a href="tel:+4915146227737"><span>Telefon</span><strong>0151 46227737</strong></a>
            <a href="mailto:homann@ovara.de"><span>E-Mail</span><strong>homann@ovara.de</strong></a>
            <a href="https://ovara.de"><span>Web</span><strong>ovara.de</strong></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="logo">OVARA</div>
        <p>Technologie · Innovation · Zukunft</p>
        <span>© 2026 Ovara</span>
      </footer>
    </main>
  );
}
