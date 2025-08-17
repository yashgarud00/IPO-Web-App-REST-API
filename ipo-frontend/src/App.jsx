import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import UpcomingIPO from './pages/UpcomingIPO';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link to="/" className="hover:underline">
          Upcoming IPOs
        </Link>
        {isAuthenticated ? (
          <Link to="/admin" className="hover:underline">
            Admin Dashboard
          </Link>
        ) : (
          <Link to="/login" className="hover:underline">
            Admin Login
          </Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<UpcomingIPO />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/admin" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
