import React from "react";
import "./App.css";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;
