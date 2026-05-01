import { ImageResponse } from "next/og";

export const alt = "Valentinos Stylianou — Web Development & Automation";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0a 0%, #0f172a 55%, #0a0a0a 100%)",
          color: "#fafafa",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            VS
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>
            Valentinos Stylianou
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -1.2,
            maxWidth: 980,
          }}
        >
          Websites &amp; automation that help businesses work smarter
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            lineHeight: 1.45,
            color: "rgba(250,250,250,0.72)",
            maxWidth: 900,
          }}
        >
          Next.js · Tailwind · Workflows · Integrations
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
