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

export default function C3(props) {
  return (
    <div>
      <Lists />
      <Styling />
      <EventHandlers
        onClick={function () {
          console.log("Passed from above");
          alert("Passed from above");
        }}
      />

      <State />
    </div>
  );
}
