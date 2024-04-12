/* <div onclick="click()">

</div>


<button id="kopce"></button>

doc.getByID('id').addEventListener('click', (e)=>{})
doc.getByID('id').onclick = ()=>{} 
*/

// Create h2, p, div (button, button)

// h2 - click -> heading clicked
// p - mouse over -> paragraph hovered
// div - click -> div clicked
// b1 -  click -> button1 clicked
// b2 - click -> button2 clicked

function Task1(props) {
  return (
    <div>
      <h2
        onClick={() => {
          console.log("heading clicked");
        }}
      >
        Text
      </h2>
      <p
        onMouseOver={() => {
          console.log("paragraph hovered");
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem tempore praesentium placeat dignissimos quibusdam
        explicabo!
      </p>
      <div
        onClick={() => {
          console.log("div clicked");
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("button1 clicked");
          }}
        >
          btn1
        </button>
        <button
          onClick={() => {
            console.log("button2 clicked");
          }}
        >
          btn2
        </button>
      </div>
    </div>
  );
}

function Buttons(props) {
  return (
    <div>
      {props.letters.map((letter) => (
        <button
          key={letter}
          onClick={() => {
            console.log(letter);
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

<Buttons letters={["a", "e", "i", "o", "u"]} />;
