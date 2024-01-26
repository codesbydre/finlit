import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  const [alert, setAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      navigate("/login");
    }, 1000);
  };

  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      {alert && (
        <div className="alert alert-success" role="alert">
          You have been logged out successfully.
        </div>
      )}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-lg">
            <NavLink className="navbar-brand" to="/">
              <img
                className="navbar-brand-logo"
                src="/finlitlogov2.png"
                alt="FinLit Logo"
              />
              FinLit
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <NavLink className={setActiveClass} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink className={setActiveClass} to="/news">
                    News
                  </NavLink>
                </li>
                {isAuthenticated && (
                  <li className="nav-item px-3">
                    <NavLink className={setActiveClass} to="/quizzes">
                      Quizzes
                    </NavLink>
                  </li>
                )}
                {isAuthenticated ? (
                  <li className="nav-item px-3">
                    <button
                      onClick={handleLogout}
                      className="btn btn-link nav-link"
                      style={{ border: "none", background: "none" }}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="nav-item px-3">
                      <NavLink className={setActiveClass} to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink className={setActiveClass} to="/register">
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
