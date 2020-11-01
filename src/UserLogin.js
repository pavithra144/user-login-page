import React, { useState } from "react";
import "./UserLogin.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {  faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { SignUp } from "./SignUp";
 

export const UserLogin = () => {
  const [submit, setSubmit] = useState("");
  const [signup, setSignup] = useState(false)
  const [pwd, setPwd] = useState("");

  //pwd validation
  // // const pwdValidation = () => {
  // const pwdregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,4}$/;
  // // }

  // const val = pwd !== pwdregex ? "enter valid password" : pwd;
  
  const elementEmail = <FontAwesomeIcon icon={faEnvelope} />
  const elementLock = <FontAwesomeIcon icon={faLock} />
  return (    
    <div className="header">
      <form className="form-center">
        {signup ? <div><SignUp/></div> :<div>
          
          <h2 className="login-header">Login</h2>
        
        {elementEmail}
        <FontAwesomeIcon icon={["fas", "coffee"]} />
        <label type="text">Email</label>
        <input type="text"  className="in-one" placeholder="Enter your Email..." />
        {elementLock}
        <label type="password" className="password">
          Password
        </label>
        <input type="password"  placeholder="Enter Password..." />
        <i class="fas fa-lock"></i>
        <button
          href="link"
          type="submit"
          value={submit}
          className="login"
          onClick={() => setSubmit(document.write("you are in"))}
        >
          Login
        </button>
        <button
          href="link"
          type="submit"
          value={submit}
          className="login"
          onClick={() => setSignup(true) }
        >
          signup
        </button>
          </div> }
        
        {/* <a type = "submit" className="login" >Sign up</a> */}
      </form>
    </div>
  );
};
