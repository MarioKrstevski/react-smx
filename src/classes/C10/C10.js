// context, custom hooks

import { useContext, useEffect, useState } from "react";
import Todos from "../C9/Todos";
import useWindowSize from "../../hooks/useWindowSize";
import AuthContext from "../../context/AuthContext";

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

function Child() {
  // const name = useGlobalState(AuthContext);
  const auth = useContext(AuthContext);
  console.log(auth);

  return (
    <div>
      {auth.isLoggedIn ? "logged in" : "not logged in"}

      <button onClick={auth.signOut}>logout</button>
    </div>
  );
}

export default function C10() {
  return (
    <div>
      C10 works
      {/* <WindowSize /> */}
      {/* <Todos /> */}
      <Child />
    </div>
  );
}
