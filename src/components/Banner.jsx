import React from "react";
import "../css/Banner.css";
import clock from "../assets/clock.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Banner = () => {
    return (
     <div className="home-banner">

       <div className="banner-text">
       <img src={clock} alt="Icon" />
       <span> Time : Monday - Friday (10am - 9pm) </span>
       </div>


       <div className="banner-social-links">
        <a href="/">  <img src={facebook} alt="Icon" /></a> 
        <a href="/about">  <img src={twitter} alt="Icon" /></a> 
        <a href="/testimonials">  <img src={instagram} alt="Icon" /></a>
       </div>
     </div>
    );
  };
  
  export default Banner;
  