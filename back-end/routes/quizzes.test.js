const request = require("supertest");
const app = require("../app");
const pool = require("../db").pool;

jest.mock("../db", () => {
  const originalModule = jest.requireActual("../db");
  return {
    __esModule: true,
    ...originalModule,
    pool: {
      query: jest.fn(),
    },
  };
});

// Mock authentication middleware
jest.mock("../middleware/auth", () => ({
  authenticateToken: (req, res, next) => next(),
  ensureLoggedIn: (req, res, next) => next(),
  ensureAdmin: (req, res, next) => next(),
}));

describe("GET /api/quizzes", () => {
  it("should fetch all quizzes", async () => {
    pool.query.mockResolvedValue({
      rows: [{ title: "Quiz 1" }, { title: "Quiz 2" }],
    });

    const response = await request(app).get("/api/quizzes");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ title: "Quiz 1" }, { title: "Quiz 2" }]);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM quizzes");
  });
});

describe("GET /api/quizzes/:quizId/questions", () => {
  it("should fetch questions for a specific quiz", async () => {
    const quizId = "1";
    pool.query.mockResolvedValue({
      rows: [{ question: "Question 1" }, { question: "Question 2" }],
    });

    const response = await request(app).get(`/api/quizzes/${quizId}/questions`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { question: "Question 1" },
      { question: "Question 2" },
    ]);
    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM quiz_questions WHERE quiz_id = $1 ORDER BY RANDOM()",
      [quizId]
    );
  });
});

describe("POST /api/quizzes/:quizId/attempt", () => {
  it("should submit a quiz attempt", async () => {
    const quizId = "1";
    const mockAttempt = {
      username: "testuser",
      responses: [
        { questionId: "1", userAnswer: "A" },
        { questionId: "2", userAnswer: "B" },
      ],
    };
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1 }] }); // Mock for attempt insert
    pool.query.mockResolvedValue({
      rows: [{ correct_answer: "A" }, { correct_answer: "B" }],
    });

    const response = await request(app)
      .post(`/api/quizzes/${quizId}/attempt`)
      .send(mockAttempt);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message", "Quiz attempt saved");
    expect(response.body).toHaveProperty("score");
    expect(response.body).toHaveProperty("attemptId");
  });
});

describe("GET /api/quizzes/:quizId/attempt/:attemptId", () => {
  it("should fetch quiz attempt results", async () => {
    const quizId = "1";
    const attemptId = "1";
    pool.query.mockResolvedValue({
      rows: [
        {
          title: "Sample Quiz",
          score: 2,
          question: "Question 1",
          user_answer: "A",
          correct_answer: "A",
          option_a: "Answer A",
          option_b: "Answer B",
          option_c: "Answer C",
          option_d: "Answer D",
        },
      ],
    });

    const response = await request(app).get(
      `/api/quizzes/${quizId}/attempt/${attemptId}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("title", "Sample Quiz");
    expect(response.body).toHaveProperty("score");
    expect(response.body.questions).toHaveLength(1);
  });
});
