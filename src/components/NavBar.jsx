import React from "react";
import "../css/NavBar.css";
import logo from "../assets/THE_FITNESS_GAME-removebg-preview.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <img src={logo} alt="Icon" /> {/* Replace with your icon */}
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
