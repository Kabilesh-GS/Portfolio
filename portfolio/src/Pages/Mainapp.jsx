import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EntireHome from '../Components/EntireHome';
import About from '../Components/About';
import Experience from '../Components/Experience';

import AnimatedCursor from "react-animated-cursor";
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

function Mainapp() {
  return (
    <BrowserRouter>
        <AnimatedCursor />
        <Navbar />
        <Routes>
            <Route path="/" element={<EntireHome />}/>
            <Route path="about" element={<About />}/>
            <Route path="experience" element={<Experience />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path='contact' element={<Contact />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Mainapp;