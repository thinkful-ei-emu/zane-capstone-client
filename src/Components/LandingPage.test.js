import React from "react";
import ReactDOM from "react-dom";
import IntroSection from "./LandingPage";
import { MemoryRouter } from "react-router-dom";
import Header from "./LandingPage";
import LandingFooter from "./LandingFooter";
import LoginSection from "./LandingPageComponents/LoginSection";
import renderer from "react-test-renderer";

it("IntroSection on Landing Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <IntroSection />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Header on Landing Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Landing Footer on Landing Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <LandingFooter />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
