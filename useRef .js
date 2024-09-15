import "./App.css";
import React, { useRef } from "react";

function App() {
  let inputRef = useRef(null);

  function controlInput() {
    if (inputRef.current) {
      if (inputRef.current.style.backgroundColor === "yellow") {
        inputRef.current.style.backgroundColor = "white";
      } else {
        inputRef.current.style.backgroundColor = "yellow";
      }
      inputRef.current.value = "Type something here...";
      inputRef.current.focus();
    }
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );
}

export default App;
