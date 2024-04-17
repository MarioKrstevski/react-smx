import React, { useState } from "react";

function Key({ char, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick(char);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  return (
    <buttonf
      className={isActive ? "active" : ""}
      onClick={handleClick}
    >
      {char === " " ? "Space" : char}
    </buttonf>
  );
}

function Keyboard({ chars }) {
  const [displayText, setDisplayText] = useState("");

  const handleKeyClick = (char) => {
    if (char === "clear") {
      setDisplayText("");
    } else {
      setDisplayText((prevText) => prevText + char);
    }
  };

  return (
    <div>
      <div>{displayText}</div>
      <div className="keyboard">
        {chars.map((char, index) => (
          <Key key={index} char={char} onClick={handleKeyClick} />
        ))}
        <Key char="clear" onClick={handleKeyClick} />
      </div>
    </div>
  );
}

function Keyboard2({ chars }) {
  const [displayText, setDisplayText] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleKeyClick = (char) => {
    if (char === "clear") {
      setDisplayText("");
    } else if (char === "Caps Lock") {
      console.log("here");
      setCapsLockOn(!capsLockOn);
    } else {
      setDisplayText((prevText) => prevText + char);
    }
  };

  return (
    <div>
      <div>{displayText}</div>
      <div className="keyboard">
        {chars.map((char, index) => (
          <Key
            key={index}
            char={char}
            onClick={handleKeyClick}
            capsLockOn={capsLockOn}
          />
        ))}
        <Key char="Caps Lock" onClick={handleKeyClick} />
        <Key char="clear" onClick={handleKeyClick} />
      </div>
    </div>
  );
}

export default function H5(props) {
  return (
    <div>
      H5 works
      <Keyboard chars={["a", "b", "c", "d", " "]} />
      <Keyboard2 chars={["a", "b", "c", "d", " "]} />
    </div>
  );
}
