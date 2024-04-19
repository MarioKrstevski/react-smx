// delta = 1.07 eur -> usd
import { useRef, useState } from "react";

function Counter() {
  console.log("counter rerender");
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
function CurrencyCalculator(props) {
  const rerenderCount = useRef(0);

  // ++ when rerender happens
  console.log("rerender");
  rerenderCount.current = rerenderCount.current + 1;

  const delta = 1.07;

  const euroInputRef = useRef();
  const usdInputRef = useRef();

  return (
    <div style={{ margin: 10 }}>
      <button
        onClick={function () {
          console.log(rerenderCount.current);
        }}
      >
        Rerender count
      </button>
      <Counter />
      <input
        ref={euroInputRef}
        type="text"
        name="euro"
        onChange={function (event) {
          // console.log(event.target.value);
          usdInputRef.current.value = event.target.value * delta;
        }}
      />{" "}
      EUR
      <br />
      <input
        ref={usdInputRef}
        onChange={function (event) {
          // console.log(event.target.value);
          euroInputRef.current.value = event.target.value / delta;
        }}
        type="text"
        name="usd"
      />{" "}
      USD
    </div>
  );
}

function CurrencyCalculator2(props) {
  const rerenderCount = useRef(0);

  // ++ when rerender happens
  console.log("rerender");
  rerenderCount.current = rerenderCount.current + 1;
  const delta = 1.07;

  const [euro, setEuro] = useState("");
  const [usd, setUsd] = useState("");

  return (
    <div>
      <button
        onClick={function () {
          console.log(rerenderCount.current);
        }}
      >
        Rerender count
      </button>
      <Counter />
      <input
        value={euro}
        type="text"
        name="euro"
        onChange={function (event) {
          if (!isNaN(event.target.value)) {
            setEuro(event.target.value);
            setUsd(event.target.value * delta);
          }
        }}
      />
      EUR
      <br />
      <input
        value={usd}
        onChange={function (event) {
          setUsd(event.target.value);
          setEuro(event.target.value / delta);
        }}
        type="text"
        name="usd"
      />
      USD
    </div>
  );
}

export default CurrencyCalculator;
