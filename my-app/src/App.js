// basic imports
import profilePic from './images/test_prof_image.jpg';
import './App.css';

// components
import FadingText from './components/FadingText.js';
import Header from './components/Header.js';

function App() {
  return (
  <div className="App">
  <Header />
  <FadingText />
  <img src={profilePic} alt="profile picture" />
  </div>
  );
}

export default App;