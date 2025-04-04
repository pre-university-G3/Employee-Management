import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Feature from './components/pages/Feature';
import About from './components/pages/About';
import Help from './components/pages/Help';
import AdminDB from './components/dashboard/AdminDB'
import EmployeeInfo from './components/dashboard-content/EmployeeInfo'
import Empdashboard from './components/dashboard-content/Empdashboard'
// import EmpProfile from './components/emp-profile/EmpProfile'
import LoginFormik from './components/login/LoginFormik'
import ProgressScrollBar from './components/scroll/ProgressScrollBar';
import Sidebar2 from './components/sidebar/Sidebar2';

import Login from './components/login/Login';
import Card from './components/card/Card';
import Grid from './components/grid/Grid';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
        <Route path='/empDashboard' element={<Empdashboard />} />
        <Route path='/grid' element={<Grid />} />
        <Route path='/adminDashboard' element={<AdminDB />} />
        <Route path='/empInfo' element={<EmployeeInfo />} />
        <Route path='/loginformik' element={<LoginFormik />} />
        <Route path='/sidebar' element={<Sidebar2 />} />
        {/* <Route path='/empProfile' element={<EmpProfile />} /> */}
    </Routes>
    <ProgressScrollBar />

    </>
  )
}

export default App