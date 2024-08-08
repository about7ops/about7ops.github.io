import TextTheme from './styles/FadingText.css';
import AppTheme from './App.css';
import CardsTheme from './styles/Cards.css'

// components
import FadingText from './components/FadingText.js';
import Header from './components/Header.js';
import ProfilePicture from './components/Cards.js';

import Container from 'react-bootstrap/esm/Container.js';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function App() {
  return (
    <div className = "app" theme={AppTheme}>
      <Container>
          <div className = "header">
          <Header />
          </div>
          <Row xs={2}>
          <Col>
          <div className = "text" theme={TextTheme}>
          <FadingText /></div></Col>
          <Col>
          <div className = "cards" theme={CardsTheme}>
          <ProfilePicture /></div></Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;