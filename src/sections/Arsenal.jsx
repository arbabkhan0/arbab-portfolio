import React, { useState, useEffect, useRef } from "react";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "React.js",      icon: "⚛️", level: 90 },
      { name: "JavaScript",    icon: "🟨", level: 88 },
      { name: "Tailwind CSS",  icon: "🎨", level: 85 },
      { name: "Bootstrap",     icon: "🅱️", level: 80 },
      { name: "HTML & CSS",    icon: "🌐", level: 95 },
    ],
  },
  {
    label: "Backend",
    color: "#68A063",
    skills: [
      { name: "Node.js",    icon: "🟢", level: 78 },
      { name: "Express.js", icon: "⚡", level: 75 },
      { name: "PHP",        icon: "🐘", level: 70 },
      { name: "REST APIs",  icon: "🔗", level: 82 },
    ],
  },
  {
    label: "Database",
    color: "#47A248",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 74 },
      { name: "MySQL",   icon: "🐬", level: 72 },
    ],
  },
  {
    label: "Tools",
    color: "#F05032",
    skills: [
      { name: "Git & GitHub", icon: "🐙", level: 88 },
      { name: "Postman",      icon: "📮", level: 80 },
      { name: "Figma",        icon: "🎯", level: 75 },
      { name: "VS Code",      icon: "💻", level: 92 },
      { name: "Adobe",        icon: "🖌️", level: 65 },
    ],
  },
  {
    label: "Languages",
    color: "#F7DF1E",
    skills: [
      { name: "JavaScript", icon: "🟨", level: 88 },
      { name: "Java",       icon: "☕", level: 70 },
      { name: "C/C++",      icon: "⚙️", level: 65 },
      { name: "PHP",        icon: "🐘", level: 70 },
    ],
  },
];

const LEARNING = [
  "TypeScript", "Next.js", "Docker", "System Design", "DSA (Advanced)",
  "GraphQL", "Redis", "AWS", "TypeScript", "Next.js", "Docker",
  "System Design", "DSA (Advanced)", "GraphQL", "Redis", "AWS",
];

/* ── Animated bar on mount ── */
const SkillBar = ({ level, color }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ height: 3, background: "#2F2F2F", borderRadius: 99, overflow: "hidden", marginTop: 6 }}>
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: 99,
          transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: `0 0 8px ${color}55`,
        }}
      />
    </div>
  );
};

/* ── Single skill card ── */
const SkillCard = ({ name, icon, level, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1E1E1E" : "#181818",
        border: `1px solid ${hovered ? color + "55" : "#2F2F2F"}`,
        borderRadius: 12,
        padding: "14px 16px",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px) scale(1.03)" : "none",
        boxShadow: hovered ? `0 8px 24px ${color}22, 0 0 0 1px ${color}33` : "none",
        cursor: "default",
        minWidth: 130,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
        <span style={{ color: hovered ? "#fff" : "#ccc", fontSize: 13, fontWeight: 600, transition: "color 0.2s" }}>
          {name}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: 8 }}>
          <SkillBar level={level} color={color} />
        </div>
        <span style={{ fontSize: 11, color: hovered ? color : "#555", fontWeight: 700, minWidth: 30, textAlign: "right", transition: "color 0.2s" }}>
          {level}%
        </span>
      </div>
    </div>
  );
};

/* ── Main Arsenal section ── */
const Arsenal = () => {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...SKILL_CATEGORIES.map((c) => c.label)];

  const activeCategory = SKILL_CATEGORIES.find((c) => c.label === active);
  const activeColor = activeCategory?.color ?? "#E50914";

  const filtered =
    active === "All"
      ? SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, color: c.color })))
      : (activeCategory?.skills ?? []).map((s) => ({ ...s, color: activeColor }));

  return (
    <section
      id="skills"
      style={{
        padding: "80px 0",
        background: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative grid lines */}
      <div
        style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Red glow orb top-right */}
      <div
        style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400,
          background: "radial-gradient(circle, #E5091422 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 4, height: 36, background: "#E50914", borderRadius: 2 }} />
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>
              My <span style={{ color: "#E50914" }}>Arsenal</span> ⚔️
            </h2>
          </div>
          <p style={{ color: "#666", fontSize: 14, margin: "0 0 0 16px" }}>
            Tools and technologies I wield on a daily basis
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {tabs.map((tab) => {
            const tabColor = SKILL_CATEGORIES.find((c) => c.label === tab)?.color ?? "#E50914";
            const isActive = active === tab;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 99,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: isActive
                    ? `1.5px solid ${tab === "All" ? "#E50914" : tabColor}`
                    : "1.5px solid #2F2F2F",
                  background: isActive
                    ? tab === "All"
                      ? "#E50914"
                      : `${tabColor}22`
                    : "#1a1a1a",
                  color: isActive
                    ? tab === "All" ? "#fff" : tabColor
                    : "#666",
                  boxShadow: isActive
                    ? `0 0 12px ${tab === "All" ? "#E5091444" : tabColor + "33"}`
                    : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── Skill Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 12,
            marginBottom: 56,
          }}
        >
          {filtered.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} {...skill} />
          ))}
        </div>

        {/* ── Stats Row ── */}
        {active === "All" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 12,
              marginBottom: 48,
              padding: "20px 24px",
              background: "#1a1a1a",
              border: "1px solid #2F2F2F",
              borderRadius: 16,
            }}
          >
            {[
              { label: "Total Skills",    value: SKILL_CATEGORIES.flatMap((c) => c.skills).length, suffix: "+" },
              { label: "Categories",      value: SKILL_CATEGORIES.length,                           suffix: "" },
              { label: "Avg Proficiency", value: Math.round(SKILL_CATEGORIES.flatMap((c) => c.skills).reduce((a, s) => a + s.level, 0) / SKILL_CATEGORIES.flatMap((c) => c.skills).length), suffix: "%" },
              { label: "Learning",        value: [...new Set(LEARNING)].length,                      suffix: "+" },
            ].map(({ label, value, suffix }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#E50914", letterSpacing: "-1px" }}>
                  {value}{suffix}
                </div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Currently Learning Marquee ── */}
        <div>
          <p style={{ color: "#444", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12, fontWeight: 700 }}>
            Currently Learning →
          </p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(90deg, #141414, transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(-90deg, #141414, transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div
              style={{
                display: "flex",
                gap: 10,
                width: "max-content",
                animation: "marquee 22s linear infinite",
              }}
            >
              {[...LEARNING, ...LEARNING].map((item, i) => (
                <span
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "#E509140D",
                    border: "1px solid #E5091433",
                    color: "#E50914",
                    fontSize: 12,
                    padding: "6px 16px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee keyframes injected inline */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Arsenal;