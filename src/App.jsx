import React from 'react';
import Navbar from './components/navbar/Navbar';
import Landing from './components/pages/Landing';
import Feature from './components/pages/Feature';
import About from './components/pages/About';
import Help from './components/pages/Help';

import Login from './components/login/Login';
import Card from './components/card/Card';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
    </Routes>
    </>
  )
}

export default App