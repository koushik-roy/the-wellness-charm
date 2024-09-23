import React from "react";
import "../css/NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <img src={logo} alt="Icon" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/calendar">Calendar</a>
        <a href="/blog">Blog</a>
        <a href="/contact" className="button-style">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
