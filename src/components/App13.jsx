import React, { useState, useEffect } from "react";
import "./App13.css";

export default function App13() {
  const [num, setNum] = useState(0);
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);

  useEffect(() => {
    const n = Number(num);
    setAdd(100 + n);
    setSub(100 - n);
    setMul(100 * n);
    setDiv(n !== 0 ? (100 / n).toFixed(2) : "Undefined");
  }, [num]);

  return (
    <div className="container">
      <h2>App13 - Assignment</h2>

      <div className="grid">
        <div className="box">Addition<br />100 + {num} = {add}</div>
        <div className="box">Subtraction<br />100 - {num} = {sub}</div>
        <input
          type="number"
          placeholder="Enter a number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="input"
        />
        <div className="box">Multiplication<br />100 × {num} = {mul}</div>
        <div className="box">Division<br />100 ÷ {num} = {div}</div>
      </div>
    </div>
  );
}
