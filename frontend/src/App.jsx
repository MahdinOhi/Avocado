import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/Dashboard/HomeDashboard';
import LoginPage from './components/Auth/Login/LoginPage';
import SignUpPage from './components/Auth/SignUp/SignUpPage';
import ProtectedRoute from './components/Utils/ProtectedRoute';
import Profile from './components/profile/profilePage';
import './App.css';
import './index.css';

export default function App() {
  return (
    
    
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    
      {/* Protected Routes */}
         <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <HomeDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    
  );
}
