import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import FinancialDataEntry from "./components/FinancialDataEntry";
import TransactionForm from "./components/TransactionForm";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar"; 

import "bootstrap/dist/css/bootstrap.min.css";

// ProtectedRoute
const ProtectedRoute = ({ isAuthenticated, redirectTo }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage login state

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state
  };

  return (
    <Router>
      <div>
        {/* Render Navbar */}
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

        {/* Routes */}
        <Routes>
          {/* Prevent access to /login when already authenticated */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/financial-data" /> // Redirect to default protected page
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login" />}
          >
            <Route path="/financial-data" element={<FinancialDataEntry />} />
            <Route path="/transactions" element={<TransactionForm />} />
            <Route path="/contact-form" element={<ContactForm />} />
          </Route>

          {/* Default Redirect */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/financial-data" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
