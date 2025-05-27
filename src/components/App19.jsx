import React, { useState, useEffect } from "react";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (wickets >= 10) {
      setGameOver(true);
    }
  }, [wickets]);

  function addRun() {
    if (!gameOver) {
      setRuns(runs + 1);
    }
  }

  function addWicket() {
    if (!gameOver) {
      setWickets(wickets + 1);
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
          {!gameOver && runs > 0 && <p>Well Done!</p>}
          {gameOver && (
            <>
              <p>Better Luck Next Time!</p>
              <p><strong>Game Over!</strong></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
