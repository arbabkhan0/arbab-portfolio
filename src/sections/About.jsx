import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/hero.png";

const STATS = [
  { value: "3+",    label: "Projects",    suffix: "" },
  { value: "100+",  label: "LeetCode",    suffix: "" },
  { value: "90%",   label: "AI Accuracy", suffix: "" },
  { value: "7.28",  label: "CGPA",        suffix: "" },
];

const StatCard = ({ value, label }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1e1e1e" : "#181818",
        border: `1px solid ${hovered ? "#E5091444" : "#2a2a2a"}`,
        borderRadius: 16,
        padding: "22px 20px",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.3s ease",
        transform: visible
          ? hovered ? "translateY(-6px) scale(1.04)" : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 12px 30px #E5091420, 0 0 0 1px #E5091422" : "none",
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: "#E50914",
          letterSpacing: "-1px",
          lineHeight: 1,
          marginBottom: 6,
          textShadow: hovered ? "0 0 20px #E5091466" : "none",
          transition: "text-shadow 0.3s ease",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#666",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const [imgHovered, setImgHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#141414",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orb */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #E5091415 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
        }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* ── Left: Profile Image ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
              style={{
                position: "relative",
                maxWidth: 400,
                margin: "0 auto",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: imgHovered
                  ? "0 30px 80px #E5091430, 0 0 0 2px #E5091444"
                  : "0 20px 60px #00000060",
                transition: "all 0.4s ease",
                transform: imgHovered ? "scale(1.02)" : "scale(1)",
                cursor: "default",
              }}
            >
              {/* Red gradient overlay on top edge */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #E50914, #ff4a4a)",
                  zIndex: 2,
                }}
              />
              <img
                src={profileImg}
                alt="Arbab Khan - Full Stack Developer"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  filter: imgHovered ? "brightness(1.1)" : "brightness(0.95)",
                  transition: "filter 0.4s ease",
                }}
              />
              {/* Bottom gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(transparent, #141414cc)",
                  zIndex: 1,
                }}
              />
              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  zIndex: 3,
                  background: "rgba(0,0,0,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid #E5091433",
                  borderRadius: 12,
                  padding: "10px 16px",
                }}
              >
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>
                  Arbab Khan
                </div>
                <div style={{ color: "#E50914", fontSize: 11, fontWeight: 600, marginTop: 2 }}>
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s",
            }}
          >
            {/* Section heading with red vertical bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <div
                style={{
                  width: 5,
                  height: 48,
                  background: "linear-gradient(180deg, #E50914, #ff4a4a88)",
                  borderRadius: 3,
                  flexShrink: 0,
                }}
              />
              <h2
                style={{
                  fontSize: 42,
                  fontWeight: 900,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                About <span style={{ color: "#E50914" }}>Me</span>
              </h2>
            </div>

            {/* Info pills row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24, marginLeft: 19 }}>
              {[
                { icon: "👤", text: "Arbab Khan" },
                { icon: "💻", text: "Full Stack MERN Developer" },
                { icon: "🎓", text: "LPU Punjab" },
              ].map((item) => (
                <span
                  key={item.text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    borderRadius: 99,
                    padding: "5px 12px",
                    fontSize: 12,
                    color: "#aaa",
                    fontWeight: 600,
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>

            {/* Bio */}
            <p
              style={{
                color: "#888",
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 36,
                marginLeft: 19,
                borderLeft: "2px solid #E5091422",
                paddingLeft: 18,
              }}
            >
              I'm a passionate Full Stack Developer who loves building scalable, secure, and beautiful
              web applications. I specialize in the MERN stack and enjoy solving real-world problems
              through clean code and thoughtful UI design gogga pogaaa.
            </p>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                marginLeft: 19,
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* CTA links */}
            <div style={{ display: "flex", gap: 12, marginTop: 32, marginLeft: 19 }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#E50914",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: "0 8px 24px #E5091430",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b20710"; e.currentTarget.style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#E50914"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                ✉ Let's Connect
              </a>
              <a
                href="https://github.com/arbabkhan0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#ccc",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  border: "1.5px solid #333",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E50914"; e.currentTarget.style.color = "#E50914"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#ccc"; }}
              >
                {/* lets connect */}
                ↗ View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive grid @media override */}
      <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #about > div > div > div:first-child > div {
            max-width: 280px !important;
          }
          #about > div > div > div:last-child > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
