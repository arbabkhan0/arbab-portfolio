import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";

const Row = ({ title, data }) => {
  const rowRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic added cleanly
  useEffect(() => {
    let interval;
    if (!isPaused && data && data.length > 0) {
      interval = setInterval(() => {
        if (rowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            rowRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            rowRef.current.scrollBy({ left: 340, behavior: "smooth" });
          }
        }
      }, 2000); // 2 seconds interval
    }
    return () => clearInterval(interval);
  }, [isPaused, data]);

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -900 : 900,
        behavior: "smooth",
      });
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <div 
      className="px-6 md:px-10 mt-10 group/row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Row header */}
      <h3 className="text-lg md:text-xl font-bold mb-5 text-gray-200 flex items-center gap-3">
        <span className="w-1 h-5 bg-[#E50914] rounded-full inline-block" />
        {title}
      </h3>

      {/* Outer wrapper: clips left/right but not bottom */}
      <div
        className="relative"
        style={{ paddingBottom: "220px", marginBottom: "-220px" }}
      >
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute -left-3 top-[90px] -translate-y-1/2 z-20 w-10 h-10 rounded-full
            bg-black/90 hover:bg-[#E50914] text-white text-2xl flex items-center justify-center
            opacity-0 group-hover/row:opacity-100 -translate-x-2 group-hover/row:translate-x-0
            transition-all duration-300 border border-gray-700 hover:border-[#E50914] shadow-lg"
        >
          ‹
        </button>

        {/* Scrollable strip — overflow-x only, overflow-y visible */}
        <div
          ref={rowRef}
          className="no-scrollbar flex gap-4 pt-1"
          style={{
            overflowX: "auto",
            overflowY: "visible",
            paddingBottom: "220px",
          }}
        >
          {data.map((project, index) => (
            <Card key={index} project={project} />
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute -right-3 top-[90px] -translate-y-1/2 z-20 w-10 h-10 rounded-full
            bg-black/90 hover:bg-[#E50914] text-white text-2xl flex items-center justify-center
            opacity-0 group-hover/row:opacity-100 translate-x-2 group-hover/row:translate-x-0
            transition-all duration-300 border border-gray-700 hover:border-[#E50914] shadow-lg"
        >
          ›
        </button>

        {/* Edge fade gradient — left */}
        <div className="pointer-events-none absolute left-0 top-0 w-10 bg-gradient-to-r from-[#141414] to-transparent z-10"
          style={{ bottom: "220px" }} />
        {/* Edge fade gradient — right */}
        <div className="pointer-events-none absolute right-0 top-0 w-10 bg-gradient-to-l from-[#141414] to-transparent z-10"
          style={{ bottom: "220px" }} />
      </div>
    </div>
  );
};

export default Row;