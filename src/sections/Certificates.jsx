import React, { useRef, useState } from "react";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1jUcYVnAxDMJI6ZfTckx82q3A64-maIuY";

const CERTS = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2024",
  },
  {
    id: 2,
    title: "React Complete Guide",
    issuer: "Udemy",
    date: "2024",
  },
  {
    id: 3,
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2024",
  },
  {
    id: 4,
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    date: "2024",
  },
];

const TrophyIcon = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.9)" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V4H8v3M6 7H3v4a5 5 0 005 5h0a5 5 0 005-5V7H6zm12 0h-3v4a5 5 0 005 5h0a5 5 0 005-5V7h-7zM12 12v7m-4 3h8" />
  </svg>
);

const CertCard = ({ title, issuer, date }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={DRIVE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        flexShrink: 0,
        width: 220,
        background: "#1a1a1a",
        border: `1px solid ${hovered ? "#E5091444" : "#2a2a2a"}`,
        borderRadius: 16,
        overflow: "hidden",
        textDecoration: "none",
        cursor: "pointer",
        transform: hovered ? "scale(1.04) translateY(-6px)" : "scale(1) translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered
          ? "0 20px 60px #E5091830, 0 0 0 1px #E5091433"
          : "0 4px 20px #00000040",
        position: "relative",
      }}
    >
      {/* Red gradient top area with trophy */}
      <div
        style={{
          height: 110,
          background: "linear-gradient(135deg, #E50914 0%, #8B0000 60%, #3d0000 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: -10,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <TrophyIcon />
        {/* Year badge */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 99,
            padding: "2px 10px",
            fontSize: 11,
            color: "rgba(255,255,255,0.9)",
            fontWeight: 700,
            backdropFilter: "blur(4px)",
          }}
        >
          {date}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 16px 20px" }}>
        <h4
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            margin: "0 0 6px 0",
            lineHeight: 1.4,
          }}
        >
          {title}
        </h4>
        <p
          style={{
            color: "#666",
            fontSize: 12,
            margin: 0,
            fontWeight: 600,
          }}
        >
          {issuer} · {date}
        </p>
      </div>

      {/* Hover overlay: "View Certificate ↗" */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(2px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: 16,
        }}
      >
        <span
          style={{
            color: "#E50914",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: 0.5,
          }}
        >
          View Certificate ↗
        </span>
      </div>
    </a>
  );
};

const ArrowBtn = ({ onClick, dir }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: hovered ? "#E50914" : "#1a1a1a",
        border: `1px solid ${hovered ? "#E50914" : "#2F2F2F"}`,
        color: "#fff",
        fontSize: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        flexShrink: 0,
        lineHeight: 1,
        padding: 0,
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
};

const Certificates = () => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    rowRef.current?.scrollBy({
      left: dir === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
      style={{
        background: "#141414",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, #E5091414 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          {/* Left: Heading with red border accent */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 5,
                height: 44,
                background: "linear-gradient(180deg, #E50914, #ff4a4a88)",
                borderRadius: 3,
                flexShrink: 0,
              }}
            />
            <div>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                Certificates &amp;{" "}
                <span style={{ color: "#E50914" }}>Achievements</span>
              </h2>
              <p style={{ color: "#555", fontSize: 13, margin: "4px 0 0 0", fontWeight: 600 }}>
                Verified credentials from top learning platforms
              </p>
            </div>
          </div>

          {/* Right: See All + arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#E50914",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#E50914")}
            >
              See All ↗
            </a>
            <ArrowBtn onClick={() => scroll("left")} dir="left" />
            <ArrowBtn onClick={() => scroll("right")} dir="right" />
          </div>
        </div>

        {/* Scrollable cards row */}
        <div style={{ position: "relative" }}>
          {/* Left fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 16,
              width: 40,
              background: "linear-gradient(90deg, #141414, transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          {/* Right fade */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 16,
              width: 40,
              background: "linear-gradient(-90deg, #141414, transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          {/* Cards container */}
          <div
            ref={rowRef}
            style={{
              display: "flex",
              gap: 18,
              overflowX: "auto",
              paddingBottom: 16,
              paddingTop: 4,
              scrollbarWidth: "none",
            }}
          >
            <style>{`
              #certificates-row::-webkit-scrollbar { display: none; }
            `}</style>
            {CERTS.map((cert) => (
              <CertCard key={cert.id} {...cert} />
            ))}
            {/* Trailing spacer */}
            <div style={{ flexShrink: 0, width: 8 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;