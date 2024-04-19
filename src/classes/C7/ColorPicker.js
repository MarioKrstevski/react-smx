import React, { useState } from "react";

export default function ColorPicker(props) {
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
