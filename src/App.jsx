// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/MainDashboard';
import Employee from './components/EmployeeDashboard/EmployeeDashboard';
import './index.css'; // Ensure Tailwind is imported
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import MainDashboard from './pages/MainDashboard';
function App() {
  return (
    <>
      <MainDashboard />
      <EmployeeDashboard />
    </>
  );
}

export default App;