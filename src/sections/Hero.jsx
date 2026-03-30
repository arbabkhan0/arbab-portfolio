import React, { useState, useEffect } from "react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Web Security Builder",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length + 1)),
        75
      );
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        35
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0000] to-[#141414]" />

      {/* Red atmospheric glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#E50914]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl">

        {/* Available for work badge */}
        <div className="flex items-center gap-2.5 mb-8 animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          Hi, I'm{" "}
          <span className="text-[#E50914]">Arbab Khan</span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          className="flex items-center gap-3 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">
            {displayed}
          </span>
          <span className="inline-block w-0.5 h-8 md:h-10 bg-[#E50914] animate-pulse rounded" />
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          {/* MERN Stack Developer crafting scalable, secure, and beautiful and interative web





          hvaschivsdcvdcvh
          scdkjsvdcvwdkcvh
          hvcdkhvcvwcvk */}
          applications. Currently at{" "}
          <span className="text-gray-200 font-medium">
            Lovely Professional University
          </span>
          , Punjab 🇮🇳
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.55s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-[#E50914] hover:bg-[#b20710] text-white font-bold px-8 py-3.5 rounded
              transition-all duration-300 hover:scale-105 active:scale-100 shadow-lg shadow-[#E50914]/30"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            View Projects
          </a>
          <a
            href="https://github.com/arbabkhan0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10
              text-white font-bold px-8 py-3.5 rounded transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub ↗
          </a>
        </div>

        {/* Quick stat chips */}
        <div
          className="flex flex-wrap gap-3 mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          {[
            { value: "3+", label: "Projects" },
            { value: "100+", label: "LeetCode" },
            { value: "90%", label: "AI Accuracy" },
            { value: "7.28", label: "CGPA" },
          ].map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
            >
              <span className="text-[#E50914] font-bold text-sm">{chip.value}</span>
              <span className="text-gray-400 text-xs">{chip.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-float">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;