import { useEffect, useState } from "react";

function Game() {
  useEffect(() => {
    document.title = `Farm Ville`;

    return function () {
      // document.title = `New App`;
      // window.open("https://www.google.com");
    };
  }, []);
  return <div>game</div>;
}

export default function DocumentTitle(props) {
  const [count, setCount] = useState(0);
  const [isGamePlaying, setIsGamePlaying] = useState(false);

  useEffect(
    function () {
      if (!isGamePlaying) {
        if (count === 0) {
          document.title = `New App`;
          return;
        }
        document.title = `(${count}) New App`;
      }
    },
    [count, isGamePlaying]
  );

  //effect description
  // useEffect(()=>{
  //   changeUIForCall()
  // },[isPhoneRinging])

  return (
    <div>
      <button
        onClick={function () {
          setIsGamePlaying(!isGamePlaying);
        }}
      >
        on/off
      </button>
      {isGamePlaying && <Game />}
      {/* {isGamePlaying ? <Game /> : null} */}
      DocumentTitle works
      <br />
      Notifications
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={function () {
          setCount(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}
