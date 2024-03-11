import profilePic from './images/test_prof_image.jpg';
import './App.css';
import FadingText from './components/FadingText.js';
// import AnimationChain from './components/MovingHeaderChain.js';
import Header from './components/Header.js';

function App() {
  return (
  <div className="App">
  <Header />
  <img src={profilePic} alt="profile picture" />
  </div>
  );
}

export default App;