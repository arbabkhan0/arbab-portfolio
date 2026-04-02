import React, { useState, useEffect, useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    icon: "🖥️",
    color: "#61DAFB",
    description: "Building beautiful, responsive interfaces",
    skills: [
      { name: "React.js", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "🟨", level: 88 },
      { name: "Tailwind CSS", icon: "🎨", level: 85 },
      { name: "Bootstrap", icon: "🅱️", level: 80 },
      { name: "HTML & CSS", icon: "🌐", level: 95 },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "#68A063",
    description: "Powering apps with robust server logic",
    skills: [
      { name: "Node.js", icon: "🟢", level: 78 },
      { name: "Express.js", icon: "⚡", level: 75 },
      { name: "PHP", icon: "🐘", level: 70 },
      { name: "REST APIs", icon: "🔗", level: 82 },
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    color: "#47A248",
    description: "Storing and querying data efficiently",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 74 },
      { name: "MySQL", icon: "🐬", level: 72 },
    ],
  },
  {
    label: "Tools",
    icon: "🛠️",
    color: "#F05032",
    description: "Dev workflow and productivity tools",
    skills: [
      { name: "Git & GitHub", icon: "🐙", level: 88 },
      { name: "Postman", icon: "📮", level: 80 },
      { name: "Figma", icon: "🎯", level: 75 },
      { name: "VS Code", icon: "💻", level: 92 },
      { name: "Adobe", icon: "🖌️", level: 65 },
    ],
  },
  {
    label: "Languages",
    icon: "💬",
    color: "#F7DF1E",
    description: "Programming languages in my arsenal",
    skills: [
      { name: "JavaScript", icon: "🟨", level: 85 },
      { name: "Java", icon: "☕", level: 70 },
      { name: "C/C++", icon: "⚙️", level: 85 },
      { name: "PHP", icon: "🐘", level: 70 },
    ],
  },
];

const LEARNING = [
  "TypeScript", "Next.js", "Docker", "System Design", "GraphQL", "Redis", "AWS",
  "TypeScript", "Next.js", "Docker", "System Design", "GraphQL", "Redis", "AWS",
];

/* ─── Animated Progress Bar ─────────────────────────────────────────────────── */
const SkillBar = ({ level, color, animated }) => {
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
    <div
      ref={ref}
      style={{
        height: 5,
        background: "#252525",
        borderRadius: 99,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${animated ? width : level}%`,
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          borderRadius: 99,
          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: `0 0 10px ${color}55`,
        }}
      />
    </div>
  );
};

/* ─── Single skill row inside a card ──────────────────────────────────────── */
const SkillRow = ({ name, icon, level, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "10px 12px",
        borderRadius: 10,
        background: hovered ? `${color}0D` : "transparent",
        transition: "background 0.2s ease",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 17 }}>{icon}</span>
          <span style={{
            color: hovered ? "#fff" : "#ccc",
            fontSize: 14,
            fontWeight: 600,
            transition: "color 0.2s",
          }}>
            {name}
          </span>
        </div>
        <span style={{
          fontSize: 13,
          fontWeight: 700,
          color: hovered ? color : "#555",
          transition: "color 0.2s",
          minWidth: 36,
          textAlign: "right",
        }}>
          {level}%
        </span>
      </div>
      <SkillBar level={level} color={color} animated />
    </div>
  );
};

/* ─── Netflix-style Category Card ────────────────────────────────────────── */
const CategoryCard = ({ label, icon, color, description, skills, isActive, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isActive ? "#1c1c1c" : "#181818",
        border: `1.5px solid ${isActive ? color + "66" : hovered ? "#333" : "#222"}`,
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isActive
          ? "translateY(-4px) scale(1.01)"
          : hovered ? "translateY(-2px)" : "none",
        boxShadow: isActive
          ? `0 20px 60px ${color}20, 0 0 0 1px ${color}33`
          : hovered ? "0 8px 30px #00000050" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Card top accent bar */}
      <div
        style={{
          height: isActive ? 4 : 2,
          background: isActive
            ? `linear-gradient(90deg, ${color}, ${color}88)`
            : `linear-gradient(90deg, ${color}44, transparent)`,
          transition: "height 0.3s ease",
        }}
      />

      {/* Card header */}
      <div style={{ padding: "20px 22px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: isActive ? `${color}22` : `${color}11`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              transition: "background 0.3s ease",
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <div>
            <h3 style={{
              color: isActive ? "#fff" : "#ccc",
              fontSize: 16,
              fontWeight: 800,
              margin: 0,
              transition: "color 0.2s",
            }}>
              {label}
            </h3>
            <div style={{ fontSize: 12, color: "#555", marginTop: 1 }}>
              {skills.length} skills
            </div>
          </div>
          {isActive && (
            <div
              style={{
                marginLeft: "auto",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 8px ${color}`,
                flexShrink: 0,
              }}
            />
          )}
        </div>
        <p style={{ color: "#444", fontSize: 12, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
          {description}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#222", margin: "0 22px" }} />

      {/* Skills list */}
      <div style={{ padding: "8px 10px 14px", flex: 1 }}>
        {skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} color={color} />
        ))}
      </div>
    </div>
  );
};

/* ─── Stats Banner ───────────────────────────────────────────────────────── */
const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);
const avgLevel = Math.round(allSkills.reduce((a, s) => a + s.level, 0) / allSkills.length);

const STATS = [
  { value: `${allSkills.length}+`, label: "Total Skills" },
  { value: `${SKILL_CATEGORIES.length}`, label: "Categories" },
  { value: `${avgLevel}%`, label: "Avg Proficiency" },
  { value: "7+", label: "Currently Learning" },
];

/* ─── Main Arsenal Section ───────────────────────────────────────────────── */
const Arsenal = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...SKILL_CATEGORIES.map((c) => c.label)];

  const displayedCategories =
    activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.label === activeTab);

  return (
    <section
      id="skills"
      className="skills-section"
      style={{
        padding: "90px 0 80px",
        background: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          pointerEvents: "none",
        }}
      />
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 500, height: 500,
        background: "radial-gradient(circle, #E5091418 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -80,
        width: 400, height: 400,
        background: "radial-gradient(circle, #61DAFB10 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="skills-container" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", position: "relative" }}>

        {/* ── Section Header ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
              <div style={{ width: 5, height: 44, background: "linear-gradient(180deg, #E50914, #E5091455)", borderRadius: 3 }} />
              <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>
                My <span style={{ color: "#E50914" }}>Arsenal</span> ⚔️
              </h2>
            </div>
            <p style={{ color: "#555", fontSize: 15, margin: "0", fontWeight: 500 }}>
              Tools and technologies I wield on a daily basis
            </p>
          </div>

          {/* Stats strip */}
          <div style={{ display: "flex", gap: 24 }}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#E50914", letterSpacing: "-0.5px", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 11, color: "#444", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {tabs.map((tab) => {
            const cat = SKILL_CATEGORIES.find((c) => c.label === tab);
            const tabColor = cat?.color ?? "#E50914";
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "9px 22px",
                  borderRadius: 99,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: isActive
                    ? `1.5px solid ${tab === "All" ? "#E50914" : tabColor}`
                    : "1.5px solid #2a2a2a",
                  background: isActive
                    ? tab === "All" ? "#E50914" : `${tabColor}22`
                    : "#1a1a1a",
                  color: isActive ? (tab === "All" ? "#fff" : tabColor) : "#555",
                  boxShadow: isActive
                    ? `0 0 16px ${tab === "All" ? "#E5091440" : tabColor + "30"}`
                    : "none",
                  transition: "all 0.25s ease",
                  fontFamily: "inherit",
                }}
              >
                {cat?.icon && <span style={{ marginRight: 6 }}>{cat.icon}</span>}
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── Category Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: activeTab === "All"
              ? "repeat(auto-fill, minmax(280px, 1fr))"
              : "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
            marginBottom: 56,
            transition: "all 0.3s ease",
          }}
        >
          {displayedCategories.map((cat) => (
            <CategoryCard
              key={cat.label}
              {...cat}
              isActive={activeTab === cat.label}
              onClick={() => setActiveTab(activeTab === cat.label ? "All" : cat.label)}
            />
          ))}
        </div>

        {/* ── Currently Learning Marquee ── */}
        <div>
          <p style={{
            color: "#3a3a3a",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            marginBottom: 14,
            fontWeight: 800,
          }}>
            Currently Learning →
          </p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #141414, transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(-90deg, #141414, transparent)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ display: "flex", gap: 10, width: "max-content", animation: "marquee 24s linear infinite" }}>
              {[...LEARNING, ...LEARNING].map((item, i) => (
                <span
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "#E509140D",
                    border: "1px solid #E5091430",
                    color: "#E50914",
                    fontSize: 13,
                    padding: "8px 20px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .skills-section { padding: 60px 0 40px !important; }
          .skills-container { padding: 0 20px !important; }
          #skills > div {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Arsenal;