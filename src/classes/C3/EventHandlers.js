/*
Event handlers are just used with camelCase and must accept a function
*/
export default function EventHandlers(props) {
  function clickHandler() {
    alert("Locally created function CLICK");
  }
  const hoverHandler = () => {
    alert("Locally created function HOVER");
  };
  return (
    <div>
      EventHandlers
      <button
        onClick={function () {
          alert("Click Me");
        }}
      >
        Click Me
      </button>
      <br />
      <button
        onClick={() => {
          alert("With Arrow Function");
        }}
      >
        With Arrow Function
      </button>
      <br />
      <button onClick={clickHandler} onMouseOver={hoverHandler}>
        Locally created function
      </button>
      <br />
      <button onClick={props.onClick}>Passed from props</button>
      <br />
    </div>
  );
}
