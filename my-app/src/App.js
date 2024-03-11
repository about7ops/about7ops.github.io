import logo from './logo.svg';
import './App.css';
import MovingHeader from './components/MovingHeader.js';
// import AnimationChain from './components/MovingHeaderChain.js';

// move this to components later
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovingHeader />
      </header>
    </div>
  );
}

export default App;