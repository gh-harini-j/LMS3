import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import RegistrationPage from './components/auth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>

        <div>
        <Routes>
          {/* Redirect the root path to the Login page */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegistrationPage />} />
          {/* Add other routes here */}
        </Routes>
        <ToastContainer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
