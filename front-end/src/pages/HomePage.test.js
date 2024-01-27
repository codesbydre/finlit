import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

jest.mock("../components/TopHeadlines", () => () => (
  <div>TopHeadlines Component</div>
));
jest.mock("../components/CategoriesList", () => () => (
  <div>CategoriesList Component</div>
));
jest.mock("../components/CompaniesList", () => () => (
  <div>CompaniesList Component</div>
));

describe("HomePage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows login and register links when not authenticated", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.queryByText("Explore News")).not.toBeInTheDocument();
    expect(screen.queryByText("Take Quiz")).not.toBeInTheDocument();
  });

  it("shows explore news and take quiz links when authenticated", () => {
    localStorage.setItem("username", "testUser");
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Explore News")).toBeInTheDocument();
    expect(screen.getByText("Take Quiz")).toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Register")).not.toBeInTheDocument();
  });

  it("renders the TopHeadlines, CategoriesList, and CompaniesList components", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("TopHeadlines Component")).toBeInTheDocument();
    expect(screen.getByText("CategoriesList Component")).toBeInTheDocument();
    expect(screen.getByText("CompaniesList Component")).toBeInTheDocument();
  });
});
