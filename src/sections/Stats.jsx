import React from "react";

const stats = [
  { label: "Problems Solved", value: "100+" },
  { label: "Projects Built", value: "3+" },
  { label: "Accuracy (AI Model)", value: "90%" },
  { label: "CGPA", value: "7.28" },
];

const Stats = () => {
  return (
    <div className="px-10 py-20 bg-black text-white">

      <h1 className="text-3xl font-bold mb-10 text-center">
        My Achievements
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">

            <h2 className="text-3xl font-bold text-red-500">
              {item.value}
            </h2>

            <p className="text-gray-300 mt-2">
              {item.label}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Stats;