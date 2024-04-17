import ArrayState from "./ArrayState";
import FormState from "./FormState";
import ObjectState from "./ObjectState";
import React from "react";

function Todo({ title, removeItem }) {
  return (
    <li>
      {" "}
      {title}{" "}
      <button
        onClick={function () {
          removeItem(title);
        }}
      >
        Delete
      </button>
    </li>
  );
}
function Todos() {
  const initialTodos = [
    {
      title: "Learn React",
      description: "Study React basics",
      completed: false,
    },
    {
      title: "Build a Todo App",
      description: "Create a simple Todo application",
      completed: true,
    },
    {
      title: "Exercise",
      description: "Go for a run",
      completed: false,
    },
    {
      title: "Read a Book",
      description: 'Finish reading "The Great Gatsby"',
      completed: true,
    },
    {
      title: "Write a Blog Post",
      description: "Write about your favorite hobby",
      completed: false,
    },
    {
      title: "Cook Dinner",
      description: "Try out a new recipe",
      completed: false,
    },
    {
      title: "Organize Desk",
      description: "Declutter and tidy up your workspace",
      completed: false,
    },
    {
      title: "Call a Friend",
      description: "Catch up with an old friend",
      completed: true,
    },
  ];

  const [todos, setTodos] = React.useState(initialTodos);

  const [numbers, setNumbers] = React.useState([1, 2, 3]);

  function removeItem(title) {
    // use .filter to ignore the 'deleting' item
    // we need a new reference/new array

    let newTodos = todos.filter((todo) => todo.title !== title);
    setTodos(newTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.title}
            title={todo.title}
            removeItem={removeItem}
          />
        ))}
      </ul>

      <button
        onClick={function () {
          // we need a new array
          // copy previous items
          // add new item

          let newTodo = {
            title: "New Todo",
            description: "Newest todo",
            completed: false,
          };

          // DONT DO

          // todos.push()

          setTodos([...todos, newTodo]);
          // setTodos([newTodo, ...todos]);
        }}
      >
        Add
      </button>
    </div>
  );
}
function randomNumber(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Numbers() {
  // let numbers = [1, 2, 3];
  const [numbers, setNumbers] = React.useState([1, 2, 3]);

  function handleAdd() {
    let newNumbers = [...numbers, randomNumber()];
    setNumbers(newNumbers);
  }

  function handleRemove() {
    let randomIndex = randomNumber(0, numbers.length - 1);

    // let newNumbers = [
    //   ...numbers.slice(0, randomIndex),
    //   ...numbers.slice(randomIndex + 1, numbers.length),
    // ];

    const newNumbers = numbers.filter((number, index) => {
      if (index !== randomIndex) {
        return true;
      } else {
        return false;
      }
    });

    console.log(numbers, newNumbers);
    setNumbers(newNumbers);
  }

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default function C6(props) {
  return (
    <div>
      C6 works
      {/* <ArrayState /> */}
      <Numbers />
      {/* <Todos /> */}
      {/* <ObjectState />
        <FormState /> */}
    </div>
  );
}

// [1, 2, 3]

// [1, 2, 3, 4]

// [1, 2, 3, 4, 5]

// .filter(item => item !== deleteElement)

// [1, 2, 3, 4]
