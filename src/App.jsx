import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Feature from './components/pages/Feature';
import About from './components/pages/About';
import Help from './components/pages/Help';
import ProgressScrollBar from './components/scroll/ProgressScrollBar';

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
        <Route path='/grid' element={<Grid />} />
    </Routes>
    <ProgressScrollBar />

    </>
  )
}

export default App