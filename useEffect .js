

import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  const [isIntervalRunning, setIsIntervalRunning] = useState(true);

  useEffect(() => {
    console.log("initial");
    let interval;

    if (isIntervalRunning) {
      interval = setInterval(() => {
        setTime(new Date());
        console.log("Update");
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      console.log("Unmount");
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

