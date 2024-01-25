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
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink
                    className="nav-link"
                    to="/news"
                    activeClassName="active"
                  >
                    News
                  </NavLink>
                </li>
                {isAuthenticated && (
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link"
                      to="/quizzes"
                      activeClassName="active"
                    >
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
                      <NavLink
                        className="nav-link"
                        to="/login"
                        activeClassName="active"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink
                        className="nav-link"
                        to="/register"
                        activeClassName="active"
                      >
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
