import { useState } from "react";
import "./App.css";
import NetflixIntro from "./components/NetflixIntro";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Arsenal from "./sections/Arsenal";
import Certificates from "./sections/Certificates";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <NetflixIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div style={{ background: "#141414", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Arsenal />
      <Certificates />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;