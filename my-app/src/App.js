import logo from './logo.svg';
import './App.css';
import MovingHeader from './components/MovingHeader.js';
// import AnimationChain from './components/MovingHeaderChain.js';
import Header from './components/Header.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <div className="App">
  <Header />
  <MovingHeader />
  <img src={logo} className="App-logo" alt="logo" />
  </div>
  );
}

export default App;