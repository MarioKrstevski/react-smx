// JSX can return one item (string/component) or multiple (array of strings/components)

function ListAndKeys() {
  const items = [1, 4, 3, 7, 5];
  return (
    <div>
      {items.map((number, index) => (
        // adding a key prop, is like adding an ID that react understand so that it can easily keep track of a component
        // otherwise it will rerender everything
        <div key={index}>{number}</div>
      ))}
    </div>
  );
}
function uuid() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 5; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

console.log(uuid());

function List(props) {
  // usually we don't want strings but we want components generated from the strings (data)
  // we do that with .map() and for each value we generate jsx

  return (
    <div>
      List works
      {props.items}
      {/* example of generating new jsx for each value in the array */}
      <div>{props.items[0]}</div>
      <div>{props.items[1]}</div>
      <div>{props.items[2]}</div>
      {/* or to not do this work manually we use .map() for when we dont know how many items we will have */}
      {props.items.map((value) => {
        return <div>{value}</div>;
      })}
      {/* you can use .map .filter .splice. or any other function that matters to you but .map is the most used 
        if we want to include every value */}
    </div>
  );
}

export default function Lists() {
  const predefinedArray = ["one", "two", "three", "fourth"];
  return (
    <>
      {/* {"onee"}
      {"two"}
      {"three"} */}

      {/* is equivalent to */}

      {/* {["one", "two", "three"]} */}

      {/* {predefinedArray} */}

      {/* <List items={predefinedArray} /> */}

      {/* <ListAndKeys /> */}
      {/* 

       */}

      {/* TODO: Nested lists, separator in between */}
    </>
  );
}
