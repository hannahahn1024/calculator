import React from "react";
import { useState } from "react";
import { divide, add, subtract, multiply } from "./calculatorFunctions";

function App() {
  const [count, setCount] = useState(0); // State for the current count
  const [temp, setTemp] = useState(0); // State for storing temporary values
  const [op, setOp] = useState(""); // State for the current operation

  function percentOp() {
    setCount(count / 100); // Calculate percentage of the current count
  }

  function changeCount(value) {
    setCount(count * 10 + value); 
  }

  function negativeOp() {
    setCount(count * -1); // Negate the current count
  }

  function clearOp() {
    setCount(0); // Reset the count to 0
    setTemp(0); // Reset the temporary value to 0
    setOp(""); // Reset the current operation
  }

  function equalOp() {
    let result = 0;
    switch (op) {
      case "+": // Addition
        result = add(temp, count); // Perform addition using the temp and count values
        break;
      case "-": // Subtraction
        result = subtract(temp, count); // Perform subtraction using the temp and count values
        break;
      case "*": // Multiplication
        result = multiply(temp, count); // Perform multiplication using the temp and count values
        break;
      case "/": // Division
        result = divide(temp, count); // Perform division using the temp and count values
        break;
      default:
        break;
    }
    setCount(result); // Update the count with the result
    setTemp(0); // Reset the temporary value to 0
    setOp(""); // Reset the current operation
  }

  const debug = () => {
    console.log("count:" + count);
    console.log("op:" + op);
    console.log("temp:" + temp);
    console.log("-------------");
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "red",
          background: "orange",
          textAlign: "center",
        }}
      >
        ✌️Hello 🤡Hannah 🧐James 👽Alejandro!
      </h1>
      <button onClick={debug}>STATE STATUS</button>
      <div className="calculatorStyle">
        <div className="calculatorBackground">
          <span id="calculatorValue">{count}</span>
          <div className="calculatorRow">
            <button onClick={clearOp}>C</button>
            <button onClick={negativeOp}>+/-</button>
            <button onClick={percentOp}>%</button>
            <button
              id="calculatorOperator"
              onClick={() => {
                setOp("/");
                setTemp(count);
                setCount(0); // Clear the current number after storing it in `temp`
              }}
            >
              ÷
            </button>
          </div>
          <div className="calculatorRow">
            <button onClick={() => changeCount(7)}>7</button>
            <button onClick={() => changeCount(8)}>8</button>
            <button onClick={() => changeCount(9)}>9</button>
            <button
              id="calculatorOperator"
              onClick={() => {
                setOp("*");
                setTemp(count);
                setCount(0); // Clear the current number after storing it in `temp`
              }}
            >
              X
            </button>
          </div>
          <div className="calculatorRow">
            <button onClick={() => changeCount(4)}>4</button>
            <button onClick={() => changeCount(5)}>5</button>
            <button onClick={() => changeCount(6)}>6</button>
            <button
              id="calculatorOperator"
              onClick={() => {
                setOp("-");
                setTemp(count);
                setCount(0); // Clear the current number after storing it in `temp`
              }}
            >
              -
            </button>
          </div>
          <div className="calculatorRow">
            <button onClick={() => changeCount(1)}>1</button>
            <button onClick={() => changeCount(2)}>2</button>
            <button onClick={() => changeCount(3)}>3</button>
            <button
              id="calculatorOperator"
              onClick={() => {
                setOp("+");
                setTemp(count);
                setCount(0); // Clear the current number after storing it in `temp`
              }}
            >
              +
            </button>
          </div>
          <div className="calculatorRow">
            <button id="zeroButton" onClick={() => changeCount(0)}>
              0
            </button>
            <button>.</button>
            <button id="calculatorOperator" onClick={equalOp}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;