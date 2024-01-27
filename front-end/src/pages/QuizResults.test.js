import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import QuizResults from "./QuizResults";
import axios from "axios";
import { MemoryRouter, Routes, Route } from "react-router-dom";

jest.mock("axios");

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ quizId: "1", attemptId: "123" }),
  useNavigate: () => mockNavigate,
}));

describe("QuizResults", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        title: "Sample Quiz",
        score: 3,
        questions: [
          { question: "Question 1", user_answer: "A", correct_answer: "A" },
          { question: "Question 2", user_answer: "B", correct_answer: "C" },
        ],
      },
    });
  });

  it("fetches and displays quiz results", async () => {
    render(
      <MemoryRouter initialEntries={["/quizzes/1/results/123"]}>
        <Routes>
          <Route
            path="/quizzes/:quizId/results/:attemptId"
            element={<QuizResults />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Sample Quiz - Score: 3 \/ 2/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Your Answer: A/i)).toBeInTheDocument();
      expect(screen.getByText(/Correct Answer: A/i)).toBeInTheDocument();
      expect(screen.getByText(/Question 2/i)).toBeInTheDocument();
      expect(screen.getByText(/Your Answer: B/i)).toBeInTheDocument();
      expect(screen.getByText(/Correct Answer: C/i)).toBeInTheDocument();
    });
  });

  it("navigates back to quizzes page on button click", async () => {
    render(
      <MemoryRouter initialEntries={["/quizzes/1/results/123"]}>
        <Routes>
          <Route
            path="/quizzes/:quizId/results/:attemptId"
            element={<QuizResults />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText("Back to Quizzes"));
      expect(mockNavigate).toHaveBeenCalledWith("/quizzes");
    });
  });
});
