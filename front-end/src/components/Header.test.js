import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Header from "./Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Header component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders without crashing", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("FinLit")).toBeInTheDocument();
  });

  it("shows login and register links when not authenticated", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("shows logout button when authenticated", () => {
    localStorage.setItem("token", "dummytoken");
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("handles logout correctly", async () => {
    localStorage.setItem("token", "dummytoken");
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockImplementation(() => mockNavigate);

    render(
      <Router>
        <Header />
      </Router>
    );

    act(() => {
      userEvent.click(screen.getByText("Logout"));
    });

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/login"), {
      timeout: 1100,
    });
  });
});
