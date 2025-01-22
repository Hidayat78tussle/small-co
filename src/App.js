import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import FinancialDataEntry from "./components/FinancialDataEntry";
import TransactionForm from "./components/TransactionForm";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/Login";

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
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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

        {/* Routes */}
        <Routes>
          <Route
            path="/login"
            element={<LoginForm onLogin={handleLogin} />}
          />
          <Route
            element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login" />}
          >
            <Route path="/financial-data" element={<FinancialDataEntry />} />
            <Route path="/transactions" element={<TransactionForm />} />
            <Route path="/contact-form" element={<ContactForm />} />
          </Route>
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














// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
// import FinancialDataEntry from "./components/FinancialDataEntry";
// import TransactionForm from "./components/TransactionForm";
// import ContactForm from "./components/ContactForm";
// import LoginForm from "./components/Login";

// const ProtectedRoute = ({ isAuthenticated, redirectTo }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage login state

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div>
//         {/* Navigation Bar */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               Financial Management System
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 {isAuthenticated && (
//                   <>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/financial-data">
//                         Financial Data
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/transactions">
//                         Transactions
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/contact-form">
//                         Contact Form
//                       </Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//               <div className="d-flex gap-1">
//                 {isAuthenticated ? (
//                   <button
//                     className="btn btn-outline-light"
//                     onClick={handleLogout}
//                   >
//                     Log Out
//                   </button>
//                 ) : (
//                   <Link to="/login" className="btn btn-outline-light">
//                     Log In
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
//           <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login" />}>
//             <Route path="/financial-data" element={<FinancialDataEntry />} />
//             <Route path="/transactions" element={<TransactionForm />} />
//             <Route path="/contact-form" element={<ContactForm />} />
//           </Route>
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

