import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Transactions from './components/Transactions/Transactions';
import Reports from './components/Reports/Reports';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/transactions" /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={isAuthenticated ? <Transactions /> : <Navigate to="/" />} />
          <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
