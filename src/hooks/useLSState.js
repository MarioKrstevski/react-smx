import { useEffect, useState } from "react";

export default function useLSState(lsKey, startingValue) {
  const lsData = JSON.parse(window.localStorage.getItem(lsKey));
  const [value, setValue] = useState(lsData ? lsData : startingValue);
  useEffect(
    function () {
      window.localStorage.setItem(lsKey, JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue];
}
