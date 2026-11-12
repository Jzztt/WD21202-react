import React from "react";

const StateComponent = () => {
  let count = 0;
  const increment = () => {
    count++;
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateComponent;
