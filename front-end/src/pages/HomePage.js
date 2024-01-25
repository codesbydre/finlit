import React from "react";
import { Link } from "react-router-dom";
import TopHeadlines from "../components/TopHeadlines";
import CategoriesList from "../components/CategoriesList";
import CompaniesList from "../components/CompaniesList";

function HomePage() {
  const username = localStorage.getItem("username");
  const isAuthenticated = !!username;

  return (
    <div className="container-lg mt-4">
      <div className="p-5 mb-5  rounded-3 text-center hero-section">
        <h1 className="display-4 mb-4">Welcome to FinLit.</h1>
        <p className="lead mb-4">
          Explore current news, take quizzes, and improve your financial
          knowledge!
        </p>
        {isAuthenticated ? (
          <div>
            <Link to="/news" className="btn btn-primary btn-lg me-2 mb-3">
              Explore News
            </Link>
            <Link
              to="/quizzes"
              className="btn btn-outline-secondary btn-lg mb-3"
            >
              Take Quiz
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-primary btn-lg me-2 mb-3">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-secondary btn-lg mb-3"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3">
          <CategoriesList />
          <CompaniesList />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9">
          <TopHeadlines category="business" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
