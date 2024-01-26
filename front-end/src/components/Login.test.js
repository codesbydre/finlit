import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("Login Component", () => {
  it("renders the login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("updates the username and password fields on user input", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");

    await act(async () => {
      userEvent.type(usernameInput, "testuser");
      userEvent.type(passwordInput, "testpass");
    });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpass");
  });
});
