import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../screens/login/Login";
import Home from "../screens/home/Home";
import PrivateRoute from "../common/PrivateRoute";
import Profile from "../screens/profile/Profile";

class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = "";
    this.state = {
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Login {...props} baseUrl={this.baseUrl} />}
            />
            <PrivateRoute
              exact
              path="/home"
              component={Home}
              baseUrl={this.baseUrl}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
              baseUrl={this.baseUrl}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Controller;
