import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/My Profile (2).png";

const STATS = [
  { value: "4+", label: "Projects", suffix: "" },
  { value: "200+", label: "Problem Solved", suffix: "" },
  { value: "150+", label: "LeetCode", suffix: "" },
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
      className="about-section"
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
        className="about-container"
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
                maxWidth: 450,
                margin: "0 auto",
                background: "#181818",
                padding: 16,
                borderRadius: 24,
                boxShadow: imgHovered
                  ? "0 30px 80px #E5091430, 0 0 0 2px #E5091466"
                  : "0 20px 60px #00000080",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: imgHovered ? "scale(1.02) translateY(-4px)" : "scale(1)",
                cursor: "default",
              }}
            >
              {/* Image Container with vertical cropping */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: "#111",
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
                  alt="Arbab Khan - Web Developer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    filter: imgHovered ? "brightness(1.05) contrast(1.05)" : "brightness(0.95)",
                    transition: "filter 0.4s ease",
                  }}
                />
                {/* Bottom gradient overlay to fade into the card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(transparent, #181818)",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Name badge naturally sitting on the border edge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -15,
                  left: "10%",
                  right: "10%",
                  zIndex: 3,
                  background: "rgba(20,20,20,0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid #E5091444",
                  borderRadius: 12,
                  padding: "14px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                }}
              >
                <div style={{ color: "#fff", fontSize: 17, fontWeight: 800 }}>
                  Arbab Khan
                </div>
                <div style={{ color: "#E50914", fontSize: 11, fontWeight: 700, marginTop: 4, letterSpacing: "1.5px" }}>
                  Web Developer
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
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
            <div
              style={{
                color: "#888",
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 36,
                borderLeft: "2px solid #E5091422",
                paddingLeft: 18,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                I'm <strong style={{ color: "#fff", fontWeight: 700 }}>Arbab Khan</strong>, a B.Tech CSE student at <strong style={{ color: "#fff", fontWeight: 700 }}>Lovely Professional University</strong>, focused on building scalable, high-performance web applications using the <strong style={{ color: "#fff", fontWeight: 700 }}>MERN stack</strong>. I design clean APIs, develop responsive UIs, and deliver solutions that create real impact.
              </p>
              <p>
                I practice data structures and algorithms on Codeing Platforms to get better at solving problems and writing efficient code.
              </p>
              <p>
                Alongside this, I explore <strong style={{ color: "#fff", fontWeight: 700 }}>AI-powered development</strong>, applying Generative AI and prompt engineering to build smarter, more adaptive systems.
              </p>
              <p>
                I enjoy working in fast-paced, agile teams and am driven to contribute to products that scale, solve meaningful problems, and make a difference.
              </p>
            </div>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Skills Badges (Replacing CTA Links) */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              {[
                "MERN Architecture",
                "UI / UX Designer",
                "Data Structures",
                "Web Scalability",
                "API Design"
              ].map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    background: "rgba(229, 9, 20, 0.03)",
                    border: "1px solid rgba(229, 9, 20, 0.2)",
                    borderRadius: 99,
                    color: "#e5e5e5",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E50914";
                    e.currentTarget.style.background = "rgba(229, 9, 20, 0.08)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(229, 9, 20, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229, 9, 20, 0.2)";
                    e.currentTarget.style.background = "rgba(229, 9, 20, 0.03)";
                    e.currentTarget.style.color = "#e5e5e5";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-section { padding: 60px 0 !important; }
          .about-container { padding: 0 20px !important; }
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
