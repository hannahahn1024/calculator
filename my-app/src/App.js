import React from "react";
import Calculator from "./component/Calculator";

function App() {
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

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
