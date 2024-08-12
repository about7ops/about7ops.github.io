import React from 'react';
import profPic from '../images/profPic.jpg';
import {Container, Col, Row} from 'react-bootstrap';
import IntroButtons from './button';


// revisit mobile sizing

const Intro = () => {
  return (
    <div id="intro">
      <Row>
        <Col>
          <h1>Lorem Ipsum Lorem Ipsum Lorem...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          <IntroButtons />
          </Col>
        <Col>
          <img src={profPic} alt="profile"></img>
          </Col>
        </Row>
    </div>
  );
};

export default Intro