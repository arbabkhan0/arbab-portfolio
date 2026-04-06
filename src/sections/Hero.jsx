import React from "react";
import heroVideo from "../assets/hero section.mp4";

const Hero = () => {
  return (
    <section

      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ── Background Video Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlays to maintain focus on the text and cinematic feel */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent z-10" />
      </div>

      {/* Red atmospheric glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#E50914]/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mt-16 md:mt-24">

        {/* Green Ping Badge */}
        <div className="flex items-center gap-2.5 mb-6 animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46d369] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#46d369]" />
          </span>
          <span className="text-[#46d369] text-xs md:text-sm font-bold tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl block mb-2 font-bold text-gray-200">Hii, I'm</span>
          <span className="text-[#E50914]">Arbab Khan</span>
        </h1>

        {/* Metadata Row */}
        <div
          className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-bold text-gray-300 mb-6 drop-shadow-md animate-fade-in-up flex-wrap"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
        >
          <span className="text-[#46d369]">99% Match</span>
          <span>{new Date().getFullYear()}</span>
          <span className="border border-gray-400 bg-black/40 rounded px-1.5 py-0.5 text-[10px] sm:text-xs text-white">U/A 16+</span>
          <span>Web Developer</span>
          <span className="border border-gray-400 bg-black/ 40 rounded px-1.5 py-0.5 text-[9px] sm:text-[10px]">HD</span>
        </div>

        {/* Synopsis */}
        <p
          className="text-white text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-snug animate-fade-in-up font-medium"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards", textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
        >
          A passionate Web Developer specializing in the MERN stack. Building scalable web applications, creating smart solutions, and pushing the boundaries of web UI/UX.
        </p>

        {/* Netflix CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-3 bg-[#E50914] text-white font-bold px-6 py-2.5 rounded md:px-8 md:py-3 transition-colors hover:bg-[#b20710] shadow-lg shadow-[#E50914]/20 active:scale-95"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-lg md:text-xl">view projects</span>
          </a>
          <a
            href="#about"
            className="flex items-center justify-center gap-3 bg-[rgba(109,109,110,0.7)] text-white font-bold px-6 py-2.5 rounded md:px-8 md:py-3 transition-opacity hover:bg-[rgba(109,109,110,0.4)] active:scale-95"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span className="text-lg md:text-xl">More Info</span>
          </a>
        </div>

        {/* Scaled down Contact Pills */}
        <div
          className="flex flex-wrap gap-3 animate-fade-in-up pointer-events-auto"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/arbab-khan0/",
              icon: (
                <svg className="w-[16px] h-[16px] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )
            },
            {
              label: "GitHub",
              href: "https://github.com/arbabkhan0",
              icon: (
                <svg className="w-[16px] h-[16px] text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              )
            },
            {
              label: "Email",
              href: "mailto:arbabkhanshab@gmail.com",
              icon: (
                <svg className="w-[16px] h-[16px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              label: "Mobile",
              href: "tel:+918865921538",
              icon: (
                <svg className="w-[16px] h-[16px] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-black/40 border border-white/20 hover:border-white hover:bg-white/10 rounded-full px-4 py-1.5 transition-all duration-300"
            >
              <div className="group-hover:text-white transition-colors duration-300">
                {chip.icon}
              </div>
              <span className="text-gray-300 font-medium text-xs group-hover:text-white transition-colors duration-300">{chip.label}</span>
            </a>
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