import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-10 py-4 flex justify-between items-center">
      
      <h1 className="text-red-500 text-2xl font-bold">
        ARBAB
      </h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-red-500 cursor-pointer">About</a>
        <a href="#projects" className="hover:text-red-500 cursor-pointer">Projects</a>
        <a href="#contact" className="hover:text-red-500 cursor-pointer">Contact</a>
      </div>

    </div>
  );
};

export default Navbar;