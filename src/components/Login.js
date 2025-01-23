import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleMicrosoftSignIn = () => {
    onLogin(); // Update the authentication state to true
    navigate("/financial-data"); // Redirect to Financial Data page after login
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-sm rounded-3 p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome back</h2>
          <p className="text-muted">Please enter your details to sign in</p>
        </div>

        <div className="mt-4">
          <div className="position-relative">
            <hr />
            <span className="position-absolute top-50 start-50 translate-middle bg-light px-2 text-muted">
              Continue with
            </span>
          </div>
        </div>

        <div className="mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-2"
            onClick={handleMicrosoftSignIn}
          >
            <i className="fab fa-microsoft text-primary me-2"></i> Sign in with
            Microsoft
          </button>
        </div>

        <p className="text-center text-muted mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-primary text-decoration-none">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
