import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import Register from "./components/Register";
import Login from "./components/Login";
import QuizList from "./components/QuizList";
import QuizPage from "./pages/QuizPage";
import QuizResults from "./pages/QuizResults";
import CategoryNews from "./pages/CategoryNews";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quizzes/:quizId" element={<QuizPage />} />
            <Route
              path="/quizzes/:quizId/results/:attemptId"
              element={<QuizResults />}
            />{" "}
            <Route path="/news/:category" element={<CategoryNews />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
