import { useState } from "react";
import "./App.css";
import NetflixIntro from "./components/NetflixIntro";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Stats from "./sections/Stats";
import Arsenal from "./sections/Arsenal";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <NetflixIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div className="bg-[#141414] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Certificates />
      <Stats />
      <Arsenal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;