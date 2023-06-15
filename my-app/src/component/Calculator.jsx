import { useState } from "react";
import React from "react";

const Calculator = () => {
  
  
  
  return (
    <div className="calculatorStyle">
      <div className="calculatorBackground">
        <h1>0</h1>
      <div className="calculatorRow">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button id="calculatorOperator">X</button>
      </div>
      <div className="calculatorRow">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button id="calculatorOperator">-</button>
      </div>
      <div className="calculatorRow">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button id="calculatorOperator">+</button>
      </div>
      <div className="calculatorRow">
        <button>0</button>
        <button>.</button>
        <button id="calculatorOperator">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
