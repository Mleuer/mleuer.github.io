import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <div className="container"></div>
      <div className="row">
        <div className="col">
          <div className="card">
            <ul className="list-group list-group-flush">
              <a className="list-group-item" href="mailto:mattleuer@gmail.com">
                Email Me: mattleuer@gmail.com
              </a>
              <a
                className="list-group-item"
                href="Assets/Matthew Leuer -- Resume.pdf"
                download="Matthew-Leuer-Resume"
              >
                Download My Resume
              </a>
              <a className="list-group-item" href="https://github.com/Mleuer">
                Github
              </a>
              <a
                className="list-group-item"
                href="https://www.linkedin.com/in/matt-leuer-49753a19b/"
              >
                LinkedIn
              </a>
            </ul>
          </div>
        </div>
        <div className="col">
          <image
            id="contact-me-img"
            src="../../../assets/Images/contact-me.png"
            alt="Contact Me"
          ></image>
        </div>
      </div>
    </>
  );
}

export default Contact;
