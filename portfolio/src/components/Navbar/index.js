import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-angle-double-right fa-2x fa-primary logo"></i>
            <span className="link-text">Matt Leuer</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-home fa-2x fa-primary"></i>
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            <i className="fas fa-book-open fa-2x fa-primary"></i>
            <span className="link-text">Portfolio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            <i className="fas fa-id-card fa-2x fa-primary"></i>
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
