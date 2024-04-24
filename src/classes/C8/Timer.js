import { useEffect, useState } from "react";

export default function Timer(props) {
  const [timer, setTimer] = useState(0);

  useEffect(
    function () {
      const intervalRef = setInterval(function () {
        setTimer(timer + 1);
      }, 1000);

      return function () {
        clearInterval(intervalRef);
      };
    },
    [timer]
  );

  return <div>Timer {timer}</div>;
}
