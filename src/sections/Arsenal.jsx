import React from "react";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "Git & GitHub",
  "MySQL",
];

const Arsenal = () => {
  return (
    <div className="px-10 py-20 bg-black text-white">

      <h1 className="text-3xl font-bold mb-10 text-center">
        My Arsenal ⚔️
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-900 rounded-full hover:bg-red-600 transition cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Arsenal;