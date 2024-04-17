/*
Controlled

Uncontrolled
*/

import React from "react";

export default function FormState(props) {
  const [name, setName] = React.useState("prepopulated");

  return (
    <div>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          console.log("Name:", name);
        }}
      >
        <input
          value={name}
          onChange={function (event) {
            // if (event.target.value.at(-1) === "m") {
            //   setName(event.target.value);
            // }

            setName(event.target.value);
          }}
        />

        <button>Submit</button>
      </form>

      <pre>{name}</pre>
    </div>
  );
}
