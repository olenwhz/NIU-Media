import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "NIU Media — Visuelle Vermarktung aus Flensburg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#0A0A0A",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Decorative accent line */}
        <div
          style={{
            width: 48,
            height: 2,
            background: "#C9A876",
            marginBottom: 28,
          }}
        />

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F5F1EA",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          NIU MEDIA
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#A8A29E",
            letterSpacing: "0.02em",
          }}
        >
          Visuelle Vermarktung aus Flensburg
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #C9A876 0%, transparent 60%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
