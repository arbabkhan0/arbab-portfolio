import React, { useState, useEffect, useRef } from "react";

const STATS = [
  {
    label: "Problems Solved",
    value: 100,
    suffix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#E50914" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    label: "Projects Built",
    value: 3,
    suffix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#E50914" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    label: "AI Model Accuracy",
    value: 90,
    suffix: "%",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#E50914" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
  },
  {
    label: "CGPA",
    value: 7.28,
    suffix: "",
    decimal: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#E50914" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
];

const useCountUp = (target, duration, shouldStart, decimal) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * target;
      setCount(decimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [shouldStart, target, duration, decimal]);

  return count;
};

const StatCard = ({ stat, isVisible, index }) => {
  const count = useCountUp(stat.value, 1800, isVisible, stat.decimal);

  return (
    <div
      className="bg-[#1a1a1a] border border-[#2F2F2F] hover:border-[#E50914]/40 rounded-2xl p-6 text-center
        transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#E50914]/10 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
        {stat.icon}
      </div>

      {/* Counter */}
      <div className="text-4xl font-black text-[#E50914] mb-1 tabular-nums">
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            By The <span className="text-[#E50914]">Numbers</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">A snapshot of my journey so far</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;