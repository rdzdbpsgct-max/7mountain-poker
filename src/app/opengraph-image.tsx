import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "7Mountain Poker - Tournament Timer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f1923 0%, #1a2e3e 50%, #0f1923 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle poker felt glow */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
            top: "-200px",
            left: "200px",
          }}
        />

        {/* Card suits decorative */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            fontSize: "80px",
            color: "rgba(16,185,129,0.06)",
            display: "flex",
            gap: "30px",
          }}
        >
          <span>♠</span>
          <span>♥</span>
          <span>♦</span>
          <span>♣</span>
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "52px",
            fontWeight: 900,
            color: "#f1f5f9",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#f1f5f9" }}>♠ ♥</span>
          <span>7Mountain Poker</span>
          <span style={{ color: "#f1f5f9" }}>♦ ♣</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginBottom: "32px",
          }}
        >
          Tournament Timer
        </div>

        {/* Feature badges */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["TV-Modus", "Fernbedienung", "Ligen", "ICM-Rechner", "468 Ansagen"].map(
            (f) => (
              <div
                key={f}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  color: "#10b981",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {f}
              </div>
            )
          )}
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#10b981",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          Kostenlos & ohne Anmeldung
        </div>
      </div>
    ),
    { ...size }
  );
}
