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
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quizzes/${quiz.id}`}>
              {quiz.title} <small>[ Difficulty: {quiz.difficulty} ]</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
