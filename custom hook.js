App.js ---------------------------------
  
  import React from 'react'
import useCount from './useCount'
const App = () => {
  const data = useCount();
  return (
    <div>
      <h1>Count : {data.count}</h1>
      <button type='button' onClick={data.handle}>count</button>
    </div>
  )
}
export default App


useCount.js -------------------------------
  
  import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 1);
  };
    return {
        count, handle
    };
};

export default useCount;
