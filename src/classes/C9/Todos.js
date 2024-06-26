import { useEffect, useState } from "react";
import useLSState from "../../hooks/useLSState";

export default function Todos(props) {
  const startTodos = [
    { id: 1, text: "Complete homework assignment", completed: false },
    { id: 2, text: "Go for a run", completed: true },
    { id: 3, text: "Buy groceries", completed: false },
    { id: 4, text: "Call mom", completed: true },
    { id: 5, text: "Read a book", completed: false },
  ];

  // const [todos, setTodos] = useState(
  //   startLSTodos ? startLSTodos : startTodos
  // );

  const [todos, setTodos] = useLSState("todos", startTodos);
  const [counter, setCounter] = useLSState("counter", 0);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((e) => e.json())
      .then((todos) => {
        console.log(todos);
        setTodos(
          todos.map((t) => {
            return {
              id: t.id,
              text: t.title,
              completed: t.completed,
            };
          })
        );
      });
  }

  useEffect(function () {
    // getData();
  }, []);

  function markDone(clickedId) {
    const clickedTodo = todos.find((todo) => todo.id === clickedId);
    clickedTodo.completed = !clickedTodo.completed;
    setTodos([...todos]);

    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === clickedId) {
    //       // todo.completed = !todo.completed;
    //       // return todo;
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
  }

  function deleteTodo(clickedId) {
    setTodos(todos.filter((todo) => todo.id !== clickedId));
  }
  // [
  //   { id: 1, text: "Complete homework assignment", completed: true },
  // ];

  // [
  //   { id: 1, text: "Complete homework assignment", completed: false },
  // ];

  return (
    <div>
      C:{counter}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => markDone(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}{" "}
            </span>
            <button
              style={{
                color: "red",
              }}
              onClick={() => deleteTodo(todo.id)}
            >
              x
            </button>{" "}
          </li>
        ))}
      </ul>
      <h3>Completed</h3>
      <ul>
        {todos
          .filter((t) => t.completed)
          .map((t) => (
            <li key={t.id}>{t.text}</li>
          ))}
        {todos.filter((t) => t.completed).length}
      </ul>
      {/* <form action="" onSubmit={e => {
        e.preventDefault()

      }}>

      <input type="text"  />
      <button>submit</button>
      </form> */}
    </div>
  );
}
