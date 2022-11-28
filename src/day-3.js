import React, { useState } from "react";
const IncDec = (props) => {
  const x = props.defaultValue ? parseInt(props.defaultValue) : 0;
  const [val, setVal] = useState(x);
  return (
    <div>
      <button onClick={() => setVal((prevVal) => prevVal + 1)}>
        Increment
      </button>
      <h1>{val}</h1>
      <button onClick={() => setVal((prevVal) => prevVal - 1)}>
        Decrement
      </button>
    </div>
  );
};
export default IncDec;
