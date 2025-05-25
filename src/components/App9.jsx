import { useState } from "react";

function App9() {
  const [count, setCount] = useState(10); // Starting at 10

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>App9</h2>
      <h3>Assignment</h3>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={decrement} style={{ padding: "5px 10px" }}>-</button>
        <span style={{ fontSize: "20px" }}>{count}</span>
        <button onClick={increment} style={{ padding: "5px 10px" }}>+</button>
      </div>
    </div>
  );
}

export default App9;
