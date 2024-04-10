/* 
There are 4 ways to do styles

- inline style with the `style` attribute

- using .css files (imported once anywhere, usually in App.js)

- using .module.css files (imported per file, and they generate unique classnames)

- styled components (not used anymore, but the idea is you use component that you can specify the colors to ex: "BlueH1")
- for styled components we use a library or we can define our own (https://styled-components.com/)

My recommendation is to use classes with .css and when needed to use inline styling
Ideally you should use tailwind since its the new hot thing
*/

import "./C3style.css";
import C3styles from "./C3.module.css";

<html></html>;
export default function Styling(props) {
  const styleObject = {
    color: "pink",
    width: 100,
    height: "6rem",
    backgroundColor: "red",
    border: "1px solid bold",
    borderRadius: true ? "3px" : "10px",
  };
  return (
    <div>
      {/* style="atr:value; atr2:value2" becomes */}
      {/* style={{atr:value,atr2:value2}} */}

      <div style={styleObject}>Style attribute</div>
      <div
        style={{
          color: "pink",
          width: 100,
          height: "6rem",
          backgroundColor: "red",
          border: "1px solid bold",
          borderRadius: true ? "3px" : "10px",
        }}
      >
        Style attribute
      </div>

      {/* with classes .css */}

      <div className="some-existing-class">Classes</div>

      {/* with classes .module.css */}

      <div className={C3styles.moduleClass}>
        Modules (check my class name in html it should be{" "}
        {C3styles.moduleClass}){JSON.stringify(C3styles, 2, null)}
      </div>
    </div>
  );
}
