import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Register Component", () => {
  it("renders the registration form", () => {
    render(<Register />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("updates input fields on user input", async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const usernameInput = screen.getByLabelText("Username");
    await act(async () => {
      userEvent.type(usernameInput, "testuser");
    });
    expect(usernameInput.value).toBe("testuser");
  });

  it("submits the form with user data", async () => {
    axios.post.mockResolvedValue({});
    render(<Register />, { wrapper: MemoryRouter });
    userEvent.type(screen.getByLabelText("Username"), "testuser");
    userEvent.type(screen.getByLabelText("Password"), "testpass");
    userEvent.type(screen.getByLabelText("First Name"), "testfn");
    userEvent.type(screen.getByLabelText("Last Name"), "testln");
    userEvent.type(screen.getByLabelText("Email"), "testemail@example.com");

    userEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3001/api/users/register",
        {
          username: "testuser",
          password: "testpass",
          first_name: "testfn",
          last_name: "testln",
          email: "testemail@example.com",
        }
      );
    });
  });

  it("displays an error message on registration failure", async () => {
    axios.post.mockRejectedValue(new Error("Registration failed"));

    render(<Register />, { wrapper: MemoryRouter });

    await act(async () => {
      userEvent.type(screen.getByLabelText("Username"), "testuser");
      userEvent.click(screen.getByRole("button", { name: /register/i }));
    });

    await waitFor(() => {
      expect(
        screen.getByText("Error registering. Please try again.")
      ).toBeInTheDocument();
    });
  });
});
