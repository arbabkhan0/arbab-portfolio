import React, { useRef, useState, useEffect } from "react";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "Coursera",
    date: "2024",
    icon: "🧩",
    color: "#0ea5e9",
    link: "https://drive.google.com/file/d/1F8ANRIDCHEPxqwmu6S0dIP8FoFJ0u8mi/view?usp=sharing",
  },
  {
    id: 2,
    title: "C++ Programming",
    issuer: "Neocolab",
    date: "2024",
    icon: "⚙️",
    color: "#8b5cf6",
    link: "https://drive.google.com/file/d/1crkbm9EICXrhKfCqXsO5u2gAQdOlp-2J/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Java Programming",
    issuer: "Neocolab",
    date: "2024",
    icon: "☕",
    color: "#f59e0b",
    link: "https://drive.google.com/file/d/1HFW_DauA1Nvif1cJnrxfuqCdVYiHH845/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "2024",
    icon: "🔐",
    color: "#E50914",
    link: "https://drive.google.com/file/d/1vh73rTMVrslbLObiIcdAceo2qmbdGrZi/view?usp=drive_link",
  },
  {
    id: 5,
    title: "ChatGPT-4 Prompt Engineering & Generative AI",
    issuer: "Infosys",
    date: "2024",
    icon: "🤖",
    color: "#10b981",
    link: "https://drive.google.com/file/d/1IIDmCrBJT3GRNkzFvs_zzPet_7pZPlKX/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Computational Theory & Finite Automata",
    issuer: "Infosys",
    date: "2024",
    icon: "🧠",
    color: "#f97316",
    link: "https://drive.google.com/file/d/1zmrBcExx0Ab2JP3TKE59fGx8c3xBWkd_/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Building AI Applications",
    issuer: "Infosys",
    date: "2024",
    icon: "🚀",
    color: "#06b6d4",
    link: "https://drive.google.com/file/d/1dGD3E26mHLk8l8ndWMlI9joJnePqX-JK/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Introduction to Hardware & Operating Systems",
    issuer: "Coursera",
    date: "2024",
    icon: "💻",
    color: "#ec4899",
    link: "https://drive.google.com/file/d/1UqOw-U_21LpENGbKrTDAP5kacjM9x_si/view?usp=drive_link",
  },
];

const CertCard = ({ title, issuer, date, icon, color, link, index }) => {
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
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        width: "100%",
        borderRadius: 16,
        background: hovered ? "#1e1e1e" : "#181818",
        border: `1px solid ${hovered ? color + "66" : "#2a2a2a"}`,
        overflow: "hidden",
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
          background: `radial-gradient(ellipse at center, ${color}15 0%, transparent 70%)`,
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
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
        
        {/* Icon */}
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

        {/* Verified badge */}
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
          }}
        >
          ✓ Verified
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px" }}>
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

        {/* Divider */}
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

          {/* Arrow */}
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
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />
    </a>
  );
};

const Certificates = () => {
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
    <section
      id="certificates"
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
            marginBottom: 48,
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

        {/* ── CSS Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
          marginTop: 20
        }}>
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} {...cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;