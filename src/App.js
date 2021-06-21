import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SummaryForm from "./pages/summary/SummaryForm"

export const replaceCamcelCase = (name) => {
  return name.replace(/\B([A-Z])\B/g, ' $1');
};

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
          type='checkbox'
          id="disable-button-checkbox"
          onChange={handleCheckbox}>
        </input>
        <label htmlFor="disable-button-checkbox">myCheckBox</label>

        <SummaryForm />
      </header>
    </div>
  );
}

export default App;
