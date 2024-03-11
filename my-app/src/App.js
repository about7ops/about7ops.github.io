import profilePic from './images/test_prof_image.jpg';
import './App.css';
import MovingHeader from './components/MovingHeader.js';
// import AnimationChain from './components/MovingHeaderChain.js';
import Header from './components/Header.js';

function App() {
  return (
  <div className="App">
  <Header />
  <MovingHeader />
  <img src={profilePic} alt="profile picture" />
  </div>
  );
}

export default App;