import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="cards">
        <div className="card">
          <a href="https://trackfood.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/FoodTrak.jpeg")}
                alt="project 1"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">FoodTrak</p>
              <div className="card-info">
                <p className="text-medium">Calorie tracking</p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://mleuer.github.io/Project-1/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/basketball.jpg")}
                alt="project 2"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Basketball Collect 'em All</p>
              <div className="card-info">
                <p className="text-medium">Basketball card collecting</p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://mleuer.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/weather-dashboard.png")}
                alt="project 3"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Weather Dashboard</p>
              <div className="card-info">
                <p className="text-medium">Search weather by city </p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://radiant-taiga-33936.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={"https://illustoon.com/photo/4728.png"}
                alt="project 4"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Burger Finder</p>
              <div className="card-info">
                <p className="text-medium">Add and devour burgers </p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://trackfood.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/work-day-scheduler.png")}
                alt="project 6"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Work Day Scheduler</p>
              <div className="card-info">
                <p className="text-medium">Track daily tasks</p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="card-image-container">
              <img
                src={require("../../assets/Images/coming-soon.jpeg")}
                alt="project 5"
              ></img>
            </div>
            <div className="card-content">
              <p className="card-title text-medium">Final Project</p>
              <div className="card-info">
                <p className="text-medium">Project Description</p>
              </div>
            </div>
          </a>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
