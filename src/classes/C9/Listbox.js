import { useState } from "react";

export default function Listbox(props) {
  // from primereact
  const cities = ["New York", "Rome", "London", "Istanbul", "Paris"];
  const [selected, setSelected] = useState([]);

  return (
    <div
      style={{
        width: 100,
        border: "1px solid black",
      }}
    >
      {cities.map((city) => (
        <div
          key={city}
          onClick={function () {
            if (selected.includes(city)) {
              setSelected(selected.filter((c) => c !== city));
            } else {
              setSelected([...selected, city]);
            }
          }}
          style={{
            backgroundColor: selected.includes(city)
              ? "lightskyblue"
              : "lightgray",
          }}
        >
          {city}
        </div>
      ))}
    </div>
  );
}
