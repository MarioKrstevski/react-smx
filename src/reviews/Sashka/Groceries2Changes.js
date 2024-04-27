import { useState } from "react";

// this includes the changes * part from the homework

export default function Groceries2Changes(props) {
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

          // we also need to check the date condition first, so we check the completed first because if the
          // time has passed we are ok to have duplicates (add the same thing in groceries only if it doesnt exist)
          // so we can have "egg" in groceries and "egg" in completed, and more "egg" in completed with time difference
          // but we cant have "egg" twice in the groceries still.
          const now = new Date();

          // try to find the grocery in already completed
          // if it doesnt find it .find() returns null
          const found = completed.find((groceryObj) => {
            return (
              groceryObj.name === newItem.toLowerCase() ||
              groceryObj.name === newItem.toUpperCase() ||
              groceryObj.name === newItem
            );
          });
          //   console.log(found);
          // it works
          if (found) {
            // in ideal world we have a function that very precisely checks this
            //  const timeDifference = timeDifferenceInDays(now, found.date)

            // but for now i am just gonna look at the days if there is 2 days difference
            const nowDay = now.getDay();
            const createdDay = new Date(found.date).getDay();

            // console.log(nowDay, createdDay);
            // is it more than 2 days/numbers bigger
            if (nowDay > createdDay + 2) {
              // we can add it

              // now we check if it doesnt exist in normal groceries
              if (
                groceries.includes(newItem.toLowerCase()) ||
                groceries.includes(newItem) ||
                groceries.includes(newItem.toUpperCase())
              ) {
                return;
              }

              // if it passes we check the max limit again  and we can add it

              if (groceries.length < 14) {
                setGroceries([...groceries, newItem]);
                setNewItem("");
              }
            }
          } else {
            // here if it hasnt been found in created, we still have to check about the normal groceries
            // it is duplicate code from above but we need to write it still (could extracted into a function)
            if (
              groceries.includes(newItem.toLowerCase()) ||
              groceries.includes(newItem) ||
              groceries.includes(newItem.toUpperCase())
            ) {
              return;
            }
            // if it passes we check the max limit again  and we can add it

            if (groceries.length < 14) {
              setGroceries([...groceries, newItem]);
              setNewItem("");
            }
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

                  const newCompletedGroceryObject = {
                    name: grocery,
                    // we put the whole date here for easier extraction of specific parts
                    date: date,
                    // we also have the formattedDate to  have the string
                    formattedDate: formattedDate,
                  };
                  setCompleted([
                    ...completed,
                    newCompletedGroceryObject,
                  ]);

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
              <li>
                {completedGrocery.name}{" "}
                {completedGrocery.formattedDate}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
