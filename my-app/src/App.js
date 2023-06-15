import React from "react";
import { useState } from "react";


function App() {

  const [count, setCount] = useState(0)
  const [temp, setTemp] = useState(0);
  const [op, setOp] = useState("");

  function percentOp() {
    setCount(count / 100);
  }
  
  // Function to handle number button clicks
  function changeCount(value) {
    setCount(count * 10 + value);
  };

  function negative() {
    setCount(count * -1)
  }

  function clear() {
    setCount(0);
    setTemp(0);
    setOp("");
  }

  // Addition function
  let add = function (a, b) {
    let sum = a + b;
    console.log("a + b = ", sum);
    return sum;
  };

  // Subtraction function
  let subtract = function (a, b) {
    let difference = a - b;
    console.log("a - b = ", difference);
    return difference;
  };

  // Multiplication function
  let multiply = function (a, b) {
    let product = a * b;
    console.log("a * b = ", product);
    return product;
  };

  // Division function
  let divide = function (a, b) {
    let quotient = a / b;
    console.log("a / b = ", quotient);
    return quotient;
  };

  // Percentage function
  let percent = function (a) {
    let percentage = divide(a, 100);
    console.log("percent", percentage);
    return percent;
  };

  // Equal function

  const debug = () => {
    console.log("count:" + count);
    console.log("op:" + op);
    console.log("temp:" + temp);
    console.log("-------------");
  }

  return (
    <div className="App">
      <h1 style=
        {{
          color: "red",
          background: "orange",
          textAlign: "center"
        }}>
          ✌️Hello 🤡Hannah 🧐James 👽Alejandro!
      </h1>
      <button onClick={() => debug()}>
        STATE STATUS
      </button>
        <div className="calculatorStyle">
      <div className="calculatorBackground">
        <span id="calculatorValue">{count}</span>
      <div className="calculatorRow">
        <button onClick={() => clear()}>C</button>
        <button onClick={() => negative()}>+/-</button>
        <button onClick={() => percentOp()}>%</button>
        <button id="calculatorOperator" onClick={() => {setOp(4); setTemp(count)}}>÷</button>
      </div>
      <div className="calculatorRow">
        <button onClick={() => changeCount(7)}>7</button>
        <button onClick={() => changeCount(8)}>8</button>
        <button onClick={() => changeCount(9)}>9</button>
        <button id="calculatorOperator" onClick={() => {setOp(3); setTemp(count)}}>X</button>
      </div>
      <div className="calculatorRow">
        <button onClick={() => changeCount(4)}>4</button>
        <button onClick={() => changeCount(5)}>5</button>
        <button onClick={() => changeCount(6)}>6</button>
        <button id="calculatorOperator" onClick={() => {setOp(2); setTemp(count)}}>-</button>
      </div>
      <div className="calculatorRow">
        <button onClick={() => changeCount(1)}>1</button>
        <button onClick={() => changeCount(2)}>2</button>
        <button onClick={() => changeCount(3)}>3</button>
        <button id="calculatorOperator" onClick={() => {setOp(1); setTemp(count)}}>+</button>
      </div>
      <div className="calculatorRow">
        <button id="zeroButton" onClick={() => changeCount(0)}>0</button>
        <button>.</button>
        <button id="calculatorOperator">=</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
