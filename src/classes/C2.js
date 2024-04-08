/*
Props and State

*/

function add(x, y) {
  console.log(x + y);
  return x + y;
}

function Add({ y, x }) {
  console.log(x + y);
  return <>{x + y}</>;
}

function Person({ name }) {
  return <div>I am {name}. I am the best</div>;
}

function Button({ variant, className }) {
  return (
    <button
      style={{ color: variant === "primary" ? "blue" : "gray" }}
      className={className}
    >
      Click me
    </button>
  );
}
export default function C2() {
  return (
    <div>
      {/* {add(5, 6)}
      <br />
      {add(5, 5)}
      <br />
      {add(5, 3)}
      <br />
      <Add x={5} y={10} /> */}

      <Button variant={"primary"} className="smx" />
      <Button variant="secondary" />

      {/* <Person name="Mario" />
      <Person name="Simona" />
      <Person name="Marina" />
      <Person name="Stole" /> */}
    </div>
  );
}
