import { useState } from "react";

export default function Groceries2(props) {
  //["egg","syrup","cigarettes"]
  const [groceries, setGroceries] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [deleteCount, setDeleteCount] = useState(0);
  const [completed, setCompleted] = useState([]);

  return (
    <div>
      Groceries2 works
      <br />
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // if it is empty exit early
          if (!newItem) {
            return;
          }
          // if it already exists quit early, Egg and egg, lower and uppercase covered and mixed (exact string)
          if (
            groceries.includes(newItem.toLowerCase()) ||
            groceries.includes(newItem) ||
            groceries.includes(newItem.toUpperCase())
          ) {
            return;
          }

          // here there will be issue because now the string is in this format "groceryname 6/3/2024 2:14"
          // so we need to use .find() and use .startsWith() to check the first part if it matches the grocery name
          // but i am skipping this to keep it simple
          if (
            completed.includes(newItem.toLowerCase()) ||
            completed.includes(newItem) ||
            completed.includes(newItem.toUpperCase())
          ) {
            return;
          }
          // add only if there is a new item and we have less than 14
          if (newItem && groceries.length < 14) {
            setGroceries([...groceries, newItem]);
            setNewItem("");
          }
        }}
      >
        Add new
      </button>
      <br />
      <div>
        <ul>
          {groceries.map((grocery) => (
            <li>
              {grocery}{" "}
              <button
                onClick={() => {
                  // remove the current item only if the are allowed (not more than 10 times)
                  if (deleteCount < 10) {
                    setGroceries(
                      groceries.filter((g) => g !== grocery)
                    );

                    setDeleteCount(deleteCount + 1);
                  } else {
                    alert(
                      "You cant delete anymore. Must pay for PRO version"
                    );
                  }
                }}
              >
                x
              </button>{" "}
              {/* Done button */}
              <button
                onClick={() => {
                  // add to comleted array
                  // const newCompletedGrocery = grocery
                  const date = new Date();
                  const day = date.getDay();
                  const month = date.getMonth();
                  const year = date.getFullYear();
                  const hours = date.getHours();
                  const minutes = date.getMinutes();
                  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

                  const newCompletedGrocery =
                    grocery + " " + formattedDate;
                  setCompleted([...completed, newCompletedGrocery]);

                  // remove from groceries because it is done now
                  setGroceries(
                    groceries.filter((g) => g !== grocery)
                  );
                }}
              >
                Done
              </button>{" "}
            </li>
          ))}
        </ul>

        <h3>Completed</h3>
        <div>
          <ul>
            {completed.map((completedGrocery) => (
              <li>{completedGrocery}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
