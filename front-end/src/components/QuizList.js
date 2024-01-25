import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./QuizList.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/quizzes", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const sortedQuizzes = response.data.sort((a, b) =>
          a.topic.localeCompare(b.topic)
        );
        setQuizzes(sortedQuizzes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  const getDifficultyClass = (difficulty) => {
    const difficultyClass = {
      Easy: "text-success",
      Medium: "text-warning",
      Hard: "text-danger",
    };
    return difficultyClass[difficulty] || "text-secondary";
  };

  return (
    <div className="container-lg mt-4">
      <h2 className="mb-3">Quizzes</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-sm-6 col-md-4 mb-3">
            <div className="card quiz-card">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">Topic: {quiz.topic}</p>
                <p className="card-text">
                  Difficulty:{" "}
                  <span className={getDifficultyClass(quiz.difficulty)}>
                    <strong>{quiz.difficulty}</strong>
                  </span>
                </p>
                <Link
                  to={`/quizzes/${quiz.id}`}
                  className="btn btn-primary take-quiz-btn"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizList;
