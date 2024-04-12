/*
Topics: 

- Lists
- Event handlers
- Styling
- State

*/

import EventHandlers from "./EventHandlers";
import Lists from "./Lists";
import State from "./State";
import Styling from "./Styling";

function Button({ children, variant, size }) {
  let classes = `btn btn-${variant} btn-${size}`;
  return <button className={classes}>{children}</button>;
}

const preparedButton = (
  <Button>
    Children Two <img src="" alt="test" />
  </Button>
);
// console.log(preparedButton);

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

//If the person is a chemist, then the name should be
// with a red color, otherwise black (as normal)

function People({ listItems }) {
  console.log(listItems);

  // if() {} else {} ----- ? :  ----- &&

  return (
    <div>
      {listItems.map((person) => {
        return (
          <div
            style={{
              color:
                person.profession === "chemist" ? "red" : "black",
            }}
            key={person.id}
          >
            {person.name} {person.profession === "chemist" && "💉💉"}
          </div>
        );
      })}
    </div>
  );
}

function ShoppingList({ list }) {
  return (
    <ul
      style={{
        textAlign: "left",
      }}
    >
      {list.map((product) => {
        if (product.done) {
          return (
            <li key={product.id}>
              <span
                style={{
                  textDecoration: "line-through",
                }}
              >
                {product.name}
              </span>
              <span style={{ marginLeft: 10 }}>{"  ✅"}</span>
            </li>
          );
        } else {
          return <li key={product.id}>{product.name}</li>;
        }
      })}
    </ul>
  );
}

const RandomButton = () => {
  // Generate random values for styles
  const randomFontSize = Math.floor(Math.random() * 20 + 12) + "px"; // Random font size between 12px and 32px
  const randomBorderRadius = Math.floor(Math.random() * 20) + "px"; // Random border radius between 0px and 20px
  const randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
  const randomBackgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16); // Random background color

  // Define button style object with random styles
  const buttonStyle = {
    fontSize: randomFontSize,
    borderRadius: randomBorderRadius,
    color: randomColor,
    backgroundColor: randomBackgroundColor,
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Random Button</button>;
};

// old code
// setTimeout(function () {
//   document.getElementById("btn").addEventListener("click", () => {
//     console.log("hi");
//   });
// }, 1000);
function Task1(props) {
  return (
    <div>
      <h2
        onClick={() => {
          console.log("heading clicked");
        }}
      >
        Text
      </h2>
      <p
        onMouseOver={() => {
          console.log("paragraph hovered");
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem tempore praesentium placeat dignissimos quibusdam
        explicabo!
      </p>
      <div
        onClick={() => {
          console.log("div clicked");
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("button1 clicked");
          }}
        >
          btn1
        </button>
        <button
          onClick={() => {
            console.log("button2 clicked");
          }}
        >
          btn2
        </button>
      </div>
    </div>
  );
}

export default function C3(props) {
  function doSomething() {
    console.log(5 + 10);
    console.log(Date.now());
  }
  return (
    <div>
      <button
        onClick={doSomething}
        onMouseOver={function () {
          console.log("i was hovered");
        }}
      >
        Click
      </button>

      <div
        onAnimationEnd={doSomething}
        onMouseOut={doSomething}
        onClickCapture={doSomething}
        onPaste={doSomething}
      >
        Hover
      </div>

      {/* <Lists /> */}
      {/* <Styling /> */}
      {/* 
      <EventHandlers
        onClick={function () {
          console.log("Passed from above");
          alert("Passed from above");
        }}
      />
      <State /> */}

      {/* Below this are exercises during class */}
      <hr />

      {/* <People listItems={people} />
      <hr />
      <ShoppingList
        list={[
          { id: 1, name: "Milk", done: false },
          { id: 2, name: "Eggs", done: false },
          { id: 3, name: "Bread", done: true },
          { id: 4, name: "Apples", done: false },
          { id: 5, name: "Chicken", done: false },
          { id: 6, name: "Rice", done: true },
        ]}
      />

      <RandomButton /> */}
    </div>
  );
}
