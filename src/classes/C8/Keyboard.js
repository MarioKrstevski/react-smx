/*


7. Make a keyboard (part of it) component <Keyboard /> that takes a list of characters as a prop called `chars`.

chars=["a", "b", "c", "d", " "]

- chars is always lowercase letters and only letters.
- You will have to add one space button by yourself at the end.
- Make a component <Key /> that takes a prop `char` and displays a button with the char as value.
- When clicked the button from `Key` should have visible change when clicked (play with css active class)
- Normal button should be white background and black text, active button should be black bg and white text
- ex: <Key char="m" /> will become <button> m </button> (class and event will need to be added)
- for the space button it should be: <Key char=" " /> -----> <button> Space </button>
- `Keyboard` should return a `div` for displaying the written text and `Key` component for each char in the chars list.
- When we click the Key's button it should add the text onto the screen (in the div).
- Add a "clear" button that will reset the text back to empty.

8. Keyboard2 (task 7 but with extra features), 
Extra: (if you are going to )
- Make a CapsLock button, that can be turned on and off, the text should always be "Caps Lock". 
When it is on it needs to have the 'active' state when it is off it is a 'normal' button (the css from before for normal/active).
- When we click on Key to type, if capslock is active then the letter should be a capital letter otherwise
always lowercase.
- You should probably modify the `Key` component for this to be able to happen
*/

import { useState } from "react";

// chars = []
function Key({ char, setWrittenText, writtenText, isCapsLockOn }) {
  if (char === "clear") {
    return (
      <button
        className="key"
        onClick={function () {
          setWrittenText("");
        }}
      >
        Clear
      </button>
    );
  }
  if (char === " ") {
    return (
      <button
        className="key"
        onClick={function () {
          setWrittenText(writtenText + char);
        }}
      >
        Space
      </button>
    );
  }
  return (
    <button
      className="key"
      onClick={function () {
        setWrittenText(
          isCapsLockOn
            ? writtenText + char.toUpperCase()
            : writtenText + char.toLowerCase()
        );
      }}
    >
      {char}
    </button>
  );
}

export default function Keyboard({ chars }) {
  const [writtenText, setWrittenText] = useState("");
  const [isCapsLockOn, setisCapsLockOn] = useState(false);
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          height: 20,
        }}
      >
        {writtenText}
      </div>

      <button
        style={{
          backgroundColor: isCapsLockOn ? "black" : "white",
          color: isCapsLockOn ? "white" : "black",
        }}
        onClick={function () {
          setisCapsLockOn(!isCapsLockOn);
        }}
      >
        Caps Lock
      </button>
      {chars.map((char) => {
        return (
          <Key
            isCapsLockOn={isCapsLockOn}
            key={char}
            char={char}
            setWrittenText={setWrittenText}
            writtenText={writtenText}
          />
        );
      })}

      <Key
        char=" "
        setWrittenText={setWrittenText}
        writtenText={writtenText}
      />
      <Key char="clear" setWrittenText={setWrittenText} />
    </div>
  );
}
