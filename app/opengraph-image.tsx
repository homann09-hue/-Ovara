import { ImageResponse } from "next/og";

export const alt = "Ovara — Building what’s next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#08090d",
        color: "#f5f6f8",
        padding: "72px 82px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          right: -90,
          top: -150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,255,.42) 0%, rgba(8,9,13,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 30,
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 28,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: ".25em" }}>OVARA</div>
          <div style={{ fontSize: 16, color: "#b48cff", letterSpacing: ".18em" }}>TECHNOLOGY · SOFTWARE · AI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ fontSize: 78, lineHeight: .98, letterSpacing: "-.05em", fontWeight: 700 }}>
            Building what’s next.
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.45, color: "#a9afba" }}>
            Software, AI und digitale Produkte für Unternehmen.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, color: "#777e8a" }}>
          <span>ovara.de</span>
          <span>Germany · International by design</span>
        </div>
      </div>
    </div>,
    size,
  );
}
