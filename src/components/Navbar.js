import React from "react";
import { Link } from "react-router-dom";
import '../../src/App.css'; 
const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Financial Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/financial-data">
                    Financial Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/transactions">
                    Transactions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-form">
                    Contact Form
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <div className="d-flex gap-2">
            {isAuthenticated ? (
              <button
                className="btn btn-outline-light"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline-light">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
