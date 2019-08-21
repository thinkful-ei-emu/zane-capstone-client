import React from "react";

import "./App.css";

import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import MyInventory from "./Components/MyInventory";
import CreateItem from "./Components/CreateItem";
import UpatePage from "./Components/UpdatePage";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path="/" component={LandingPage} />
        <PublicRoute exact path="/signup" component={SignUp} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PrivateRoute path="/inventory" component={MyInventory} />
        <PrivateRoute path="/create-form" component={CreateItem} />
        <PrivateRoute path="/update/:itemid" component={UpatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
