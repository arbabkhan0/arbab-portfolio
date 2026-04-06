import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "";
      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      // Highlight the last item if scrolled to the absolute bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        current = navLinks[navLinks.length - 1].href.substring(1);
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="nav-container"
        style={{
          maxWidth: "100%",
          padding: "0 40px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* ── Left: Logo ── */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* AK Profile logo */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #E50914 0%, #8B0000 100%)",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 700,
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "1px",
              textDecoration: "none",
              userSelect: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              flexShrink: 0,
              boxShadow: "0 4px 10px rgba(229, 9, 20, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(229, 9, 20, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(229, 9, 20, 0.3)";
            }}
          >
            AK
          </a>

        </div>

        {/* ── Center: Desktop nav links ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              {...link}
              isActive={activeSection === link.href.substring(1)}
            />
          ))}
        </div>

        {/* ── Right: Resume button ── */}
        <div className="desktop-resume">
          <a
            href="/Arbab%20specialized-CV.pdf"
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: isActive ? "#E50914" : "#aaa",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "13px 0",
                  borderBottom: "1px solid #1f1f1f",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = isActive ? "#E50914" : "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#E50914" : "#aaa")}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/Arbab%20specialized-CV.pdf"
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

      <style>{`
        .desktop-nav    { display: flex !important; }
        .desktop-resume { display: flex !important; }
        .mobile-menu-btn{ display: none !important; }

        @media (max-width: 768px) {
          .nav-container  { padding: 0 20px !important; }
          .desktop-nav    { display: none !important; }
          .desktop-resume { display: none !important; }
          .mobile-menu-btn{ display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

/* ── Nav link with hover underline ── */
const NavLink = ({ label, href, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const showLine = hovered || isActive;

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: showLine ? "#fff" : "#bbb",
        fontSize: 16,
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
        width: showLine ? "100%" : "0%",
        background: "#E50914",
        borderRadius: 2,
        transition: "width 0.25s ease",
      }} />
    </a>
  );
};

export default Navbar;