// context, custom hooks

import { useEffect, useState } from "react";
import Todos from "../C9/Todos";
import useWindowSize from "../../hooks/useWindowSize";

function WindowSize(props) {
  const { width, height } = useWindowSize();
  return (
    <div>
      EventListener works
      <div>Width: {width}</div>
      <div>Height: {height}</div>
    </div>
  );
}

export default function C10(props) {
  return (
    <div>
      C10 works
      <WindowSize />
      <Todos />
    </div>
  );
}
