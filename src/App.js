import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');

  const handleBtnColor = () => {
    if (btnColor === 'red') {
      setBtnColor('blue');
    } else {
      setBtnColor('red');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button style={{ backgroundColor: btnColor }} onClick={handleBtnColor}>
          {btnColor === 'red' ? 'Change to Blue' : 'Change to Red'}
        </button>
      </header>
    </div>
  );
}

export default App;
