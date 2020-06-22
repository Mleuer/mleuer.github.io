import React from "react";
import Header from "../../components/Header";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <div className="card">
        <div className="profile-sidebar">
          <img
            className="profile-image"
            src={require("../../assets/Images/IMG_0832.jpg")}
            height="125"
            width="125"
            alt="profile"
          ></img>
          <ul className="social-list">
            <li className="social-item">
              <a
                aria-label="github"
                className="social-link"
                target="_blank"
                href="https://github.com/Mleuer"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li className="social-item">
              <a
                aria-label="LinkedIn"
                className="social-link"
                target="_blank"
                href="https://www.linkedin.com/in/matt-leuer-49753a19b/"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="profile-main">
          <h2 className="profile-name">Matt Leuer</h2>
          <p className="profile-position">Web Developer</p>
          <p className="profile-body">
            Welcome to my portfolio page. My name is Matt Leuer, I am an
            aspiring software developer interested in web development. I am
            originally from Chicago and my hobbies include playing video games
            and watching the Bears, Bulls and Cubs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
