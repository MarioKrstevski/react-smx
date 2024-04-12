// Example usage
const randomString = generateRandomString();
console.log(randomString);

function People() {
  const people = [
    {
      id: uuid(),
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

  let listItems = people.map((person) => (
    <li key={person.id}>
      <img
        src={
          "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200"
        }
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <div className="people">
      <ol>{listItems}</ol>
    </div>
  );
}

function Kifla(props) {
  return <button>{props.name}</button>;
}
// Generating components upfront even before they are needed, so that later we
// can just mention them

let k1 = <Kifla name="sunka" />;
let k2 = <Kifla name="sirenje" />;
let k3 = <Kifla name="spanak" />;
let k4 = <Kifla name="pizza" />;
let kifalOpcii = ["pizza", "stek"];
let gotoviKifli = [k1, k2, k3, k4];

// Demonstrating how we can play with our arrays, to show only specific items
// or show alternative text when we have no items
// or how we can check the props from components in an array because they are just objects

function Pekara(props) {
  console.log(gotoviKifli);
  let prikaz = gotoviKifli.filter(
    (k) => k.props.name === props.naracka
  );
  let prikaz2 = props.gotoviKifli.filter(
    (k) => k.props.name === props.naracka
  );
  //   if (
  //      gotoviKifli.find((kifla) => {
  //       return kifla.props.name === props.naracka;
  //     })
  //   ) {
  //     console.log("ja imame", props.naracka);
  //   }
  return (
    <div className="polica">
      {prikaz.length > 0 ? prikaz : "Nema kifla za vas"}
      {prikaz2}
    </div>
  );
}
