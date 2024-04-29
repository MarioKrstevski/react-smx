import { useState } from "react";
import "./App.css";
// import "./homeworks/H1/h1styles.css";
import C1 from "./classes/C1/C1";
import C10 from "./classes/C10/C10";
import C2 from "./classes/C2/C2";
import Cuips from "./classes/C2/Cuisp";
import C3 from "./classes/C3/C3";
import C4 from "./classes/C4/C4";
import C5 from "./classes/C5/C5";
import C6 from "./classes/C6/C6";
import C7 from "./classes/C7/C7";
import C8 from "./classes/C8/C8";
import C9 from "./classes/C9/C9";
import AuthContext from "./context/AuthContext";
import { celebrity_names } from "./data/constants";

function UL({ items, title = "Default Title" }) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function Recipe({ name, id, ingredients }) {
  return (
    <div>
      {name}
      {id}
      {ingredients}
    </div>
  );
}

function App() {
  const recipe = {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    nov: "nov",
  };
  const name = "Test";

  const copyRecipe = { ...recipe };

  const copy2 = {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    nov: "nov",
  };

  // const name = "Greek Salad"
  const [isLoggedIn, setisLoggedIn] = useState(false);
  function signOut() {
    setisLoggedIn(false);
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          setisLoggedIn(true);
        }}
      >
        login
      </button>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          signOut: signOut,
        }}
      >
        <C10 name={name} />
      </AuthContext.Provider>
      {/* <C1 /> */}
      {/* <Cuips /> */}
      {/* <C2 /> */}
      {/* <C3 /> */}
      {/* <C4 /> */}
      {/* <C5 /> */}
      {/* <C6 /> */}
      {/* <C7 /> */}
      {/* <C8 /> */}
      {/* <C9 /> */}

      {/* {recipe.name} */}
      {/* Greek Salad */}
      {/* <Recipe
        {...recipe}
        nov={"nov"}
        name={"Greek Salad"}
        ingredients={[
          "tomatoes",
          "cucumber",
          "onion",
          "olives",
          "feta",
        ]}
        id={"greek-salad"} */}
      {/* /> */}
      {/* <UL items={celebrity_names} title={"celebrity names"} />
      <UL items={[1, 2, 3, 4]} />
      <UL items={[true, false]} />
      <UL items={[]} /> */}
    </div>
  );
}

export default App;

// Вежба
// Create a component that renders a list, It should be called <UL /> that can take a prop items , and the output should be
// <ul>
//    <li> ... </li/>
//    ...
// </ul>
// We don’t know how many items there will be in the array.
// The code should work if the array changes
// (edited)
// 12:54
// Eve vi niza za vezbanje
// celebrity_names = ["Brad Pitt", "Angelina Jolie", "Beyoncé", "Tom Cruise", "Jennifer Aniston", "Leonardo DiCaprio", "Taylor Swift", "Kanye West", "Kim Kardashian", "Will Smith"]
