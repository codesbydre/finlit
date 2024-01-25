import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const getCardColor = (difficulty) => {
    const difficultyColor = {
      Easy: "success",
      Medium: "warning",
      Hard: "danger",
    };
    return difficultyColor[difficulty] || "secondary";
  };

  return (
    <div>
      <h2>Quizzes</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-sm-6 col-md-4 mb-3">
            <div className={`card border-${getCardColor(quiz.difficulty)}`}>
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">
                  <small>Topic: {quiz.topic}</small>
                </p>
                <p className="card-text">
                  <small>Difficulty: {quiz.difficulty}</small>
                </p>
                <Link
                  to={`/quizzes/${quiz.id}`}
                  className={`btn btn-${getCardColor(quiz.difficulty)}`}
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
