import { useRef, useState } from "react";

export default function LoginForm(props) {
  const usernameRef = useRef();
  const emailRef = useRef();
  // const passwordRef = useRef();
  const [password, setPassword] = useState("");

  return (
    <div>
      <input ref={usernameRef} type="text" name="username" />
      <br />

      <input ref={emailRef} type="text" name="email" />
      <br />

      <input
        // ref={passwordRef}
        value={password}
        onChange={function (e) {
          setPassword(e.target.value);
        }}
        type="password"
        name="password"
      />
      <div></div>

      <br />
      <button
        onClick={function () {
          console.log(
            usernameRef.current.value,
            emailRef.current.value,
            // passwordRef.current.value
            password
          );
        }}
      >
        Login
      </button>
    </div>
  );
}
