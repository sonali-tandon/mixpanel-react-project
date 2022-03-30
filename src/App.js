import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() { 
  let [counterValue, setCounterValue] = useState(0);  

  const incrementValue = () => {
    setCounterValue(counterValue + 1);
  }

  const decrementValue = () => {
    setCounterValue(counterValue - 1);
  }

  const resetValue = () => {
    setCounterValue(0);
  }

  return ( 
    <div className="app">
      <div className="counter"> 
        <button onClick={decrementValue} className="decrement-btn">-</button>
        <p className="counter-val">{counterValue}</p>
        <button onClick={incrementValue} className="increment-btn">+</button>
        <button onClick={resetValue} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;

