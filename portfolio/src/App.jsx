import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Hero />

      <About />

      <Project />

      <Contact />

      {/* Footer */}
      <footer>
        <p>© 2026 Kavita Jadhav. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
