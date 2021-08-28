import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const luckyNumberMsg = "Congrats ,Your birthday is  Lucky Number 😉!!" ;
  const notLuckyNumberMsg = "Sorry, your birthday is not Lucky Number 😐.";
  const validationMsg = "Please enter both the fields.";

  const [luckyNumber, setLuckyNumber] = useState(0);
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    console.log(birthDate);

    if(luckyNumber === 0 || birthDate === "") {
      setResult(validationMsg);
      return;
    }

    let total = 0;
    let dateData = birthDate.replaceAll("-", "");
    for (let digit of dateData) {
      total = total + Number(digit);
    }

    let result = total % luckyNumber === 0 ? luckyNumberMsg: notLuckyNumberMsg;
    setResult(result);
  };

  return (
    <div className="App">
      <div>
        <h1 className="label">Is Your Birthday Lucky? 🤔</h1>
      </div>
      <div className="input-section">
        <h3 className="label">Date Of Birth</h3>
        <input type="date" id="birth-date" name="birth-date" placeholder="dd-mm-yyyy" onSelect = {(event)=> setBirthDate(event.target.value)} />
      </div>
      <div className="input-section">
        <h3 className="label">Lucky Number</h3>
        <input type="number" id="luckynumber" name="date-birth" placeholder="Enter a number" onChange= {(event)=> setLuckyNumber(parseInt(event.target.value))} />
      </div>
      <div>
        <button onClick={checkNumber}>Check Number</button>
      </div>
      <div className = "result-section">
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
