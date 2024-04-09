/*
Topics:

- Props
- Conditional Rednering

*/

// a regular js functino that adds numbers
function add(x, y) {
  console.log(x + y);
  return x + y;
}

// React alternative of the add function
// - instead of taking in multiple arguments, we take in one object that contains all the needed arguments as keys
function Add({ y, x }) {
  console.log(x + y);
  return <>{x + y}</>; // dont forget we must always return JSX (something that will be displayed)
}

// example of using the prop in JSX with the {} syntax
// {} means inside we can write javascript code that can be evaluated (anything except if statements)

function Person({ name }) {
  return <div>I am {name}. I am the best</div>;
}

// example of how we could pass a prop down to an atribute
// example how we use a prop to make a decision for color
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
// different syntactic ways of writing the same component logic
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

// example of how we can accept all different kinds of Javascript Values

function DiscoveringProps({
  number = 10, // this is a default value if none is provided
  string,
  func,
  obj,
  array,
  nan,
  bool,
  defaultt,
  name = "John Smith", // this is a default value if none is provided
}) {
  return (
    <>
      {number}
      {/* Visually only strings and numbers can be trusted that will show up, everything else should be converted into a string format in some way (arrays, objects, booleans) */}
      {}
    </>
  );
}

// JSX is similar to returning a string, just that we put the string directly onto the screen
function student({ age, fullName, hobbies, canDrive }) {
  return `I am ${fullName}, my age is ${age}, my hobbies are ${hobbies.join(
    " "
  )}, and    i ${canDrive ? "can" : "cant"} drive`;
}

// example of how Bootstrap would have written a button component that supports different variants
// keep in mind that there should be existing css classes for each variant for this to work
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
      {/* React will try to convert everything to string as best it can to show it on the screen */}
      {/* But some values will not return anything, we use null intentinally for this reason when we dont want to return anything visually */}
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
// a Component is nothing but a function, so everything that we can write inside a function, can be written here
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
// key, ref, and children are special props
// children is used to represent the text(other elements) between the opening and closing tags of a component
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
