import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import CreateFormHeader from "./CreateFormComponent/CreateFormHeader";
import CreationForm from "./CreateFormComponent/CreationForm";

it("Create Form Header on Create Item Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <CreateFormHeader />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("CreationForm  on Create Item Pagerenders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <CreationForm />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
