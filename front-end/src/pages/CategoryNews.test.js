import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryNews from "./CategoryNews";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "business",
  }),
}));

describe("CategoryNews Page", () => {
  it("renders the Search component", async () => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Test Headline" }] },
    });

    render(
      <MemoryRouter>
        <CategoryNews />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText(/search for news articles/i)
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Test Headline")).toBeInTheDocument();
    });
  });

  it("renders the CategoriesList component", async () => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Test Headline" }] },
    });

    render(
      <MemoryRouter>
        <CategoryNews />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Category")).toBeInTheDocument();
      expect(screen.getByText("Business")).toBeInTheDocument();
    });
  });

  it("renders the CompaniesList component", async () => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Test Headline" }] },
    });

    render(
      <MemoryRouter>
        <CategoryNews />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Company")).toBeInTheDocument();
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });

  it("renders the TopHeadlines component with the correct category", async () => {
    axios.get.mockResolvedValue({
      data: { articles: [{ title: "Test Headline" }] },
    });

    render(
      <MemoryRouter>
        <CategoryNews />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Business Top Headlines")).toBeInTheDocument();
      expect(screen.getByText("Test Headline")).toBeInTheDocument();
    });
  });
});
