import React from "react";

function Toggle() {
  // let isOn = false;
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div>
      <div className="pomodoro">
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

      <button
        onClick={function () {
          setIsOn(!isOn);
        }}
      >
        {" "}
        Change{" "}
      </button>
    </div>
  );
}

export default function C5(props) {
  return (
    <div>
      <Toggle />
    </div>
  );
}
