import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function ToggleMUI(props) {
  const [selected, setSelected] = useState("bold");
  return (
    <div className="mui">
      <button
        className={selected === "bold" ? "mui-active" : ""}
        onClick={function () {
          setSelected("bold");
        }}
      >
        B
      </button>
      <button
        className={selected === "italic" ? "mui-active" : ""}
        onClick={function () {
          setSelected("italic");
        }}
      >
        I
      </button>
      <button
        className={selected === "underline" ? "mui-active" : ""}
        onClick={function () {
          setSelected("underline");
        }}
      >
        U
      </button>
      <button
        className={selected === "fs50" ? "mui-active" : ""}
        onClick={function () {
          setSelected("fs50");
        }}
      >
        fontSize 50
      </button>
    </div>
  );
}
