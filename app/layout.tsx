import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OVARA — Technologie. Innovation. Zukunft.",
  description:
    "Ovara entwickelt moderne Software, Web-Apps, mobile Produkte, Cloud-Systeme und KI-Automationen.",
  metadataBase: new URL("https://ovara.de"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
