import './App.css';
import './styles/FadingText.css';

// components
import FadingText from './components/FadingText.js';
import Header from './components/Header.js';

function App() {
  return (
  <div className="App">
  <Header />
  <FadingText />
  </div>
  );
}

export default App;