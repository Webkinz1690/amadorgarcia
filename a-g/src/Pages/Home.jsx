import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import homeCarousel from "../Components/homeCarousel/Carousel";

const Home = () => {
  return (
    <Container>
      <Row style={{ marginTop: "10%" }}>
        <Col></Col>
        <Col md="6">
          <homeCarousel />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Home;
