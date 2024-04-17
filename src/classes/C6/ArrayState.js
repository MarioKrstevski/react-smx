function Bold() {
  return <b>bold</b>;
}

function Person({ name, surname }) {
  return (
    <div>
      Name: {name}; Surname: {surname}
    </div>
  );
}
export default function ArrayState(props) {
  let array = [1, 2, 3];

  let convertedArrayToBold = array.map((element) => (
    <Bold key={element} />
  ));

  let boldArray = [<Bold />, <Bold />, <Bold />];

  let people = [
    { name: "John", surname: "Dog" },
    { name: "Anne", surname: "Frank" },
  ];

  return (
    <div>
      {array}
      {boldArray}
      {convertedArrayToBold}
      <Bold />
      <Bold />
      <Bold />
      <Person name={"John"} surname={"Doe"} />
      <hr />
      {people.map((person) => (
        <div key={person.name}>
          Name {person.name}; Surname {person.surname}
        </div>
      ))}
      <hr />
      {people.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          surname={person.surname}
        />
      ))}
      <hr />
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
}
