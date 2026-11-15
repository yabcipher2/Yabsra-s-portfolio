import Navigation from "./Navigation";
import Hero from "./Hero";
import Skills from "./Skills";
import "./index.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <Navigation />
      
      {/* We use a relative container and a max-height of 100vh here
        to ensure the browser handles the transition between sections nicely.
      */}
      <div style={{ position: "relative", overflowX: "hidden" }}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
