import AppTheme from './App.css';
import IntroTheme from './styles/Intro.css';

// components
import Intro from './components/Intro.js';

import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = "app" theme={AppTheme}>
      {/* removed header/navbar to focus on first elements on page */}
      <div className = "intro" theme={IntroTheme}>
        <Container>
          <Intro />
        </Container>
      </div>
    </div>
  );
}

export default App;