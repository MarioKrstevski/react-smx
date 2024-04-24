import { useEffect, useState } from "react";

function AirCon() {
  useEffect(() => {
    console.log("start");

    return function () {
      console.log("stop aircondinoing");
    };
  }, []);
  return <div>20C</div>;
}

export default function UseEffectRules(props) {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [isInside, setIsInside] = useState(true);
  console.log("1");

  useEffect(function () {
    console.log("2");
    document.getElementById("test");
  });

  useEffect(function () {
    console.log("only once");
    // setup
    // aircondinoing.start();
    // chat.connect()
    // videostream.connect()

    return function () {
      console.log("state changed");
      //   chat.disconnect()
      //   videstream.end()
      //   aircondinoing.end();
    };
  }, []);

  useEffect(
    function () {
      console.log("dependent on counter2");
      setCounter(counter2);
    },
    [counter2]
  );

  //effect description
  //   useEffect(() => {
  //     if (timer % 60) {
  //       showAdd();
  //     }
  //   }, [timer]);

  console.log("3");

  return (
    <div>
      Use Effect Rules
      <div id="test"></div>
      <button
        onClick={function () {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
      <button
        onClick={function () {
          setCounter2(counter2 + 1);
        }}
      >
        {counter2}
      </button>
      <br />
      <br />
      <button
        onClick={function () {
          setIsInside(!isInside);
        }}
      >
        Enter/Leave
      </button>
      {isInside && <AirCon />}
    </div>
  );
}
