import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsPage from "./NewsPage";
import axios from "axios";

jest.mock("axios");

describe("NewsPage", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Business Test Headline" }] },
    });
  });

  it("renders the Search component", async () => {
    render(<NewsPage />, { wrapper: MemoryRouter });

    expect(
      screen.getByPlaceholderText(/search for news articles/i)
    ).toBeInTheDocument();
  });

  it("renders the CategoriesList component", async () => {
    render(<NewsPage />, { wrapper: MemoryRouter });

    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("renders the CompaniesList component", async () => {
    render(<NewsPage />, { wrapper: MemoryRouter });

    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  it("renders the TopHeadlines component with 'business' category", async () => {
    render(<NewsPage />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText("Business Top Headlines")).toBeInTheDocument();
      expect(screen.getByText("Business Test Headline")).toBeInTheDocument();
    });
  });
});
