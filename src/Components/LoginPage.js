import React from "react";

import LoginForm from "./LoginPageComponents/LoginForm";
import AuthApiServices from "../services/auth-api-service";
import TokenServices from "../services/token-service";
import { Redirect } from "react-router";

import "../CSS/LoginPage.css";
import LoginNavBar from "./LoginPageComponents/LoginHeader";

export default class LoginPage extends React.Component {
  state = { error: null, redirect: false };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    const { user_name, password } = e.target;

    // TokenServices.saveAuthToken(TokenServices.makeBasicAuthToken(user_name.value,password.value))

    AuthApiServices.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenServices.saveAuthToken(res.authToken);
        this.setState({ redirect: true });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/inventory/1" />;
    }

    return (
      <div>
        <LoginNavBar />
        <LoginForm
          error={this.state.error}
          handlesubmit={this.handleSubmitJwtAuth}
        />
      </div>
    );
  }
}
