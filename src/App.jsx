import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stats from "./sections/Stats";
import Arsenal from "./sections/Arsenal";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Stats />
      <Arsenal />
       <Certificates />
    </div>
  );
}

export default App;