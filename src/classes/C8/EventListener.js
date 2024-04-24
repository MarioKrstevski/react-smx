import { useEffect, useState } from "react";

export default function EventListener(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function updateDimensions() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(function () {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return function () {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div>
      EventListener works
      <div>Width: {width}</div>
      <div>Height: {height}</div>
    </div>
  );
}
