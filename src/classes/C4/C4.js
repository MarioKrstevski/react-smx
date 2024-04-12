/*
Topics: 
- state
*/
import React from "react";
// const [name, setName] = React.useState("Mario");
// const [isHappy, setIsHappy] = React.useState(true);
// const arrayWithTwoItem = React.useState(0);
// console.log(arrayWithTwoItem);
// const counter = arrayWithTwoItem[0]
// const setCounter = arrayWithTwoItem[1]

function Counter({ upperLimit }) {
  // let counter = 0;
  let [counter, setCounter] = React.useState(6);

  let [user, setUser] = React.useState("Mario");

  // const upperLimit = 20;
  // kod
  return (
    <div>
      {counter}
      <br />
      <button
        onClick={function () {
          if (counter < upperLimit) {
            setCounter(counter + 1);
          }
        }}
      >
        Increment
      </button>
      <button
        onClick={function () {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>

      <div>{user}</div>

      <button
        onClick={function () {
          setUser("Simona");
          setCounter(20);
        }}
      >
        Change Presenter and Counter
      </button>
    </div>
  );
}
export default function C4(props) {
  return (
    <div>
      C4 works
      <Counter upperLimit={20} />
      <Counter upperLimit={10} />
    </div>
  );
}
