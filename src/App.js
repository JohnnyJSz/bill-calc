import React, { useState } from 'react';
import './App.css';

export default function App() {
  let [gasValue, setGasValue] = useState();
  let [elecValue, setElecValue] = useState();
  let [resultGas, setResultGas] = useState();
  let [resultElec, setResultElec] = useState();
  const prevReading = 11000;

  function resultValuesFn(gasValue, elecValue){
    if (gasValue > prevReading && elecValue > prevReading)  {
      setResultGas(gasValue - prevReading);
      setResultElec(elecValue - prevReading);
    } else {
      alert('Please enter current meter readings.');
    }
  }

  function billFormula(units) {
    return units > 100 ? 
      parseFloat((((100 * 10) + (units - 100) * 20)/100)).toFixed(2) : 
      parseFloat((units * 10)/100).toFixed(2);
  }

  return (
    <div className="App" >
      <div className='container'>
        <h1>Bill Calculator</h1>
        <h3>Gas</h3>
        <form>
          <input 
            type='number' 
            placeholder='Enter current reading' 
            value={gasValue}
            min='11000'
            onInput={element => setGasValue(element.target.value)}
          />
          <h3>Electricity</h3>
          <input 
            type='number' 
            placeholder='Enter current reading' 
            value={elecValue}
            min='11000'
            onInput={element => setElecValue(element.target.value)}
          />
        </form>
        <br />
        <br />
        <br />
        <button 
          onClick={() => resultValuesFn(gasValue, elecValue)}
          >CALCULATE
        </button>
        <br />
        <br />
        <div className='displayResults'>
          <h3>Gas bill:  <b>£{resultGas > 0 ? billFormula(resultGas) : '0'}</b></h3>
          <h3>Electricity bill:  <b>£{resultElec > 0 ? billFormula(resultElec) : '0'}</b></h3>
        </div>
      </div>
    </div>
  );
}
