//App.js
import React, { useState, useCallback } from "react";
import Result from "./Result";
import Name from "./Name";

const App = () => {
  const [mark, setMark] = useState(580);

  const learn = useCallback(() => {
    // Referential equality where it recreates the function
    console.log("Learning");
  }, []);

  return (
    <div>
      <Name name="Aman kr" learn={learn} />
      <Result mark={mark} subject="Maths" />
      <button onClick={() => setMark(mark + 1)}>Mark</button>
    </div>
  );
};

export default App;
// ------------------------------------------------------------------------------

//Result.js
import React, { useMemo } from "react";

const Result = ({ mark, subject }) => {
//   console.log("mark");
  const markPercentage = useMemo(() => {
    console.log("percentage");
    return (mark * 100) / 100;
  }, [mark]);

  //   const markPercentage = () => {
  //     console.log("percentage");
  //     return (mark * 100) / 100;
  //   };

  return (
    <div>
      <h2>{subject}</h2>
      {/* <h2>{mark}</h2> */}
      <h3>{markPercentage}</h3>
    </div>
  );
};

export default Result;

// -------------------------------------------------------------------

//Name.js
import React from "react";

const Name = ({ name, learn }) => {
  console.log("Name");
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={learn}>Learn</button>
    </div>
  );
};

export default React.memo(Name);


