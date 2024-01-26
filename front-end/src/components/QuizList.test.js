import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import QuizList from "./QuizList";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("QuizList Component", () => {
  const mockQuizzes = [
    {
      id: 1,
      title: "Quiz 1",
      topic: "Corporate Finance",
      difficulty: "Medium",
    },
    { id: 2, title: "Quiz 2", topic: "Investing", difficulty: "Easy" },
  ];

  it("renders initially without quizzes", () => {
    render(<QuizList />, { wrapper: MemoryRouter });
    expect(screen.getByText("Quizzes")).toBeInTheDocument();
  });

  it("handles API call failure gracefully", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    render(<QuizList />, { wrapper: MemoryRouter });
    await waitFor(() => {
      expect(screen.queryByText("Quiz 1")).not.toBeInTheDocument();
    });
  });

  it("assigns the correct difficulty class to each quiz", async () => {
    axios.get.mockResolvedValue({ data: mockQuizzes });

    render(<QuizList />, { wrapper: MemoryRouter });
    await waitFor(() => {
      const difficultyElement = screen.getByText("Easy").closest("span");
      expect(difficultyElement).toHaveClass("text-success");
    });
  });
});
