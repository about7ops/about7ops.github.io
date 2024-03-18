import './styles/FadingText.css';
import AppTheme from './App.css';

// components
import FadingText from './components/FadingText.js';
import Header from './components/Header.js';
import Container from 'react-bootstrap/esm/Container.js';
import Col from 'react-bootstrap/esm/Col';

function App() {
  return (
    <div id="App" theme={AppTheme}>
      <Container>
        <Col>
          <Header />
        </Col>
          <FadingText />
      </Container>
    </div>
  );
}

export default App;