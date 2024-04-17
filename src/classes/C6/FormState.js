/*
Controlled

Uncontrolled
*/

import React from "react";

export default function FormState(props) {
  const [name, setName] = React.useState("");

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
          placeholder="+38978443221"
          onChange={function (event) {
            // allows only letter 'm' to be viable for input
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
