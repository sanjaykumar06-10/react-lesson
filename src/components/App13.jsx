import React, { useState, useEffect } from "react";

export default function App13() {
  const [num, setNum] = useState(0);
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);

  useEffect(() => {
    setAdd(100 + Number(num));
    setSub(100 - Number(num));
    setMul(100 * Number(num));
    setDiv(num !== 0 ? 100 / Number(num) : "undefined"); // avoid divide by zero
  }, [num]); // runs when num changes

  return (
    <div>
      <h1>App13 - Assignment</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <div style={{ marginTop: "20px" }}>
        <p><strong>Addition:</strong> 100 + {num} = {add}</p>
        <p><strong>Subtraction:</strong> 100 - {num} = {sub}</p>
        <p><strong>Multiplication:</strong> 100 * {num} = {mul}</p>
        <p><strong>Division:</strong> 100 / {num} = {div}</p>
      </div>
    </div>
  );
}
