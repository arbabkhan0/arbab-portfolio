import React, { useState } from "react";

const ISSUER_COLORS = {
  Udemy: "from-purple-600/70 to-purple-900/60",
  Coursera: "from-blue-600/70 to-blue-900/60",
  freeCodeCamp: "from-green-600/70 to-green-900/60",
  "Infosys Springboard": "from-sky-600/70 to-sky-900/60",
  NPTEL: "from-emerald-600/70 to-emerald-900/60",
  Google: "from-yellow-500/70 to-yellow-900/60",
  IBM: "from-indigo-600/70 to-indigo-900/60",
};

const CertificateCard = ({ title, issuer, date, link }) => {
  const [hovered, setHovered] = useState(false);
  const gradient = ISSUER_COLORS[issuer] || "from-[#E50914]/60 to-[#E50914]/20";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 w-64 rounded-xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/60
        bg-[#2F2F2F] border border-[#3a3a3a] hover:border-[#E50914]/40 group"
    >
      {/* Red / colored gradient top area */}
      <div className={`relative h-28 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Background shimmer */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_white_0%,_transparent_70%)]" />

        {/* Trophy emoji */}
        <span
          className="text-5xl select-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          role="img"
          aria-label="trophy"
        >
          🏆
        </span>

        {/* "View Certificate" overlay on hover */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white text-sm font-bold tracking-wide">
            View Certificate ↗
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Issuer & date row */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs font-medium truncate">
            {issuer}
          </span>
          <span className="text-gray-500 text-xs ml-2 flex-shrink-0">
            {date}
          </span>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
