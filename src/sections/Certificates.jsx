import React, { useRef } from "react";
import certificates from "../data/certificates";
import CertificateCard from "../components/CertificateCard";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1jUcYVnAxDMJI6ZfTckx82q3A64-maIuY";

const Certificates = () => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    rowRef.current?.scrollBy({
      left: dir === "left" ? -600 : 600,
      behavior: "smooth",
    });
  };

  return (
    <section id="certificates" className="pt-4 pb-20 bg-[#141414]">
      <div className="px-6 md:px-10">
        {/* ── Section header ── */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              🎓 Certificates &amp;{" "}
              <span className="text-[#E50914]">Achievements</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Verified credentials from top learning platforms
            </p>
          </div>

          {/* Right side: See All + scroll buttons */}
          <div className="flex items-center gap-3">
            <a
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#E50914] hover:text-white transition-colors duration-300 underline underline-offset-2 hover:no-underline"
            >
              See All ↗
            </a>

            {/* Scroll arrows always visible in header */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2F2F2F]
                  hover:bg-[#E50914] hover:border-[#E50914] text-white
                  flex items-center justify-center text-xl leading-none
                  transition-all duration-300 hover:scale-105"
              >
                ‹
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2F2F2F]
                  hover:bg-[#E50914] hover:border-[#E50914] text-white
                  flex items-center justify-center text-xl leading-none
                  transition-all duration-300 hover:scale-105"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* ── Scrollable row ── */}
        <div className="relative group/certs">
          {/* Left arrow (appears on row hover) */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
              bg-black/90 hover:bg-[#E50914] text-white text-2xl flex items-center justify-center
              opacity-0 group-hover/certs:opacity-100 -translate-x-2 group-hover/certs:translate-x-0
              transition-all duration-300 border border-gray-700 hover:border-[#E50914] shadow-lg"
          >
            ‹
          </button>

          {/* Cards container */}
          <div
            ref={rowRef}
            className="no-scrollbar flex gap-4 overflow-x-auto pb-4 pt-1"
          >
            {certificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                link={cert.link}
              />
            ))}
            {/* Trailing spacer so last card hover doesn't clip */}
            <div className="flex-shrink-0 w-4" />
          </div>

          {/* Right arrow (appears on row hover) */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
              bg-black/90 hover:bg-[#E50914] text-white text-2xl flex items-center justify-center
              opacity-0 group-hover/certs:opacity-100 translate-x-2 group-hover/certs:translate-x-0
              transition-all duration-300 border border-gray-700 hover:border-[#E50914] shadow-lg"
          >
            ›
          </button>

          {/* Left fade gradient */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-12
            bg-gradient-to-r from-[#141414] to-transparent z-10" />
          {/* Right fade gradient */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-12
            bg-gradient-to-l from-[#141414] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;