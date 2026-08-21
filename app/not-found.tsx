import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="notFound shell">
      <div>
        <h1>404</h1>
        <h2>Diese Seite existiert nicht.</h2>
        <p>Zurück zur Ovara Plattform.</p>
        <Link className="primary" href="/">Zur Startseite</Link>
      </div>
    </main>
  );
}
