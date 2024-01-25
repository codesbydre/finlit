import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function QuizResults() {
  const { quizId, attemptId } = useParams();
  const navigate = useNavigate();
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

  const handleBackToQuizzes = () => {
    navigate("/quizzes");
  };

  return (
    <div className="container-lg mt-4">
      <h1 className="mb-4">Quiz Results</h1>

      <div className="card mb-4 col-lg-9">
        <div className="card-header">
          <h2 className="mb-0">
            {result.title} - Score: {result.score} / {result.questions.length}
          </h2>
        </div>
      </div>
      {result.questions.map((detail, index) => (
        <div key={index} className="card mb-3 col-lg-9">
          <div className="card-header">
            <strong>
              {" "}
              Question {index + 1}: {detail.question}
            </strong>
          </div>
          <div className="card-body">
            <p className="card-text">Your Answer: {detail.user_answer}</p>
            <p className="card-text">Correct Answer: {detail.correct_answer}</p>
          </div>
        </div>
      ))}
      <div className=" mt-4 mb-4">
        <button onClick={handleBackToQuizzes} className="btn btn-primary">
          Back to Quizzes
        </button>
      </div>
    </div>
  );
}

export default QuizResults;
