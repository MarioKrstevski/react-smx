/*
Topics: 

- Lists
- Event handlers
- Styling
- State

*/

import EventHandlers from "./EventHandlers";
import Lists from "./Lists";
import State from "./State";
import Styling from "./Styling";

function Button({ children, variant, size }) {
  let classes = `btn btn-${variant} btn-${size}`;
  return <button className={classes}>{children}</button>;
}

const preparedButton = (
  <Button>
    Children Two <img src="" alt="test" />
  </Button>
);
console.log(preparedButton);

export default function C3(props) {
  return (
    <div>
      {/* <Lists /> */}
      <Styling />
      {/* 
      <EventHandlers
        onClick={function () {
          console.log("Passed from above");
          alert("Passed from above");
        }}
      />

      <State /> */}
    </div>
  );
}
