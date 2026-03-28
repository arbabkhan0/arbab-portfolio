import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-10 bg-gradient-to-r from-black via-gray-900 to-black">

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-red-500">Arbab Khan</span>
      </h1>

      <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-300">
        Full Stack Developer (MERN) | Building Scalable Web Applications
      </p>

    </div>
  );
};

export default Hero;