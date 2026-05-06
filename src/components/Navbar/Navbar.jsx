import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("auth-token");
  const userName = sessionStorage.getItem("name");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          YourHealth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">Appointments</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {authToken ? (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Welcome, {userName}
                </button>
                {showDropdown && (
                  <ul className="dropdown-menu dropdown-menu-end show">
                    <li>
                      <Link className="dropdown-item" to="/profile">Your Profile</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/reports">Your Reports</Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-light ms-2" to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;