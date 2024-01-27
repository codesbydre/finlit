import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import QuizPage from "./QuizPage";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ quizId: "1" }),
  useNavigate: () => mockedNavigate,
}));

describe("QuizPage", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          question: "Question 1",
          option_a: "Option A",
          option_b: "Option B",
          option_c: "Option C",
          option_d: "Option D",
        },
      ],
    });
  });

  it("fetches and displays quiz questions", async () => {
    await act(async () => {
      render(
        <Router>
          <QuizPage />
        </Router>
      );
    });

    await waitFor(() => {
      expect(screen.getAllByText("Question 1").length).toBeGreaterThan(0);
      expect(screen.getByLabelText("Option A")).toBeInTheDocument();
    });
  });

  it("handles answer selection", async () => {
    await act(async () => {
      render(
        <Router>
          <QuizPage />
        </Router>
      );
    });

    await waitFor(() => {
      fireEvent.click(screen.getByLabelText("Option A"));
      expect(screen.getByLabelText("Option A")).toBeChecked();
    });
  });

  it("submits quiz and navigates to results", async () => {
    axios.post.mockResolvedValue({
      data: { attemptId: "123" },
    });

    await act(async () => {
      render(
        <Router>
          <QuizPage />
        </Router>
      );
    });

    const form = screen.getByTestId("quiz-form");

    await act(async () => {
      fireEvent.submit(form);
    });

    expect(mockedNavigate).toHaveBeenCalledWith("/quizzes/1/results/123");
  });
});
