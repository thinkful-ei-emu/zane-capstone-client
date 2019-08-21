import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import LoginNavBar from "./LoginPageComponents/LoginHeader";
import LoginForm from "./LoginPageComponents/LoginForm";

it("LoginNavBar on LoginPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <LoginNavBar />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("LoginForm on LoginPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
