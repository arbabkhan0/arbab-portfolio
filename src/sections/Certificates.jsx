import React from "react";

const certificates = [
  {
    title: "Prompt Engineering (ChatGPT & GenAI)",
    issuer: "Infosys Springboard",
  },
  {
    title: "Privacy & Security in Social Media",
    issuer: "NPTEL",
  },
  {
    title: "Bits and Bytes of Computer Networks",
    issuer: "Google",
  },
  {
    title: "Hardware & Operating Systems",
    issuer: "IBM",
  },
];

const Certificates = () => {
  return (
    <div className="px-10 py-20 bg-black text-white">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Certificates 🎓
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-red-500">
              {cert.title}
            </h2>
            <p className="text-gray-300 mt-2">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Certificates;