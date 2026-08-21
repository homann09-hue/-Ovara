import Link from "next/link";
import { de } from "@/content/de";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <div className="logo">{de.brand.logo}</div>
          <p>{de.brand.claim}</p>
        </div>
        <div>
          <strong>Ovara</strong>
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/projekte">Projekte</Link>
          <Link href="/produkte">Produkte</Link>
          <Link href="/ueber-uns">Über Ovara</Link>
        </div>
        <div>
          <strong>Kontakt</strong>
          <Link href="/kontakt">Projekt starten</Link>
          <a href={`mailto:${de.brand.email}`}>{de.brand.email}</a>
          <span>{de.brand.domain}</span>
        </div>
        <div>
          <strong>Sprache</strong>
          <span>Deutsch</span>
          <span className="footerMuted">English architecture ready</span>
        </div>
      </div>
      <div className="shell footerBottom">© {new Date().getFullYear()} Ovara · Rechtliche Seiten werden erst mit vollständigen echten Betreiberangaben veröffentlicht.</div>
    </footer>
  );
}
