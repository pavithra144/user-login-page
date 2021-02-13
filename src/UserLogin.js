import React, { useState, useEffect } from "react";
import "./UserLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { SignUp } from "./SignUp";
// import { Link, Redirect, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export const UserLogin = () => {
  const [submit, setSubmit] = useState("");
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const elementEmail = <FontAwesomeIcon icon={faEnvelope} />;
  const elementLock = <FontAwesomeIcon icon={faLock} />;

  const validatePasswrd = () => {
    if (email === "" || email === null) {
      alert("enter email id");
    }
    if (pwd === "" || pwd === null) {
      alert("Enter password");
    }
  };

  const LoggingIn = () => {
    setSubmit(validatePasswrd());
    setIsUserLoggedIn(true);
  };

  return (
    <div className="header">
      {isUserLoggedIn ? (
        <BrowserRouter>
          <Route path="/dashboard" component={Dashboard}></Route>
        </BrowserRouter>
      ) : (
        <div>helli</div>
      )}
      <form className="form-center">
        {signup ? (
          <SignUp />
        ) : (
          <div>
            <h2 className="login-header">Login</h2>
            {elementEmail}
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {elementLock}
            <label className="password">Password</label>
            <input
              type="password"
              // value={pwd}
              placeholder="Enter Password..."
              onChange={(event) => setPwd(event.target.value)}
            />
            {/* <Route exact path="/dashboard">
              {isUserLoggedIn ? (
                <Redirect to="/dashboard">
                  <Dashboard />
                </Redirect>
              ) : (
                <div>hi</div>
              )}
            </Route> */}
            <button type="submit" className="login" onClick={() => LoggingIn()}>
              Login
            </button>
            <button
              type="submit"
              className="login"
              onClick={() => setSignup(true)}
            >
              signup
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

//pwd validation
// // const pwdValidation = () => {
// const pwdregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,4}$/;
// // }

// const val = pwd !== pwdregex ? "enter valid password" : pwd;
