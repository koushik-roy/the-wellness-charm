import React from "react";
import AboutPageImg from "../assets/AboutPageImg.png";
import "../css/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const aboutPage = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-image">
          <img src={AboutPageImg} alt="AboutPageImg" />
        </div>
        <div className="about-content">
          <div className="about-header-text">
            <b>ABOUT US</b>
          </div>
          <div className="about-para-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sequi nihil eveniet corrupti. Quidem officia, quod
              architecto corporis, ducimus libero sit doloribus nihil quas
              repellendus obcaecati placeat necessitatibus. Consequatur, aut
              quam! Cupiditate quod fugiat quisquam minus! 
              
              <p>Placeat praesentium
              impedit officiis quasi repellat blanditiis suscipit earum sunt
              neque quas. Quas architecto ab deleniti nisi optio qui libero
              facere perspiciatis? Quae sed, eveniet amet pariatur porro in odio
              molestiae fuga adipisci corrupti laudantium ipsam illo harum
              explicabo eius totam magnam voluptas ea aspernatur voluptatum
              repudiandae neque. Culpa incidunt velit molestias saepe molestiae
              eius numquam, obcaecati nulla earum voluptas? Quas dignissimos
              facilis rem.</p>
            </p>
          </div>
          <button className="join-button"> Join Now</button>
        </div>
      </div>
    </>
  );
};

export default aboutPage;
