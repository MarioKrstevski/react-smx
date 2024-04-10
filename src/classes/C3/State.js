// Basic State

import React, { useState } from "react";

export default function State(props) {
  let initialValue = 0; //any value can be here
  const [state, setState] = React.useState(initialValue);

  const [counter, setCounter] = useState(0);
  return (
    <div>
      State
      <h1>Counter</h1>
      <button
        onClick={function () {
          // must be changed with the setter function
          //   setCounter(counter + 1);
          //   setCounter((previousValue) => {
          //     return previousValue + 1;
          //   });
          //   setCounter("new text");
          //   setCounter({ key: "value" });
        }}
      >
        Increment
      </button>
      <br />
      <p>{counter}</p>
    </div>
  );
}
