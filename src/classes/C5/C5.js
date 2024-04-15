import React from "react";

function Toggle() {
  // let isOn = false;
  console.log("rendering Toggle");
  // localStorage.set()
  // api.textMyEx()

  const [isOn, setIsOn] = React.useState(false);

  return (
    <div>
      <div
        className="pomodoro"
        onClick={function () {
          setIsOn(!isOn);
        }}
      >
        <div>🍅</div>
        <div className="middle">
          <div>Pomodoro</div>
          <div>
            {isOn
              ? "Timed focus and rest intervals"
              : "Focus for 45mins,rest for 15mins"}
          </div>
        </div>
        <div className={`end`}>
          <div className={`toggle-switch ${isOn ? "on" : ""}`}></div>
        </div>
      </div>

      {/* <button
        onClick={function () {
          setIsOn(!isOn);
        }}
      >
        {" "}
        Change{" "}
      </button> */}
    </div>
  );
}

function FocusMode() {
  // let isOpen = false;

  console.log("rendering FocusMode");
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={function () {
          setIsOpen(!isOpen);
        }}
      >
        👤
        <br />
        Focus
      </button>

      {isOpen && (
        <div className="focus-dialog">
          <h1>Focus Mode</h1>
          <Toggle />
          <button>Start Focusing</button>
        </div>
      )}

      <div className={`focus-dialog ${isOpen ? "" : "hidden"}`}>
        <h1>Focus Mode</h1>
        <Toggle />

        <button>Start Focusing</button>
      </div>
    </div>
  );
}

export default function C5(props) {
  return (
    <div>
      {/* <Toggle /> */}
      <FocusMode />
    </div>
  );
}
