import React from "react";
import { Link } from "react-router-dom";
import TopHeadlines from "../components/TopHeadlines";

function HomePage() {
  const username = localStorage.getItem("username");
  const isAuthenticated = !!username; // Check if the user is authenticated

  return (
    <div>
      {" "}
      <div className="container my-4">
        <h1>
          Welcome to FinLit
          {isAuthenticated ? `, ${username}!` : "!"}
        </h1>

        <p>
          Explore current news, take quizzes, and improve your financial
          knowledge!
        </p>

        {/* Display links to Login and Register if the user is not authenticated */}
        {!isAuthenticated && (
          <div>
            <p>
              <Link to="/login">Login</Link> or{" "}
              <Link to="/register">Register</Link> to learn more.
            </p>
          </div>
        )}

        <TopHeadlines category="business" />
      </div>
    </div>
  );
}

export default HomePage;
