import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <Hero />

      {/* Navbar */}
      <nav className="navbar">
        <h2>Kavita Jadhav</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hello, I'm Kavita 👋</h1>
        <p>React Learner</p>
        <p>Done ITR AT IDIOL TECH INFO in AWS / AZURE</p>
        <button>Download Resume</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a college student passionate about Web Development.<br></br>I
          love building real-world projects using Java Script , CSS , HTML and
          React.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>Automatic Medicine ATM</h3>
          <p>IOT based medicine vending system with prescription upload.</p>
        </div>

        <div className="project-card">
          <h3>Created a website using HTML ,CSS & JS</h3>
          <p>Created a web page perform various operations.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: kj216934@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/kavita-jadhav-1b5217321/</p>
        <p>Github: https://github.com/Kavitajadhav2007</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kavita Jadhav. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
