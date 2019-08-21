import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import CreateFormHeader from "./CreateFormComponent/CreateFormHeader";
import Item from "./UpdateComponents/Item";
import UpdateForm from "./UpdateComponents/UpdateForm";

it("CreateFormHeader on Update Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <CreateFormHeader />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Update Form on UpdatePage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <UpdateForm />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
