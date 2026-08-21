export const de = {
  brand: {
    name: "Ovara",
    logo: "OVARA",
    claim: "Building what’s next.",
    domain: "ovara.de",
    email: "homann@ovara.de",
  },
  nav: [
    ["Leistungen", "/leistungen"],
    ["Projekte", "/projekte"],
    ["Produkte", "/produkte"],
    ["Über Ovara", "/ueber-uns"],
    ["Kontakt", "/kontakt"],
  ],
  home: {
    eyebrow: "TECHNOLOGY · SOFTWARE · AI · DIGITAL PRODUCTS",
    title: "Wir bauen digitale Produkte für das, was als Nächstes kommt.",
    intro:
      "Ovara entwickelt moderne Websites, Software, KI-Lösungen und digitale Produkte für Unternehmen — mit Design, Engineering und skalierbarer Technologie aus einer Hand.",
    primaryCta: "Projekt starten",
    secondaryCta: "Unsere Arbeit",
    buildTitle: "Was wir bauen",
    buildIntro:
      "Von digitalen Auftritten bis zu produktionsreifen Softwareprodukten. Ovara verbindet Produktdenken, Design und Engineering.",
    workTitle: "Ausgewählte Arbeit",
    productsTitle: "Built by Ovara",
    capabilitiesTitle: "Capabilities",
    technologyTitle: "Technology",
    processTitle: "Von Idee zu System",
    whyTitle: "Warum Ovara",
    finalTitle: "Lass uns etwas bauen, das bleibt.",
  },
} as const;

export type OvaraLocale = "de" | "en";
