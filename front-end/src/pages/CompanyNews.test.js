import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CompanyNews from "./CompanyNews";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ companyName: "Apple" }),
}));

describe("CompanyNews Page", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        { title: "Article Title for Apple", description: "Test Description" },
      ],
    });
  });

  it("renders the Search component", async () => {
    render(<CompanyNews />, { wrapper: MemoryRouter });

    expect(
      screen.getByPlaceholderText(/search for news articles/i)
    ).toBeInTheDocument();
  });

  it("renders the CategoriesList component", async () => {
    render(<CompanyNews />, { wrapper: MemoryRouter });

    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("renders the CompaniesList component", async () => {
    render(<CompanyNews />, { wrapper: MemoryRouter });

    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  it("renders news articles for the specified company", async () => {
    render(<CompanyNews />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText("Article Title for Apple")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });
  });
});
