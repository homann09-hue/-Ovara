# OVARA — Master-Ziel

Dieses Dokument definiert das verbindliche Produktziel für die Ovara Corporate Platform.

## Zielbild

Ovara ist eine moderne, international skalierbare Technology Company. Die Website positioniert Ovara nicht als kleine Webdesign-Agentur, sondern als Dachmarke für Kundenprojekte, Software, AI, digitale Produkte, Ventures und zukünftige Marken.

Deutsch ist die Primärsprache. Architektur, Content-Modell und Routing werden von Beginn an für zusätzliche Sprachen vorbereitet.

## Markenprinzipien

- professionell, hochwertig, modern und technisch
- minimalistisch, vertrauenswürdig und international
- selbstbewusst ohne leere Superlative
- Premium-Design ohne Template-Charakter
- klare Verbindung von Technology, Design, Software, AI und Digital Products
- eigene Produkte und Ventures sichtbar getrennt von Kundenprojekten

## Visuelle Richtung

- Dark / Near-Black als Basis
- starke Typografie und viel negativer Raum
- klare Grid-Struktur
- subtile Verläufe, Licht- und Depth-Effekte
- präzise Hover-Zustände und Microinteractions
- Motion nur mit funktionalem Mehrwert
- keine Stockfoto-Agenturästhetik, kein wahlloses Neon, kein übertriebenes Glassmorphism

## Kernbereiche V1

1. Homepage
2. Leistungen
3. Projekte
4. Produkte
5. Über Ovara
6. Kontakt
7. Impressum
8. Datenschutz
9. 404
10. globale Navigation und Footer

## Homepage Journey

Hero → What we build → Selected Work → Ovara Products → Capabilities → Technology → Process → Warum Ovara → CTA → Footer.

Primäre Conversion ist die Projektanfrage. Sekundär: Projekt ansehen, Produkt ansehen, Kontakt aufnehmen und E-Mail öffnen.

## Content- und URL-Architektur

Content wird von UI getrennt. Kopien, Projekte, Produkte und Services liegen zentral in Content-/Data-Modulen. Die Architektur ist i18n-ready und wird für `/de` und `/en` vorbereitet, ohne Texte über React-Komponenten zu verteilen.

Zielrouten:

- `/`
- `/leistungen`
- `/projekte`
- `/projekte/[slug]`
- `/produkte`
- `/produkte/[slug]`
- `/ueber-uns`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- später `/insights`, `/careers`, `/labs`

## Technischer Standard

- Next.js
- React
- TypeScript
- möglichst wenige Dependencies
- Vercel
- Supabase/PostgreSQL nur wenn Backend-Funktionen es erfordern
- modular, typisiert, wartbar und skalierbar
- wiederverwendbare Design-System-Komponenten
- sichere Header, serverseitige Validierung, Rate Limits, Spam-Schutz und keine Secrets im Client

## Designsystem

Definiert werden:

- Color-, Surface-, Text-, Border-, Accent- und Gradient-Tokens
- responsive Display/H1/H2/H3/Body/Small/Label Typografie
- konsistentes Spacing
- definierte Radien
- subtile Shadows
- Motion-Tokens für Duration, Easing, Hover, Reveal und Page Transitions

## Qualitätsziele

Lighthouse möglichst:

- Performance >= 90
- Accessibility >= 95
- Best Practices >= 95
- SEO >= 95

Pflicht:

- sauberes semantisches HTML
- Keyboard-Navigation und sichtbare Focus States
- ausreichende Kontraste
- Reduced Motion
- keine Layout Shifts
- responsive QA bei 375, 390, 430, 768, 1024, 1280, 1440 und 1920 px
- Browser-QA in Chrome, Safari und Mobile Safari

## Test Gates vor Merge

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

Zusätzlich keine TypeScript-, ESLint-, Runtime- oder Browser-Console-Fehler, keine defekten internen Links und keine offensichtlichen Layoutregressionen.

## Nicht verhandelbar

Niemals Fake-Projekte, Fake-Kunden, Fake-Testimonials, Fake-Zahlen, Funktionsattrappen, kaputte Buttons, Secrets im Repository, `any` als Ausweg, entfernte Tests für grünes CI oder Qualitätseinbußen zugunsten kurzfristiger Geschwindigkeit.

## Entscheidungsreihenfolge

1. Nutzererlebnis
2. visuelle Qualität
3. technische Qualität
4. Wartbarkeit
5. Performance
6. Accessibility
7. Skalierbarkeit
8. Implementierungsgeschwindigkeit

## Definition of Done V1

V1 ist erst fertig, wenn Positionierung, Kernseiten, deutscher Content, i18n-Vorbereitung, Responsive Design, Navigation, funktionaler Kontaktprozess, Validierung, SEO, Sitemap, robots.txt, OpenGraph, Datenschutzseiten, Test Gates, Accessibility, Reduced Motion, Performance-Optimierung, Vercel-Produktion, Domain-Vorbereitung, HTTPS und QA vollständig nachgewiesen sind. Es dürfen keine sichtbaren Platzhalter, Fake-Daten oder Template-Anmutung verbleiben.
