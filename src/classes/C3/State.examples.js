function Text(props) {
  console.log("Text Rendering");

  let [variable, setVariable] = useState("");
  let clickHandler = function () {
    setVariable(variable + "a");
  };

  let buttonUI = (
    <button onClick={clickHandler}>Text {variable}</button>
  );
  return <div>{buttonUI}</div>;
}

function Button(prop) {
  let [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsClicked(true);
        }}
      >
        {isClicked ? "I was clicked" : "I am waiting to be clicked"}
      </button>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {isClicked ? "On" : "Off"}
      </button>
    </>
  );
}
