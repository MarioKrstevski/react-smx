import React, { useState, useRef } from "react";

function ColorPicker(props) {
  const [color, setColor] = useState("white");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <label htmlFor="color">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="box"
            style={{
              height: "20px",
              display: "inline-block",
              width: "20px",
              borderRadius: "50%",
              border: "1px solid black",
              margin: 5,
              backgroundColor: color,
            }}
          ></div>{" "}
          <span>{color}</span>
        </div>
      </label>

      <input
        style={{
          visibility: "hidden",
        }}
        type="color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}

function ColorPicker2(props) {
  const [color, setColor] = useState("white");
  const clickCount = useRef();
  let clickCount2 = 0;

  const colorInputRef = useRef();
  function click() {
    clickCount2++;
    clickCount.current++;
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleClick() {
    // const colorInput = document.getElementById("color");
    // colorInput.click();

    colorInputRef.current.click();
  }

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="box"
          style={{
            height: "20px",
            display: "inline-block",
            width: "20px",
            borderRadius: "50%",
            border: "1px solid black",
            margin: 5,
            backgroundColor: color,
          }}
        ></div>{" "}
        <span>{color}</span>
      </div>

      <input
        ref={colorInputRef}
        style={{
          visibility: "hidden",
        }}
        type="color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ColorPicker2;
