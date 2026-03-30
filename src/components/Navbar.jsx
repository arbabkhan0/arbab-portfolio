import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About",        href: "#about" },
    { label: "Projects",     href: "#projects" },
    { label: "Skills",       href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact",      href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled
          ? "rgba(20, 20, 20, 0.96)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          padding: "0 40px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Left: Logo + Nav links ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {/* AK Netflix logo */}
          <a
            href="#hero"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "2rem",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#E50914",
              letterSpacing: "-1px",
              textShadow: "2px 2px 0 #8B0000, 3px 3px 0 #6b0000, 0 4px 12px rgba(229,9,20,0.4)",
              lineHeight: 1,
              textDecoration: "none",
              userSelect: "none",
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            AK
          </a>

          {/* Desktop nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
        </div>

        {/* ── Right: Resume button ── */}
        <div className="desktop-resume">
          <a
            href="https://github.com/arbabkhan0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#E50914",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "9px 22px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "all 0.25s ease",
              letterSpacing: "0.02em",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#b20710"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#E50914"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Resume
          </a>
        </div>

        {/* ── Mobile: AK logo ── */}
        <a
          href="#hero"
          className="mobile-logo"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.8rem",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#E50914",
            textDecoration: "none",
          }}
        >
          AK
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          id="mobile-menu-btn"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            width: 32,
            height: 32,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "480px" : "0",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
        className="mobile-dropdown"
      >
        <div
          style={{
            background: "rgba(14,14,14,0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid #1f1f1f",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#aaa",
                fontSize: 15,
                fontWeight: 600,
                padding: "13px 0",
                borderBottom: "1px solid #1f1f1f",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/arbabkhan0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              background: "#E50914",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              padding: "11px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Responsive visibility rules */}
      <style>{`
        .desktop-nav    { display: flex !important; }
        .desktop-resume { display: flex !important; }
        .mobile-logo    { display: none !important; }
        .mobile-menu-btn{ display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav    { display: none !important; }
          .desktop-resume { display: none !important; }
          .mobile-logo    { display: block !important; }
          .mobile-menu-btn{ display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

/* ── Nav link with hover underline ── */
const NavLink = ({ label, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#fff" : "#bbb",
        fontSize: 14,
        fontWeight: 600,
        textDecoration: "none",
        position: "relative",
        transition: "color 0.2s ease",
        letterSpacing: "0.01em",
        paddingBottom: 2,
        fontFamily: "inherit",
      }}
    >
      {label}
      <span style={{
        position: "absolute",
        bottom: -2,
        left: 0,
        height: 2,
        width: hovered ? "100%" : "0%",
        background: "#E50914",
        borderRadius: 2,
        transition: "width 0.25s ease",
      }} />
    </a>
  );
};

export default Navbar;