import React, { useRef, useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────────────────────── */
const certificates = [
  {
    id: 1,
    type: "certificate",
    title: "Graph Theory",
    issuer: "Algo University",
    date: "2026",
    icon: "🧠",
    color: "#E50914",
    link: "https://drive.google.com/file/d/1wymsT_wgNUaaOe7vZXg5kraH-ew61fXE/view?usp=drive_link",
  },
  {
    id: 2,
    type: "certificate",
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "Jul–Oct 2025",
    icon: "🔐",
    color: "#0ea5e9",
    link: "https://drive.google.com/file/d/1vh73rTMVrslbLObiIcdAceo2qmbdGrZi/view?usp=drive_link",
  },
  {
    id: 3,
    type: "certificate",
    title: "MERN Stack Development",
    issuer: "Coursera",
    date: "July 30, 2025",
    icon: "🧩",
    color: "#10b981",
    link: "https://drive.google.com/file/d/1F8ANRIDCHEPxqwmu6S0dIP8FoFJ0u8mi/view?usp=sharing",
  },
  {
    id: 4,
    type: "certificate",
    title: "C++ Programming",
    issuer: "Neocolab",
    date: "December 05, 2024",
    icon: "⚙️",
    color: "#8b5cf6",
    link: "https://drive.google.com/file/d/1crkbm9EICXrhKfCqXsO5u2gAQdOlp-2J/view?usp=drive_link",
  },
  {
    id: 5,
    type: "certificate",
    title: "Java Programming",
    issuer: "Neocolab",
    date: "May 05, 2025",
    icon: "☕",
    color: "#f59e0b",
    link: "https://drive.google.com/file/d/1HFW_DauA1Nvif1cJnrxfuqCdVYiHH845/view?usp=drive_link",
  },
  {
    id: 6,
    type: "certificate",
    title: "ChatGPT-4 Prompt Engineering & Generative AI",
    issuer: "Infosys",
    date: "December 09, 2025",
    icon: "🤖",
    color: "#ec4899",
    link: "https://drive.google.com/file/d/1IIDmCrBJT3GRNkzFvs_zzPet_7pZPlKX/view?usp=drive_link",
  },
  {
    id: 7,
    type: "certificate",
    title: "Computational Theory & Finite Automata",
    issuer: "Infosys",
    date: "Jan–Apr 2025",
    icon: "💻",
    color: "#f97316",
    link: "https://drive.google.com/file/d/1zmrBcExx0Ab2JP3TKE59fGx8c3xBWkd_/view?usp=drive_link",
  },
  {
    id: 8,
    type: "certificate",
    title: "Building AI Applications",
    issuer: "Infosys",
    date: "December 09, 2025",
    icon: "🚀",
    color: "#06b6d4",
    link: "https://drive.google.com/file/d/1dGD3E26mHLk8l8ndWMlI9joJnePqX-JK/view?usp=drive_link",
  },
  {
    id: 9,
    type: "certificate",
    title: "Introduction to Hardware & Operating Systems",
    issuer: "Coursera",
    date: "September 08, 2024",
    icon: "🖥️",
    color: "#6b7280",
    link: "https://drive.google.com/file/d/1UqOw-U_21LpENGbKrTDAP5kacjM9x_si/view?usp=drive_link",
  },
  // ── Achievements ──

  {
    id: 13,
    type: "achievement",
    title: "Certificate of Participation - HACK-IOT",
    issuer: "Lovely Professional University (LPU)",
    date: "April 16, 2024",
    icon: "🌐",
    color: "#6366f1",
    link: "https://drive.google.com/file/d/1JO3ISqA1b2BT2gFB4QkjWQTpaop0l49c/view?usp=sharing",
    badge: "Participant",
  },
  {
    id: 14,
    type: "achievement",
    title: "AI Fusion - 1st Position",
    issuer: "ADVITIYA'26",
    date: "2026",
    icon: "🥇",
    color: "#eab308",
    link: "https://drive.google.com/file/d/12TBgIxlsGJ-wC0eexwmYmqsIhEw68BEE/view?usp=sharing",
    badge: "Winner",
  },
  {
    id: 15,
    type: "achievement",
    title: "Digital Marketing with AI Workshop",
    issuer: "IIT Ropar & TechGyan",
    date: "November 09, 2025",
    icon: "📈",
    color: "#ec4899",
    link: "https://drive.google.com/file/d/1P8T4KSC0CbyH_tNdbXSLbkeRubmCSz3E/view?usp=sharing",
    badge: "Workshop",
  },
  {
    id: 16,
    type: "achievement",
    title: "CyberSec Symposium 2.0",
    issuer: "iGen & LPU",
    date: "April 03, 2024",
    icon: "🛡️",
    color: "#10b981",
    link: "https://drive.google.com/file/d/1lbN-IJNwyxxtOXaBtXxv4fUmfrWecKbM/view?usp=sharing",
    badge: "Participant",
  },
  {
    id: 17,
    type: "achievement",
    title: "SKILLX 1.0 Full Stack Workshop",
    issuer: "Skills Savvy & LPU DSO",
    date: "February 14, 2025",
    icon: "💻",
    color: "#eab308",
    link: "https://drive.google.com/file/d/1C__CVOUhM6ucu7ec1fC1U_0NuLcSZf6S/view?usp=sharing",
    badge: "Participant",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   TABS CONFIG
────────────────────────────────────────────────────────────────────────── */
const TABS = [
  { id: "all", label: "All", icon: "🎬", color: "#E50914" },
  { id: "certificate", label: "Certificates", icon: "📜", color: "#0ea5e9" },
  { id: "achievement", label: "Achievements", icon: "🏆", color: "#f59e0b" },
];

/* ──────────────────────────────────────────────────────────────────────────
   CERT CARD (unchanged visual design)
────────────────────────────────────────────────────────────────────────── */
const CertCard = ({ title, issuer, date, icon, color, link, img, index, badge }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* ── Netflix Top 10 Number Behind Card ── */}
      <div style={{
        position: "absolute",
        top: -40,
        left: -80,
        fontSize: "360px",
        fontWeight: 900,
        color: "transparent",
        WebkitTextStroke: "6px rgba(255, 255, 255, 0.85)",
        zIndex: -1,
        lineHeight: 0.8,
        letterSpacing: "-0.04em",
        pointerEvents: "none",
        userSelect: "none",
        fontFamily: 'system-ui, -apple-system, sans-serif, impact',
        transition: "all 0.5s ease",
        transform: visible ? (hovered ? "scale(1.03) translate(-10px, 0)" : "scale(1) translate(0)") : "scale(0.8)",
        opacity: visible ? (hovered ? 1 : 0.85) : 0,
      }}>
        {index + 1}
      </div>

      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          width: "100%",
          borderRadius: 16,
          background: hovered ? "#1e1e1e" : "#181818",
          border: `1px solid ${hovered ? color + "66" : "#2a2a2a"}`,
          overflow: "visible",
          textDecoration: "none",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          transform: visible
            ? hovered
              ? "translateY(-8px) scale(1.02)"
              : "translateY(0) scale(1)"
            : "translateY(30px) scale(0.95)",
          opacity: visible ? 1 : 0,
          transitionDelay: visible ? `${(index % 4) * 60}ms` : "0ms",
          boxShadow: hovered
            ? `0 20px 50px ${color}22, 0 0 0 1px ${color}33`
            : "0 4px 16px rgba(0,0,0,0.4)",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {/* Top color band */}
        <div
          style={{
            height: 6,
            background: `linear-gradient(90deg, ${color}cc, ${color}44)`,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />

        {/* Icon area */}
        <div
          style={{
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: img ? "rgba(0,0,0,0.4)" : `radial-gradient(ellipse at center, ${color}15 0%, transparent 70%)`,
            overflow: "hidden",
            borderBottom: `1px solid ${color}11`
          }}
          onClick={() => link !== "#" && window.open(link, "_blank")}
        >
          {img ? (
            <img
              src={img}
              alt="Certificate Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "8px",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: hovered ? "scale(1.08)" : "scale(1)",
                filter: hovered ? "brightness(1.1)" : "brightness(0.9)"
              }}
              draggable={false}
            />
          ) : (
            <>
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: `1px solid ${color}22`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: `${color}15`,
                  border: `2px solid ${color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hovered ? "scale(1.15) rotate(5deg)" : "scale(1)",
                  zIndex: 1,
                  boxShadow: hovered ? `0 0 20px ${color}40` : "none",
                }}
              >
                {icon}
              </div>
            </>
          )}

          {/* Badge (Verified / custom badge for achievements) */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: `${color}22`,
              border: `1px solid ${color}55`,
              borderRadius: 99,
              padding: "4px 10px",
              fontSize: 10,
              fontWeight: 800,
              color: color,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 4,
              backdropFilter: "blur(4px)"
            }}
          >
            ✓ {badge || "Verified"}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "18px 20px 20px" }} onClick={() => link !== "#" && window.open(link, "_blank")}>
          <h3
            style={{
              color: hovered ? "#fff" : "#e0e0e0",
              fontSize: 15,
              fontWeight: 800,
              margin: "0 0 8px",
              lineHeight: 1.4,
              transition: "color 0.2s",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: 42,
            }}
          >
            {title}
          </h3>

          <div
            style={{
              height: 1,
              background: `linear-gradient(90deg, ${color}44, transparent)`,
              margin: "12px 0",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#aaa", fontSize: 12, margin: "0 0 4px", fontWeight: 700 }}>
                {issuer}
              </p>
              <p style={{ color: "#666", fontSize: 11, margin: 0, fontWeight: 600 }}>Issued {date}</p>
            </div>

            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: hovered ? color : "#2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                transition: "all 0.3s ease",
                flexShrink: 0,
                color: hovered ? "#fff" : "#666",
                transform: hovered ? "translate(2px, -2px)" : "none",
              }}
            >
              ↗
            </div>
          </div>
        </div>

        {/* Bottom hover bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: color,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   MAIN SECTION
────────────────────────────────────────────────────────────────────────── */
const Certificates = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [titleVisible, setTitleVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState("all");
  const titleRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
      { threshold: 0.1 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  // Smooth tab switch with fade animation
  const handleTabSwitch = (tabId) => {
    if (tabId === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setDisplayTab(tabId);
      setIsAnimating(false);
    }, 200);
  };

  const filtered =
    displayTab === "all"
      ? certificates
      : certificates.filter((c) => c.type === displayTab);

  const activeTabData = TABS.find((t) => t.id === activeTab);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .cert-section { padding: 60px 0 !important; }
          .cert-tabs { gap: 8px !important; flex-wrap: wrap !important; }
        }
        @keyframes fadeInGrid {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <section
        id="certificates"
        className="cert-section"
        style={{
          padding: "100px 0",
          background: "#141414",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute", inset: 0, opacity: 0.02,
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: "absolute", bottom: -200, left: -200,
            width: 600, height: 600,
            background: "radial-gradient(circle, #E5091410 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>

          {/* ── Header ── */}
          <div
            ref={titleRef}
            style={{
              marginBottom: 36,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 5, height: 48, background: "linear-gradient(180deg, #E50914, #E5091444)", borderRadius: 4 }} />
                <div>
                  <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>
                    Certificates &{" "}
                    <span style={{ color: "#E50914" }}>Achievements</span>
                  </h2>
                  <p style={{ color: "#666", fontSize: 15, margin: "6px 0 0", fontWeight: 500 }}>
                    Verified credentials from top platforms
                  </p>
                </div>
              </div>
            </div>

            {/* See All button */}
            <a
              href="https://drive.google.com/drive/folders/1jUcYVnAxDMJI6ZfTckx82q3A64-maIuY"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(229,9,20,0.1)",
                border: "1px solid #E5091444",
                color: "#E50914",
                fontSize: 14,
                fontWeight: 700,
                padding: "10px 24px",
                borderRadius: 99,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#E50914";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(229,9,20,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(229,9,20,0.1)";
                e.currentTarget.style.color = "#E50914";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View All Drive ↗
            </a>
          </div>

          {/* ── Arsenal-style Filter Tabs ── */}
          <div
            className="cert-tabs"
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 40,
              position: "relative",
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSwitch(tab.id)}
                  style={{
                    padding: "10px 26px",
                    borderRadius: 99,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    border: isActive
                      ? `1.5px solid ${tab.color}`
                      : "1.5px solid #2a2a2a",
                    background: isActive
                      ? tab.id === "all"
                        ? tab.color
                        : `${tab.color}22`
                      : "#1a1a1a",
                    color: isActive
                      ? tab.id === "all" ? "#fff" : tab.color
                      : "#555",
                    boxShadow: isActive
                      ? `0 0 20px ${tab.color}40, 0 0 0 1px ${tab.color}20`
                      : "none",
                    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    letterSpacing: "0.02em",
                  }}
                >
                  <span style={{ marginRight: 6 }}>{tab.icon}</span>
                  {tab.label}
                  {/* Count badge */}
                  <span style={{
                    marginLeft: 8,
                    background: isActive ? `${tab.color}33` : "#222",
                    color: isActive ? tab.color : "#444",
                    borderRadius: 99,
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "2px 7px",
                    transition: "all 0.25s ease",
                  }}>
                    {tab.id === "all"
                      ? certificates.length
                      : certificates.filter((c) => c.type === tab.id).length}
                  </span>
                  {/* Active underline / glow bar */}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: -2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: 3,
                      background: tab.color,
                      borderRadius: 4,
                      boxShadow: `0 0 10px ${tab.color}`,
                      animation: "tabBarIn 0.25s ease forwards",
                    }} />
                  )}
                </button>
              );
            })}

            {/* Subtle count label */}
            <div style={{
              marginLeft: "auto",
              alignSelf: "center",
              color: "#444",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}>
              {filtered.length} {activeTab === "all" ? "items" : activeTab === "certificate" ? "certificates" : "achievements"}
            </div>
          </div>

          {/* ── CSS Grid of Cards ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: 20,
              marginTop: 8,
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "translateY(12px)" : "translateY(0)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            {filtered.map((cert, i) => (
              <CertCard key={cert.id} {...cert} index={i} />
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @keyframes tabBarIn {
          from { width: 0%; opacity: 0; }
          to   { width: 60%; opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Certificates;