import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function QuizResults() {
  const { quizId, attemptId } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/quizzes/${quizId}/attempt/${attemptId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [quizId, attemptId]);

  if (!result) {
    return <div>Loading results...</div>;
  }

  return (
    <div>
      <h1>Quiz Results</h1>
      <h2>{result.title}</h2>
      <h2>
        Score: {result.score} / {result.questions.length}
      </h2>
      {result.questions.map((detail, index) => (
        <div key={index}>
          <p>
            <strong>Question: {detail.question}</strong>
          </p>
          <p>Your Answer: {detail.user_answer}</p>
          <p>Correct Answer: {detail.correct_answer}</p>
        </div>
      ))}
    </div>
  );
}

export default QuizResults;
