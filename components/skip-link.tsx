"use client";

export function SkipLink() {
  const moveFocus = () => {
    const target = document.getElementById("main-content");
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start" });
  };

  return (
    <a className="skipLink" href="#main-content" onClick={moveFocus}>
      Zum Inhalt springen
    </a>
  );
}
