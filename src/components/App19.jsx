import React, { useState, useEffect } from "react";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (wickets >= 10) {
      setGameOver(true);
      setMessage("Game Over!");
    }
  }, [wickets]);

  function addRun() {
    if (!gameOver) {
      setRuns(runs + 1);
      setMessage("Well Done!");
    }
  }

  function addWicket() {
    if (!gameOver) {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      if (newWickets < 10) {
        setMessage("Better Luck Next Time!");
      }
    }
  }

  const boxStyle = {
    border: "1px solid black",
    padding: "15px",
    width: "250px",
    textAlign: "center",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <div>
        <h1>Cricket Scoreboard</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
        }}
      >
       
        <div style={boxStyle}>
          <h2>Runs: {runs}</h2>
          <button onClick={addRun}>Run</button>
          <h2>Wickets: {wickets}</h2>
          <button onClick={addWicket}>Wicket</button>
        </div>

       
        <div style={boxStyle}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
