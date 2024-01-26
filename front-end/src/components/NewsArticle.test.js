import React from "react";
import { render, screen } from "@testing-library/react";
import NewsArticle from "./NewsArticle";

describe("NewsArticle Component", () => {
  const mockArticle = {
    title: "Test Title",
    description: "Test Description",
    author: "Test Author",
    url: "https://test.com",
    urlToImage: "https://test.com/image.jpg",
    publishedAt: "2021-01-01T00:00:00Z",
  };

  it("renders without crashing", () => {
    render(<NewsArticle article={mockArticle} />);
  });

  it("displays the title, description, and author", () => {
    render(<NewsArticle article={mockArticle} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
  });

  it("displays the image when urlToImage is provided", () => {
    render(<NewsArticle article={mockArticle} />);
    const image = screen.getByRole("img", { name: /test title/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockArticle.urlToImage);
  });

  it("does not display the image when urlToImage is not provided", () => {
    const articleWithoutImage = { ...mockArticle, urlToImage: null };
    render(<NewsArticle article={articleWithoutImage} />);
    expect(
      screen.queryByRole("img", { name: /test title/i })
    ).not.toBeInTheDocument();
  });

  it("renders the article link when URL is provided", () => {
    render(<NewsArticle article={mockArticle} />);
    const titleElement = screen.getByText("Test Title");
    const linkElement = titleElement.closest("a"); // Finds the nearest anchor tag to the title
    expect(linkElement).toHaveAttribute("href", mockArticle.url);
  });

  it("does not render the article link when URL is not provided", () => {
    const articleWithoutUrl = { ...mockArticle, url: null };
    render(<NewsArticle article={articleWithoutUrl} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("does not render when title or description is '[Removed]'", () => {
    const removedArticle = { ...mockArticle, title: "[Removed]" };
    const { container } = render(<NewsArticle article={removedArticle} />);
    expect(container.firstChild).toBeNull();
  });
});
