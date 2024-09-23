import React from "react";
import AboutPageImg from "../assets/AboutPageImg.png";
import "../css/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const aboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="about-image">
            <img src={AboutPageImg} alt="AboutPageImg" />
          </div>
        </Col>
        <Col> this is 2nd container</Col>
      </Row>
    </Container>
  );
};

export default aboutPage;
