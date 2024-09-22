import React from "react";
import "../css/Banner.css";
import clock from "../assets/clock.png";

const Banner = () => {
    return (
     <div className="home-banner">
       <div className="banner-text">
       <img src={clock} alt="Icon" />
       <span>Time </span>
       </div>
       <div className="banner-social-links">

       </div>
     </div>
    );
  };
  
  export default Banner;
  