import React from "react";
import { Link } from "react-router-dom";
import TopHeadlines from "../components/TopHeadlines";

function HomePage() {
  const username = localStorage.getItem("username");
  const isAuthenticated = !!username;

  return (
    <div>
      <div className="p-5 mb-5 bg-light rounded-3 text-center">
        <h1 className="display-4">
          Welcome to FinLit
          {isAuthenticated ? `, ${username}!` : "!"}
        </h1>
        <p className="lead">
          Explore current news, take quizzes, and improve your financial
          knowledge!
        </p>
        {!isAuthenticated && (
          <p>
            <Link to="/login" className="btn btn-primary btn-lg mr-2">
              Login
            </Link>
            &nbsp;
            <Link to="/register" className="btn btn-secondary btn-lg">
              Register
            </Link>
          </p>
        )}
      </div>
      <TopHeadlines category="business" />
    </div>
  );
}

export default HomePage;
