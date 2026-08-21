import Link from "next/link";
import { de } from "@/content/de";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="logo" href="/" aria-label="Ovara Startseite">
          {de.brand.logo}
        </Link>
        <nav className="desktopNav" aria-label="Hauptnavigation">
          {de.nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="headerCta" href="/kontakt">
          Projekt starten
        </Link>
      </div>
    </header>
  );
}
