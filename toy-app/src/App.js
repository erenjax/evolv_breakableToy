import logo from './logo.svg';
import './App.css';
import MakeGuess from './components/submitGuess.js'; 
import RandomString from './components/randomNumber.js';

function App() {
  return (
    <div className="App">
      <p>NORDLE</p>
        <MakeGuess />
        <RandomString />
    </div>
  );
}

export default App;
