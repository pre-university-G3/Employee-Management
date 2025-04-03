import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import './index.css'  
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
import MainDashboard from "./pages/MainDashboard";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/dashbaoud" element={<MainDashboard/>} />
  //   </Routes>
  // </BrowserRouter>
  <StrictMode>
    
    <App />
  </StrictMode>
);
