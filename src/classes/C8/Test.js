import { useEffect, useState } from "react";

export default function Test(props) {
  const [count, setCount] = useState(0);
  console.log("1");

  //test
  useEffect(() => {
    console.log("3");

    return () => {
      console.log("6");
    };
  }, []);

  useEffect(() => {
    console.log("4");

    return () => {
      console.log("5");
    };
  });
  console.log("2");
  return (
    <div>
      Test works
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
