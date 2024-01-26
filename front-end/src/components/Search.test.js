import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Search from "./Search";

jest.mock("axios");

describe("Search Component", () => {
  it("renders the search input and button", () => {
    render(<Search />);
    expect(
      screen.getByPlaceholderText(/search for news articles/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("updates the query state on input change", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText(/search for news articles/i);
    userEvent.type(input, "test query");
    expect(input.value).toBe("test query");
  });

  it("performs a search on form submission", async () => {
    const mockArticles = [{ title: "Test Article" }];
    axios.get.mockResolvedValue({ data: mockArticles });

    render(<Search />);
    const input = screen.getByPlaceholderText(/search for news articles/i);
    userEvent.type(input, "test query");
    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`/api/news/search?q=test query`);
      expect(screen.getByText("Test Article")).toBeInTheDocument();
    });
  });
});
