import { useRef, useState } from "react";

export default function LoginForm(props) {
  const usernameRef = useRef();
  const emailRef = useRef();
  // const passwordRef = useRef();
  const [password, setPassword] = useState("");

  function validatePassword(password) {
    if (password === "") {
      return "";
    }
    // Check if the password has at least 8 characters
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    // Check if the password has at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }

    // Check if the password has at least one digit
    if (!/\d/.test(password)) {
      return "Password must contain at least one digit.";
    }

    // Check if the password has at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)';
    }

    // If all conditions are met, return "Yes" indicating the password is valid
    return "";
  }

  return (
    <div>
      <input ref={usernameRef} type="text" name="username" />
      <br />

      <input ref={emailRef} type="text" name="email" />
      <br />

      <input
        // ref={passwordRef}
        value={password}
        required
        onChange={function (e) {
          setPassword(e.target.value);
        }}
        type="password"
        name="password"
      />

      <div className="error-msg">{validatePassword(password)}</div>

      <div className="ok-pass">
        {password &&
          validatePassword(password) === "" &&
          "Your password is super good"}
      </div>

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
