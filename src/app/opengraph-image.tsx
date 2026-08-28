
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Saeed Afraz — Senior Frontend / Product Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#ffffff",
          color: "#111111",
          fontFamily: "Arial",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            SA.
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#999999",
              letterSpacing: "3px",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            Saeed Afraz
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#666666",
              letterSpacing: "-1px",
            }}
          >
            Senior Frontend / Product Engineer
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#dddddd",
              marginTop: "18px",
              marginBottom: "8px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "14px",
              fontSize: 20,
              color: "#777777",
            }}
          >
            <span>React</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Next.js</span>
            <span>·</span>
            <span>Angular</span>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 16,
            color: "#999999",
          }}
        >
          <div>Building scalable digital products.</div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: 18,
            }}
          >
            2026
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    },
  );
}

