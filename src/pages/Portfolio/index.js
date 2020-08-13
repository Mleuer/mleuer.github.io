import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="cards">
        <div className="card">
          <a
            href="https://color-story.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/colorstory.png")}
                alt="project 5"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Color Story</p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">-Social Networking for Artists and Enthusiasts</p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: React.js Express.js, Sequelize, MaterialUI, Axios
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://trackfood.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/FoodTrak.jpeg")}
                alt="project 1"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">FoodTrak</p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">-Calorie tracking app</p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: Express.js, MySQL, Sequelize, Bootstrap
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://mleuer.github.io/Project-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/basketball.jpg")}
                alt="project 2"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">
                Basketball Collect 'em All
              </p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">
                      -Simple Basketball Card Collecting Game
                    </p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: Bootstrap, JQuery
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://mleuer.github.io/Weather-Dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/weather-dashboard.png")}
                alt="project 3"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Weather Dashboard</p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">
                      -Real-Time Searchable Weather Data
                    </p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: OpenWeather API, HTML, JQuery, CSS
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://radiant-taiga-33936.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={"https://illustoon.com/photo/4728.png"}
                alt="project 4"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Burger Finder</p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">-Create and Store Burgers</p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: MySQL, Express.js, Express-Handlebars
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://trackfood.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/work-day-scheduler.png")}
                alt="project 6"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Work Day Scheduler</p>
              <div className="card-info">
                <ul>
                  <li>
                    <p className="text-medium">-Track Daily Tasks</p>
                  </li>
                  <li>
                    <p className="text-medium">
                      -Technologies: Moment.js, HTML, CSS
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
