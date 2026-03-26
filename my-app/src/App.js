// page imports
import {Container, Col, Row} from 'react-bootstrap';

// components
import Intro from './components/Intro.js';

function App() {
  return (
    <div className = "app">
      {/* removed header/navbar to focus on first elements on page */}
      <div className = "intro">
        <Container>
          <Intro />
        </Container>
      </div>
    </div>
  );
}

export default App;