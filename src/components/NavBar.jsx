import React from "react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <img src="path_to_your_icon.png" alt="Icon" />{" "}
        {/* Replace with your icon */}
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
