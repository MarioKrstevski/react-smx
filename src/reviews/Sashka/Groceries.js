import { useState } from "react";

function Grocery({ groceries, setGroceries, checkCompleted }) {
  const [grocery, setGrocery] = useState("");

  function handleAdd() {
    let yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    );
    let yesterdaysDate = yesterday.toLocaleDateString();
    let todaysDate = new Date().toLocaleDateString();
    let groceryNew = grocery.toLowerCase();

    if (groceries.length < 14) {
      if (
        grocery !== "" &&
        !groceries.includes(groceryNew) &&
        !checkCompleted.includes(
          `${groceryNew} - ${yesterdaysDate}`
        ) &&
        !checkCompleted.includes(`${groceryNew} - ${todaysDate}`)
      ) {
        setGroceries([...groceries, groceryNew]);
      } else if (
        groceries.includes(groceryNew) ||
        checkCompleted.includes(
          `${groceryNew} - ${yesterdaysDate}`
        ) ||
        checkCompleted.includes(`${groceryNew} - ${todaysDate}`)
      ) {
        alert("The product already exists in the list!");
      } else {
        return;
      }
    } else {
      alert("The grocery list can't have more than 14 items.");
    }

    setGrocery("");
  }

  return (
    <div>
      <input
        type="text"
        name={"grocery"}
        value={grocery}
        onChange={function (e) {
          setGrocery(e.target.value);
        }}
      />
      <button
        onClick={function () {
          handleAdd();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default function Groceries() {
  const initialList = ["oat granola", "strawberries"];
  const initialCompleted = [
    { name: "butter", date: "4/24/2024", time: "15:50" },
  ];
  const [groceries, setGroceries] = useState(initialList);
  const [deleteCount, setDeleteCount] = useState(0);
  const [completed, setCompleted] = useState(initialCompleted);
  const [checkCompleted, setCheckCompleted] = useState([
    "butter - 4/24/2024",
  ]);
  // the initial states in Completed and CheckCompleted are just set to check if the last change
  // works as it should

  function handleRemove(product) {
    if (deleteCount < 10) {
      let newList = groceries.filter(
        (grocery) => grocery !== product
      );
      setGroceries(newList);
      setDeleteCount(deleteCount + 1);
    } else {
      alert("Cannot delete more than 10 items!");
    }
  }

  function handleCompleted(product) {
    let listRenewed = groceries.filter(
      (grocery) => grocery !== product
    );
    setGroceries(listRenewed);

    let date = new Date().toLocaleDateString();
    let time = new Date().toTimeString().slice(0, 5);
    setCompleted([
      ...completed,
      { name: product, date: date, time: time },
    ]);
    setCheckCompleted([...checkCompleted, `${product} - ${date}`]);
  }

  return (
    <div>
      <Grocery
        groceries={groceries}
        setGroceries={setGroceries}
        checkCompleted={checkCompleted}
      />
      <h2>Groceries list</h2>{" "}
      <ul>
        {groceries.map((product) => (
          <li key={product}>
            {product}{" "}
            <button
              onClick={function () {
                handleRemove(product);
              }}
            >
              ❌
            </button>{" "}
            <button
              onClick={function () {
                handleCompleted(product);
              }}
            >
              ✅
            </button>
          </li>
        ))}
      </ul>
      <h3>Completed</h3>
      <ul>
        {completed.map((item) => (
          <li
            style={{ width: "300px", textAlign: "start" }}
            key={item.name}
          >
            {item.name} - {item.date} {item.time}h
          </li>
        ))}
      </ul>
    </div>
  );
}
