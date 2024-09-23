import React from "react";
import "../css/Home.css";
import HomePageImg from "../assets/HomePageImg.png";

const Home = () => {
    return (
        <div className="home-section">

            <div className="home-content">
                <h1 className="home-header-text">let's build
                    <br /> your <span>shape</span></h1>
                <p className="home-para-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nibh et mi semper, semper congue magna consequat. Nullam aliquet mauris ut faucibus pretium. Vivamus ornare, ipsum in congue consequat, massa orci suscipit dolor, non commodo dui justo non neque</p>
                <button className="home-button"> Join Now</button>
            </div>


            <div className="home-image">
                <img src={HomePageImg} alt="GymGuy" /> 
            </div>

        </div>
    );
};

export default Home;