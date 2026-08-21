import Link from "next/link";
import { content, defaultLocale } from "@/content";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <div className="logo">{content.brand.logo}</div>
          <p>{content.brand.claim}</p>
        </div>
        <div>
          <strong>Ovara</strong>
          {content.nav.slice(0, 4).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div>
          <strong>Kontakt</strong>
          <Link href="/kontakt">{content.global.projectCta}</Link>
          <a href={`mailto:${content.brand.email}`}>{content.brand.email}</a>
          <span>{content.brand.domain}</span>
        </div>
        <div>
          <strong>Sprache</strong>
          <span>{defaultLocale === "de" ? "Deutsch" : defaultLocale}</span>
        </div>
      </div>
      <div className="shell footerBottom">© {new Date().getFullYear()} {content.brand.name} · {content.brand.domain}</div>
    </footer>
  );
}
