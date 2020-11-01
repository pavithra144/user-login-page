import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faLock,faUser } from '@fortawesome/free-solid-svg-icons'

export const SignUp = () => {
    const elementUser = <FontAwesomeIcon icon={faUser} />
    const elementEmail = <FontAwesomeIcon icon={faEnvelope} />
    const elementLock = <FontAwesomeIcon icon={faLock} />
  return (
    <div>
      <form>
        <h2>SignUp</h2>
        {elementUser}
        <label type="text">Name</label>
        <input type="text" className="in-one" placeholder="Enter your name"/>
        {elementEmail}
        <label type="text">Email</label>
        <input
          type="text"
          className="in-one"
          placeholder="Enter your Email..."
        />
        {elementLock}
        <label type="password" className="password">
          Password
        </label>
        <input type="password" placeholder="Enter Password..." />
        <button
          href="link"
          type="submit"
          //   value={submit}
          className="login"
          //   onClick={() => setSignup(true) }
        >
          signup
        </button>
      </form>
    </div>
  );
};
