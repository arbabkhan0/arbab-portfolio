import securescan from "../assets/sec.jpeg";
import naviquest from "../assets/eco.jpeg";
import riderent from "../assets/ride.jpeg";

const projects = [
  {
    title: "SecureScan",
    description:
      "Full-stack Web Security Awareness Platform detecting phishing URLs, scam messages, fake identities, and malicious QR codes using REST APIs. Improved load speed by ~25% and user interaction by ~20%.",
    image: securescan,
    github: "https://github.com/arbabkhan0",
    live: "https://secure-scan-x8e4.onrender.com/",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    category: "MERN Stack",
  },
  {
    title: "NaviQuest",
    description:
      "AI-powered Career Guidance System (Margdarshak) with ~90% prediction accuracy. Handles 50+ students, enabling live mentor sessions and career exploration for classes 10–12.",
    image: naviquest,
    github: "https://github.com/arbabkhan0/Margdarshak",
    live: null,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Google Login", "Razorpay"],
    category: "MERN Stack",
  },
  {
    title: "Ride Rent",
    description:
      "Responsive premium car & bike rental platform with PHP server-side logic, MySQL, bookings, authentication and vehicle filtering. Improved user retention by 18%.",
    image: riderent,
    github: "https://github.com/arbabkhan0/RideRent",
    live: "https://arbabkhan0.github.io/RideRent/",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    category: "Web Projects",
  },
];

export default projects;