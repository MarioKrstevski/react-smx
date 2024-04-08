/*
Props and Conditional Rednering

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

function DiscoveringProps3(props) {
  return <>{props.number}</>;
}

function DiscoveringProps2(props) {
  const { number = 10, string, func } = props;
  return <>{number}</>;
}

function DiscoveringProps1(props) {
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

function student({ age, fullName, hobbies, canDrive }) {
  return `I am ${fullName}, my age is ${age}, my hobbies are ${hobbies.join(
    " "
  )}, and    i ${canDrive ? "can" : "cant"} drive`;
}

function ButtonBootstrap({ variant }) {
  return (
    <button type="button" class={`btn btn-${variant}`}>
      Primary
    </button>
  );
}
function Student({ age, fullName, hobbies, canDrive }) {
  return (
    <p>
      I am {fullName}, my age is {age}, my hobbies are{" "}
      {hobbies.join(",")}, and i {canDrive ? "can" : "cant"} drive
      <h1> {NaN} </h1>
      <h1> {false} </h1>
      <h1> {true} </h1>
      <h1> {null} </h1>
      <h1> {undefined} </h1>
      <h1> {[]} </h1>
      <h1> {["1", "2", 5]} </h1>
    </p>
  );
}
function ConditionalRendering({ name, age }) {
  let surname = "Smith";
  let klasa = "blue";
  const ageCurrent = 2025;
  const isOldEnough = age >= 18;

  if (isOldEnough) {
    surname = "Davidovski";
    klasa = "green";
  }

  let classToUse = age >= 18 ? "blue" : "green";
  let printOnlyIftrue = age >= 18 && "zdravo";

  function test() {
    return "hi";
  }

  return (
    <div className={klasa}>
      <div className={classToUse}>Test</div>
      Test {name} {surname} age is {ageCurrent} {test()}{" "}
      {printOnlyIftrue}
      {age >= 18 ? "blue" : "green"}
    </div>
  );
}

function SpecialProps(props) {
  console.log(props);
  return <div>{props.children}</div>;
}
export default function C2() {
  return (
    <div>
      <SpecialProps
        key="kluc ce ignorira"
        // ref="se ignorira + error"
        children="Text"
        // children={<ButtonBootstrap />} this is valid
      />

      <SpecialProps>
        {" "}
        This is children
        <ButtonBootstrap variant={"primary"} />
      </SpecialProps>
      {/* <Student
        age={29}
        fullName={"Mario Krstevski"}
        hobbies={["skiiing", "football", "cats"]}
        canDrive={false}
      /> */}

      {/* <ConditionalRendering name="Johnnathan" age={18} /> */}

      {/* <DiscoveringProps
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
      {[]} {{}} */}
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
