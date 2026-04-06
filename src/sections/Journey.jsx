import React, { useRef, useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   JOURNEY DATA
────────────────────────────────────────────────────────────────────────── */
const journeyItems = [
  {
    id: 1,
    type: "training",
    icon: "💼",
    color: "#E50914",
    accentColor: "#ff4d4d",
    label: "Internship Training",
    title: "MERN Stack + GenAI Training",
    org: "W3Grads – FLAMES'25",
    duration: "Jun 2025 – Jul 2025",
    status: null,
    link: "https://drive.google.com/drive/folders/1jUcYVnAxDMJI6ZfTckx82q3A64-maIuY",
    linkText: "View Certificate / Link",
    highlights: [
      "Built full-stack MERN applications with authentication and APIs",
      "Participated in 10+ Scrum meetings",
      "Followed Agile methodology",
      "Improved team efficiency by ~20%",
      "Delivered project on time",
    ],
  },
  {
    id: 2,
    type: "education",
    icon: "🎓",
    color: "#0ea5e9",
    accentColor: "#38bdf8",
    label: "Current Education",
    title: "B.Tech CSE (3rd Year)",
    org: "Lovely Professional University",
    duration: "2023 – 2027",
    status: "Currently Pursuing",
    link: null,
    highlights: [
      "Specialization in Web Developer",
      "Active member of college tech community",
      "Building real-world projects since Year 1",
    ],
  },
  {
    id: 3,
    type: "schooling",
    icon: "📚",
    color: "#10b981",
    accentColor: "#34d399",
    label: "Schooling",
    title: "Intermediate (PCM)",
    org: "Modern Era Public School (M.E.P.S)",
    duration: "2022 – 2023",
    status: null,
    link: null,
    highlights: [
      "Completed Class XII with a focus on Physics, Chemistry, and Mathematics.",
      "Developing strong foundations in science and mathematical reasoning.",
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   JOURNEY CARD
────────────────────────────────────────────────────────────────────────── */
const JourneyCard = ({ item, index, isLast }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const { icon, color, accentColor, label, title, org, duration, status, link, linkText, highlights, percentage } = item;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms,
                     transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      {/* ── Timeline column ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 28,
        flexShrink: 0,
      }}>
        {/* Icon node */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${accentColor}33, ${color}11)`,
            border: `2px solid ${hovered ? color : color + "55"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            flexShrink: 0,
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: hovered ? `0 0 24px ${color}55, 0 0 0 4px ${color}15` : "none",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            zIndex: 2,
          }}
        >
          {icon}
        </div>

        {/* Vertical line */}
        {!isLast && (
          <div style={{
            width: 2,
            flex: 1,
            marginTop: 8,
            background: `linear-gradient(180deg, ${color}66 0%, ${color}11 100%)`,
            minHeight: 40,
          }} />
        )}
      </div>

      {/* ── Card ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          marginBottom: isLast ? 0 : 32,
          background: hovered ? "#1c1c1c" : "#181818",
          border: `1px solid ${hovered ? color + "55" : "#242424"}`,
          borderRadius: 20,
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hovered ? "translateX(6px) scale(1.005)" : "none",
          boxShadow: hovered
            ? `0 20px 60px ${color}18, 0 0 0 1px ${color}22, -4px 0 0 0 ${color}`
            : `0 4px 20px rgba(0,0,0,0.35), -2px 0 0 0 ${color}44`,
          cursor: "default",
        }}
      >
        {/* Top accent bar */}
        <div style={{
          height: 4,
          background: `linear-gradient(90deg, ${color}, ${color}44)`,
        }} />

        <div style={{ padding: "22px 28px 24px" }}>
          {/* Label + duration row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 12,
          }}>
            <span style={{
              background: `${color}18`,
              border: `1px solid ${color}44`,
              color: color,
              fontSize: 11,
              fontWeight: 800,
              padding: "4px 12px",
              borderRadius: 99,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              {label}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Status badge (e.g., Currently Pursuing) */}
              {status && (
                <span style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  color: "#34d399",
                  fontSize: 11,
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: 99,
                  letterSpacing: "0.08em",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}>
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#34d399",
                    boxShadow: "0 0 6px #34d399",
                    display: "inline-block",
                    animation: "pulseDot 1.8s ease-in-out infinite",
                  }} />
                  {status}
                </span>
              )}
              {/* Percentage badge */}
              {percentage && (
                <span style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "#34d399",
                  fontSize: 12,
                  fontWeight: 800,
                  padding: "4px 14px",
                  borderRadius: 99,
                }}>
                  {percentage}
                </span>
              )}

              <span style={{
                color: "#444",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}>
                🕐 {duration}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            color: hovered ? "#fff" : "#e8e8e8",
            fontSize: 22,
            fontWeight: 900,
            margin: "0 0 4px",
            letterSpacing: "-0.3px",
            transition: "color 0.25s",
          }}>
            {title}
          </h3>

          {/* Org */}
          <p style={{
            color: color,
            fontSize: 14,
            fontWeight: 700,
            margin: "0 0 18px",
            letterSpacing: "0.02em",
          }}>
            {org}
          </p>

          {/* Divider */}
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, ${color}33, transparent)`,
            marginBottom: 18,
          }} />

          {/* Highlights */}
          <ul style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}>
            {highlights.map((point, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: "#888",
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: 1.55,
                  transition: "color 0.2s",
                }}
              >
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: color,
                  marginTop: 7,
                  flexShrink: 0,
                  boxShadow: hovered ? `0 0 6px ${color}` : "none",
                  transition: "box-shadow 0.3s",
                }} />
                {point}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 20,
                background: `${color}18`,
                border: `1px solid ${color}55`,
                color: color,
                fontSize: 13,
                fontWeight: 800,
                padding: "10px 22px",
                borderRadius: 99,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = color;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = `0 0 20px ${color}55`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${color}18`;
                e.currentTarget.style.color = color;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              {linkText} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MAIN SECTION
────────────────────────────────────────────────────────────────────────── */
const Journey = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
      { threshold: 0.1 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        @media (max-width: 768px) {
          .journey-section { padding: 60px 0 !important; }
          .journey-container { padding: 0 20px !important; }
        }
      `}</style>

      <section
        id="journey"
        className="journey-section"
        style={{
          padding: "100px 0",
          background: "#141414",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute", inset: 0, opacity: 0.018,
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: -160, right: -140,
          width: 560, height: 560,
          background: "radial-gradient(circle, #0ea5e915 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -120, left: -100,
          width: 480, height: 480,
          background: "radial-gradient(circle, #E5091410 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          className="journey-container"
          style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px", position: "relative" }}
        >

          {/* ── Section Header ── */}
          <div
            ref={titleRef}
            style={{
              marginBottom: 60,
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{
                width: 5, height: 48,
                background: "linear-gradient(180deg, #E50914, #E5091444)",
                borderRadius: 4,
              }} />
              <div>
                <h2 style={{
                  fontSize: 40, fontWeight: 900, color: "#fff",
                  margin: 0, letterSpacing: "-0.5px",
                }}>
                  My{" "}
                  <span style={{ color: "#E50914" }}>Journey</span>
                </h2>
                <p style={{ color: "#555", fontSize: 15, margin: "6px 0 0", fontWeight: 500 }}>
                  The storyline behind the developer
                </p>
              </div>
            </div>
          </div>

          {/* ── Timeline Cards ── */}
          <div>
            {journeyItems.map((item, i) => (
              <JourneyCard
                key={item.id}
                item={item}
                index={i}
                isLast={i === journeyItems.length - 1}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Journey;
