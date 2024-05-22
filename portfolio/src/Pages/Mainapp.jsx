import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EntireHome from '../Components/EntireHome';
import About from '../Components/About';
import Experience from '../Components/Experience';

function Mainapp() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<EntireHome />}/>
            <Route path="about" element={<About />}/>
            <Route path="experience" element={<Experience />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Mainapp;