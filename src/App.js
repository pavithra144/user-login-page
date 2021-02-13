import React from "react";
import "./App.css";
import { UserLogin } from "./UserLogin";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <UserLogin />
        {/* <Switch>
          <Route path="/" exact component={UserLogin} /> */}
        {/* <Route path="/dashboard" exact component={Dashboard}>
            <Redirect to="/dashboard">
              <Dashboard />
            </Redirect>
          </Route> */}
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
