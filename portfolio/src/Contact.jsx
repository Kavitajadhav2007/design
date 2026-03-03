import React from "react";
import githubicon from "./assets/github.svg";
import linkedinicon from "./assets/linkedin.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>Email:kj216934@gmail.com</p>

      <div className="contact">
        <a href="https://github.com/Kavitajadhav2007">
          <img src={githubicon} />
        </a>
        <a href="https://www.linkedin.com/in/kavita-jadhav-1b5217321/">
          <img src={linkedinicon} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
