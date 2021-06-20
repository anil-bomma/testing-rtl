import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [btnDisable, setBtnDisable] = useState(false);


  const handleBtnColor = () => {
    if (btnColor === 'red') {
      setBtnColor('blue');
    } else {
      setBtnColor('red');
    }
  };

  const handleCheckbox = () => {
    if (btnDisable) {
      setBtnColor('red');
      setBtnDisable(false);
    } else {
      setBtnColor('grey');
      setBtnDisable(true);
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

        <button
          style={{ backgroundColor: btnColor }}
          onClick={handleBtnColor}
          disabled={btnDisable}
        >
          {btnColor === 'red' ? 'Change to Blue' : 'Change to Red'}
        </button>

        <input
          label="myCheckBox"
          type='checkbox'
          onChange={handleCheckbox}></input>
      </header>
    </div>
  );
}

export default App;
