import React from 'react'
import { animated, useSpring } from "@react-spring/web";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

// text should be one col, image should be other

const FadingText = () => {
  const props = useSpring({
    
    opacity: 1,

    // moves object across page
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(0px, 200px)" }
  });

  return (
    <Container>
    <Row>
    <Col>
    <animated.div style={props}>
      <div
        style={{
          width: "100%",
          height: "60px",
          background: "green",
          marginTop: "20px"
        }}
      />
    </animated.div>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  );
};

export default FadingText