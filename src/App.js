import React, { useState } from "react";
import "./styles.css";

function RandomNumber() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setNumber(randomNumber);
  };
  const onClick = () => setNumber(0);

  return (
    <div className="card">
      <div className="innercard">
        <h1 className="heading">Random Number Generator</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <h2>{number}</h2>
        <button onClick={handleClick}>Generate</button>
        <button className="reset-btn" onClick={onClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default RandomNumber;
