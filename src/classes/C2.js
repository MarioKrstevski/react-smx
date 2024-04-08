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

function DiscoveringProps(props) {
  return <>{props.number}</>;
}

function DiscoveringProps(props) {
  const { number = 10, string, func } = props;
  return <>{number}</>;
}

function DiscoveringProps(props) {
  const number = props.number || 10;
  const string = props.string;
  const func = props.func;
  return <>{number}</>;
}
function DiscoveringProps({
  number = 10,
  string,
  func,
  obj,
  array,
  nan,
  bool,
  defaultt,
  name = "John Smith",
}) {
  return (
    <>
      {number}

      {}
    </>
  );
}
// JSX
export default function C2() {
  return (
    <div>
      <DiscoveringProps
        number={9}
        string="text"
        obj={{ a: 5 }}
        array={[5, 4, 3]}
        bool={false}
        defaultt
        nan={NaN}
        func={function test(params) {}}
        func2={test()}
        // name= "Mario"
      />
      {console.log()}
      {[]} {{}}
      {/* {add(5, 6)}
      <br />
      {add(5, 5)}
      <br />
      {add(5, 3)}
      <br />
      <Add x={5} y={10} /> */}
      {/* <Button variant={"primary"} className="smx" />
      <Button variant="secondary" /> */}
      {/* <Person name="Mario" />
      <Person name="Simona" />
      <Person name="Marina" />
      <Person name="Stole" /> */}
    </div>
  );
}
