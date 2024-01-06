  import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}
export default App;


// willUnmount--------------------

import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  const [isIntervalRunning, setIsIntervalRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isIntervalRunning) {
      interval = setInterval(() => {
        setTime(new Date());
        console.log("time is updated");
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      console.log("interval is cleared");
    };
  }, [isIntervalRunning]);

  const handleToggle = () => {
    setIsIntervalRunning(!isIntervalRunning);
  };

  return (
    <div>
      {isIntervalRunning && <h2>{time.toLocaleTimeString()}</h2>}
      <button onClick={handleToggle}>
        {isIntervalRunning ? 'Stop' : 'Start'} Interval
      </button>
    </div>
  );
}

export default App;

