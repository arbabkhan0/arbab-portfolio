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
    { label: "About", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#141414]/95 shadow-xl shadow-black/40 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
    >
      <div className="w-full pl-4 pr-6 md:pl-6 md:pr-10 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {/* AK — Netflix-style logo */}
          <a
            href="#hero"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "2.2rem",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#E50914",
              letterSpacing: "-1px",
              textShadow:
                "2px 2px 0 #8B0000, 3px 3px 0 #6b0000, 0 4px 12px rgba(229,9,20,0.4)",
              lineHeight: 1,
              textDecoration: "none",
              userSelect: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            AK
          </a>

          {/* Nav links — right next to logo */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E50914] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile: AK Netflix-style logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.9rem",
            fontWeight: 900,
            fontStyle: "italic",
            color: "#E50914",
            letterSpacing: "-1px",
            textShadow: "1px 2px 0 #8B0000, 2px 3px 0 #6b0000",
            lineHeight: 1,
            textDecoration: "none",
          }}
          className="md:hidden"
        >
          AK
        </a>

        {/* Right side: Resume button */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/arbabkhan0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E50914] hover:bg-[#b20710] text-white text-sm font-bold px-5 py-2 rounded transition-all duration-300 hover:scale-105 active:scale-100"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#141414]/98 backdrop-blur-md px-6 pb-6 border-t border-gray-800/50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-300 hover:text-white py-3 border-b border-gray-800/50 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/arbabkhan0"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-[#E50914] hover:bg-[#b20710] text-white text-center py-2.5 rounded font-bold text-sm transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;