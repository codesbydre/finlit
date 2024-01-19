import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function QuizPage() {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/quizzes/${quizId}/questions`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [quizId]);

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = Object.entries(answers).map(
        ([questionId, userAnswer]) => ({
          questionId: parseInt(questionId, 10),
          userAnswer,
        })
      );

      const response = await axios.post(
        `http://localhost:3001/api/quizzes/${quizId}/attempt`,
        {
          username: localStorage.getItem("username"),
          responses,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Redirect to the QuizResults page with the attemptId
      navigate(`/quizzes/${quizId}/results/${response.data.attemptId}`);
    } catch (error) {
      console.error("Error submitting quiz attempt:", error);
    }
  };

  return (
    <div>
      <h2>Quiz Questions</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <p>
              <strong>{question.question}</strong>
            </p>
            {["A", "B", "C", "D"].map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={`question-${question.id}-option-${option}`}
                  name={`question-${question.id}`}
                  value={option}
                  onChange={() => handleChange(question.id, option)}
                  checked={answers[question.id] === option}
                />
                <label htmlFor={`question-${question.id}-option-${option}`}>
                  {question[`option_${option.toLowerCase()}`]}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
}

export default QuizPage;
