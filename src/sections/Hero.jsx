import React from "react";

const Hero = () => {
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

        {/* Static subtitle */}
        <div
          className="flex items-center gap-3 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">
            Full Stack Developer (MERN)
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          Building scalable web applications and smart solutions
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            View Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10
              text-white font-bold px-8 py-3.5 rounded transition-all duration-300"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
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