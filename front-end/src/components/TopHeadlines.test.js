import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import TopHeadlines from "./TopHeadlines";

jest.mock("axios");

describe("TopHeadlines Component", () => {
  it("displays articles on successful API call", async () => {
    const mockArticles = [{ title: "Article 1" }, { title: "Article 2" }];
    axios.get.mockResolvedValue({ data: mockArticles });

    render(<TopHeadlines />);
    await waitFor(() => {
      expect(screen.getByText("Article 1")).toBeInTheDocument();
      expect(screen.getByText("Article 2")).toBeInTheDocument();
    });
  });

  it("shows an error message on API call failure", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    render(<TopHeadlines />);
    await waitFor(() => {
      expect(screen.getByText("Error fetching headlines")).toBeInTheDocument();
    });
  });

  it("fetches articles for a specific category when provided", async () => {
    const mockCategoryArticles = [{ title: "Business Article" }];
    axios.get.mockResolvedValue({ data: mockCategoryArticles });

    render(<TopHeadlines category="business" />);
    await waitFor(() => {
      expect(screen.getByText("Business Article")).toBeInTheDocument();
    });
  });
});
