// Hook flow
// https://github.com/donavon/hook-flow
// http://localhost:3000/isolated/examples/hook-flow.js

// PLEASE NOTE: there was a subtle change in the order of cleanup functions
// getting called in React 17:
// https://github.com/kentcdodds/react-hooks/issues/90

import * as React from "react";
import flowImage from "./hook-flow.png";

function Child() {
  console.log(
    "%c    Child: render start",
    "color: MediumSpringGreen"
  );

  const [count, setCount] = React.useState(() => {
    console.log("%c    Child: useState(() => 0)", "color: tomato");
    return 0;
  });

  React.useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {})",
      "color: LightCoral"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {}, [])",
      "color: MediumTurquoise"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {}, [count])",
      "color: HotPink"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, [count]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [count]);

  const element = (
    <button
      onClick={() => setCount((previousCount) => previousCount + 1)}
    >
      {count}
    </button>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
}

function Flow() {
  console.log("%cFlow: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cFlow: useState(() => false)", "color: tomato");
    return false;
  });

  React.useEffect(() => {
    console.log("%cFlow: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log(
        "%cFlow: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log(
      "%cFlow: useEffect(() => {}, [])",
      "color: MediumTurquoise"
    );
    return () => {
      console.log(
        "%cFlow: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log(
      "%cFlow: useEffect(() => {}, [showChild])",
      "color: HotPink"
    );
    return () => {
      console.log(
        "%cFlow: useEffect(() => {}, [showChild]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [showChild]);

  const element = (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{" "}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
      <hr />
      <img
        width={300}
        style={{ display: "inline-block" }}
        src={flowImage}
        alt=""
      />
    </div>
  );

  console.log("%cFlow: render end", "color: MediumSpringGreen");

  return element;
}

export default Flow;
