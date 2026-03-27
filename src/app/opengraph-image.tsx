import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Transient Lab";
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
          backgroundColor: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#111" strokeWidth="4" />
            <path d="M50 5 A45 45 0 0 0 5 50 L50 50 Z" fill="#111" />
            <path d="M50 50 L50 95 A45 45 0 0 0 95 50 Z" fill="#111" />
            <circle cx="62" cy="18" r="6" fill="#E97A1F" />
            <path d="M8 30 Q20 15 30 25" fill="#E97A1F" />
          </svg>
          <span style={{ fontSize: "56px", fontWeight: 700, color: "#111" }}>
            Transient Lab.
          </span>
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#666",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          인간의 창작과 협업을 지원하는
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#666",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          오디오 소프트웨어를 개발합니다.
        </div>
      </div>
    ),
    { ...size }
  );
}
