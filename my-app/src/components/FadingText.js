import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import img from "../images/test_prof_image.jpg";

// revisit mobile sizing

const FadingText = () => {
  return (
    <div>
      <Container expand="lg">
        <Row>
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1>Lorem Ipsum Lorem Ipsum Lorem...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <h3>Button1 and Button 2</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
          <img src={img} alt="profile picture" />
          </Col>
        </Row>
    </Container>
    </div>
  );
};

export default FadingText