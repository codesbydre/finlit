const express = require("express");
const router = express.Router();
const pool = require("../db").pool;

const {
  authenticateToken,
  ensureLoggedIn,
  ensureAdmin,
} = require("../middleware/auth");

// Get all quizzes
router.get("/", authenticateToken, ensureLoggedIn, async (req, res) => {
  try {
    const quizzes = await pool.query("SELECT * FROM quizzes");
    res.json(quizzes.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error fetching quizzes");
  }
});

//Get questions for a specific quiz
router.get(
  "/:quizId/questions",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    try {
      const { quizId } = req.params;
      //get questions for specific quiz and randomize question order
      const questions = await pool.query(
        "SELECT * FROM quiz_questions WHERE quiz_id = $1 ORDER BY RANDOM()",
        [quizId]
      );
      res.json(questions.rows);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).send("Error fetching questions");
    }
  }
);

// Submit a quiz attempt and store user responses
router.post(
  "/:quizId/attempt",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    try {
      const { quizId } = req.params;
      const { username, responses } = req.body;
      let score = 0;
      const responseDetails = [];

      // Save the attempt and get the attemptId
      const attemptResult = await pool.query(
        "INSERT INTO quiz_attempts (user_username, quiz_id, score) VALUES ($1, $2, $3) RETURNING id",
        [username, quizId, score]
      );
      const attemptId = attemptResult.rows[0].id;

      // Process each response
      for (const response of responses) {
        const { questionId, userAnswer } = response;
        const correctAnswerResult = await pool.query(
          "SELECT correct_answer FROM quiz_questions WHERE id = $1",
          [questionId]
        );
        const correctAnswer = correctAnswerResult.rows[0].correct_answer;
        if (userAnswer === correctAnswer) {
          score++;
        }

        // Save response
        await pool.query(
          "INSERT INTO user_responses (attempt_id, question_id, user_answer) VALUES ($1, $2, $3)",
          [attemptId, questionId, userAnswer]
        );

        responseDetails.push({ questionId, userAnswer, correctAnswer });
      }

      // Update the score
      await pool.query("UPDATE quiz_attempts SET score = $1 WHERE id = $2", [
        score,
        attemptId,
      ]);

      res.json({
        message: "Quiz attempt saved",
        score,
        responseDetails,
        attemptId,
      });
    } catch (error) {
      console.error("Error submitting quiz attempt:", error);
      res.status(500).send("Error submitting quiz attempt");
    }
  }
);

// Fetch quiz attempt results
router.get(
  "/:quizId/attempt/:attemptId",
  authenticateToken,
  ensureLoggedIn,
  async (req, res) => {
    try {
      const { quizId, attemptId } = req.params;

      // SQL query to fetch attempt details along with quiz title and score
      const query = `
        SELECT 
          q.title,
          qa.score,
          qq.question,
          ur.user_answer,
          qq.correct_answer,
          qq.option_a,
          qq.option_b,
          qq.option_c,
          qq.option_d
        FROM 
          user_responses ur
          JOIN quiz_questions qq ON ur.question_id = qq.id
          JOIN quiz_attempts qa ON ur.attempt_id = qa.id
          JOIN quizzes q ON qq.quiz_id = q.id
        WHERE 
          qa.id = $1 AND qq.quiz_id = $2
      `;

      const result = await pool.query(query, [attemptId, quizId]);
      if (result.rows.length === 0) {
        return res.status(404).send("Quiz attempt not found");
      }

      // Return the fetched data
      res.json({
        title: result.rows[0].title,
        score: result.rows[0].score,
        questions: result.rows.map((row) => ({
          question: row.question,
          user_answer: `${row.user_answer} - ${
            row[`option_${row.user_answer.toLowerCase()}`]
          }`,
          correct_answer: `${row.correct_answer} - ${
            row[`option_${row.correct_answer.toLowerCase()}`]
          }`,
        })),
      });
    } catch (error) {
      console.error("Error fetching quiz attempt results:", error);
      res.status(500).send("Error fetching quiz attempt results");
    }
  }
);

//Allow authorized users to create new quizzes
router.post("/", authenticateToken, ensureAdmin, async (req, res) => {
  try {
    const { title, difficulty, topic } = req.body;
    const newQuiz = await pool.query(
      "INSERT INTO quizzes (title, difficulty, topic) VALUES ($1, $2, $3) RETURNING *",
      [title, difficulty, topic]
    );
    res.status(201).json(newQuiz.rows[0]);
  } catch (error) {
    console.error("Error creating quiz:", error);
    res.status(500).send("Error creating quiz");
  }
});

module.exports = router;
