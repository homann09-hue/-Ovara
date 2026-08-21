"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="logo" href="/" aria-label="Ovara Startseite" onClick={() => setOpen(false)}>
          {content.brand.logo}
        </Link>
        <nav className="desktopNav" aria-label="Hauptnavigation">
          {content.nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="headerCta" href="/kontakt">
          {content.global.projectCta}
        </Link>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobileMenu ${open ? "isOpen" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <nav className="shell mobileNav" aria-label="Mobile Navigation">
          {content.nav.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </Link>
          ))}
          <Link className="primary mobileProjectCta" href="/kontakt" onClick={() => setOpen(false)}>
            {content.global.projectCta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
