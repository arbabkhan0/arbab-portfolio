import React from "react";

/* ── SVG Icons ── */
const PlayIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Card = ({ project }) => {
  return (
    <div className="relative flex-shrink-0 w-[320px] md:w-[360px] group/card">

      {/* ── Main card image (16:9) ── */}
      <div
        className="relative w-full rounded-lg overflow-hidden cursor-pointer select-none"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500
            group-hover/card:scale-110 group-hover/card:brightness-50"
          draggable={false}
        />

        {/* Always-visible bottom gradient + title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent
          transition-opacity duration-300 group-hover/card:opacity-0" />
        <div className="absolute bottom-0 left-0 right-0 p-3
          transition-opacity duration-300 group-hover/card:opacity-0">
          <h3 className="text-white font-bold text-sm drop-shadow-lg truncate">
            {project.title}
          </h3>
        </div>

        {/* Category badge top-left */}
        {project.category && (
          <div className="absolute top-2 left-2 z-10">
            <span className="text-[10px] font-black uppercase tracking-wider
              bg-[#E50914] text-white px-2 py-0.5 rounded-sm shadow-lg">
              {project.category}
            </span>
          </div>
        )}

        {/* ── Hover overlay — Netflix-style center controls ── */}
        <div className="absolute inset-0 flex flex-col justify-between p-4
          opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-10">

          {/* Top: match or new badge */}
          <div className="flex justify-end">
            <span className="text-[10px] font-bold text-green-400 bg-black/60
              border border-green-400/40 px-2 py-0.5 rounded">
              ● Live Project
            </span>
          </div>

          {/* Center: Removed Play + Info buttons as requested */}
          <div className="flex items-center justify-center gap-3">
          </div>
          {/* Bottom spacer */}
          <div />
        </div>
      </div>

      {/* ── Expanded info panel — slides down on hover ── */}
      <div
        className="absolute left-0 right-0 z-30
          bg-[#181818] border border-[#333] border-t-2 border-t-[#E50914]
          rounded-b-xl p-4
          max-h-0 overflow-hidden pointer-events-none opacity-0
          group-hover/card:max-h-60 group-hover/card:opacity-100 group-hover/card:pointer-events-auto
          transition-all duration-400 ease-in-out
          shadow-2xl shadow-black/80"
        style={{ top: "100%", transition: "max-h 0.35s ease, opacity 0.25s ease" }}
      >
        {/* Title without external link icon */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-black text-base leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold bg-white/8 border border-white/10
                text-gray-300 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action row (Live / GitHub) */}
        <div className="flex gap-2 pt-2 border-t border-[#2a2a2a]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5
                bg-[#2a2a2a] hover:bg-[#333] text-gray-200 text-xs font-bold
                py-2 rounded transition-colors duration-200"
            >
              <GitHubIcon /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5
                bg-[#E50914] hover:bg-[#b20710] text-white text-xs font-bold
                py-2 rounded transition-colors duration-200"
            >
              <PlayIcon /> Live Demo
            </a>
          )}
        </div>


      </div>

    </div>
  );
};

export default Card;