import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export const SignUp = () => {
  const [email, setEmail] = useState();
  const [passwrd, setPasswrd] = useState();
  const [signin, setSignin] = useState();

  const elementUser = <FontAwesomeIcon icon={faUser} />;
  const elementEmail = <FontAwesomeIcon icon={faEnvelope} />;
  const elementLock = <FontAwesomeIcon icon={faLock} />;
  debugger;
  return (
    <div>
      <form>
        <h2>SignUp</h2>
        {elementUser}
        <label type="text">Name</label>
        <input type="text" className="in-one" placeholder="Enter your name" />
        {elementEmail}
        <label type="text">Email</label>
        <input
          type="text"
          className="in-one"
          placeholder="Enter your Email..."
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {elementLock}
        <label type="password" className="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password..."
          onChange={(event) => setPasswrd(event.target.value)}
          required
        />
        {passwrd === "" || passwrd === null ? (
          <div>enter valid password</div>
        ) : null}
        <button
          type="submit"
          className="login"
          //  onClick={() => setSignin(document.write("you have created your account")) }
        >
          signup
        </button>
      </form>
    </div>
  );
};
