import "./App.css";
// import "./homeworks/H1/h1styles.css";
import C1 from "./classes/C1/C1";
import C2 from "./classes/C2/C2";
import Cuips from "./classes/C2/Cuisp";
import C3 from "./classes/C3/C3";
import C4 from "./classes/C4/C4";
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

function App() {
  return (
    <div className="App">
      {/* <C1 /> */}
      {/* <Cuips /> */}
      {/* <C2 /> */}
      <C3 />
      {/* <C4 /> */}

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
