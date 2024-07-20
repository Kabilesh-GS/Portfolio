import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EntireHome from './EntireHome';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function Mainapp() {
  return (
    <BrowserRouter>
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