import securescan from "../assets/sec.jpeg";
import ecovision from "../assets/eco.jpeg";
import riderent from "../assets/ride.jpeg";
import myntra from "../assets/Mynra.jpeg";
import naviquest from "../assets/NaviQuest.jpeg";
import chatbot from "../assets/chatbot.jpeg";
import soilTracker from "../assets/soil.jpeg";

const projects = [
  {
    title: "SecureScan",
    description: "Full-stack Web Security Awareness Platform detecting phishing URLs, scam messages, fake identities, and malicious QR codes using REST APIs. Improved load speed by ~25% and user interaction by ~20%.",
    image: securescan,
    github: "https://github.com/arbabkhan0/Secure_Scan_",
    live: "https://secure-scan-x8e4.onrender.com/",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    category: "MERN Stack"
  },
  {
    title: "EcoVision",
    description: "Generative AI platform for waste-to-value innovation — turning trash into upcycling ideas and business opportunities. 🌱",
    image: ecovision,
    github: "https://github.com/arbabkhan0/Eco-Vision",
    live: "https://swadeshi-waste-ai.vercel.app/",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini AI"],
    category: "MERN Stack"
  },
  {
    title: "Ride Rent",
    description: "Responsive premium car & bike rental platform with PHP server-side logic, MySQL, bookings, authentication and vehicle filtering. Improved user retention by 18%.",
    image: riderent,
    github: "https://github.com/arbabkhan0/RideRent",
    live: "https://arbabkhan0.github.io/RideRent/",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    category: "Web Projects"
  },
  {
    title: "Margdarshak AI Chatbot",
    description: "Developed a personalized AI chatbot using a locally hosted LLM (Phi-3 Mini) to provide real-time, context-aware career guidance. Built with a responsive full-stack interface enabling users to explore career paths and identify skill gaps without relying on external APIs.",
    image: chatbot,
    github: "https://github.com/arbabkhan0/Margdarshak",
    live: null,
    tech: ["HTML", "CSS", "JavaScript", "Flask", "Python", "Phi-3 Mini", "LLM"],
    category: "AI Projects"
  },
  {
    title: "Mynra Clone",
    description: "Full-stack fashion e-commerce platform with product listings, cart, filters, and seamless shopping experience inspired by Myntra.",
    image: myntra,
    github: "https://github.com/arbabkhan0/Mynra-e-commerce",
    live: null,
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    category: "Web Projects"
  },
  {
    title: "NaviQuest",
    description: "AI-powered Career Guidance System (Margdarshak) with ~90% prediction accuracy. Handles 50+ students, enabling live mentor sessions and career exploration for classes 10–12.",
    image: naviquest,
    github: "https://github.com/arbabkhan0/NaviQuest",
    live: null,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Google Login", "Razorpay"],
    category: "MERN Stack"
  },
  {
    title: "Soil Pollution Tracker (India)",
    description: "Developed a simple web-based application to display soil pollution levels across different states of India. Built using HTML, CSS, and JavaScript, the project allows users to input a region and instantly view soil condition insights, promoting environmental awareness through an intuitive interface.",
    image: soilTracker,
    github: "https://github.com/arbabkhan0/Soil-Pollution-Website",
    live: null,
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Projects"
  }
];

export default projects;