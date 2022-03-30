import mixpanel from 'mixpanel-browser';
import './App.css';
import { useEffect, useState } from 'react';


mixpanel.init('3298b30c48d1cc9fe3eec5f8c85f3b5d', {debug: true}); 


function App() { 
  let [counterValue, setCounterValue] = useState(0);  

  useEffect(() => {
    const dateTime = new Date();
    console.log('ran');
    mixpanel.track('App Loaded', {
      'Month': dateTime.getMonth() + 1,
      'Date': dateTime.getDate(),
      'Year':  dateTime.getFullYear(),
      'Time': `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`,
    });
  }, []);

  const incrementValue = () => {
    setCounterValue(++counterValue);
    mixpanel.track('Button Click', {
      Action: 'Increment',
      'Counter Value': counterValue,
    });
  }

  const decrementValue = () => {
    setCounterValue(--counterValue);
    mixpanel.track('Button Click', {
      Action: 'Decrement',
      'Counter Value': counterValue,
    });
  }

  const resetValue = () => {
    setCounterValue(0);
    mixpanel.track('Button Click', {
      Action: 'Reset',
      'Counter Value': 0,
    });
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

