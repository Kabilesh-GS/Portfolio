import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EntireHome from '../Components/EntireHome';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Footer from '../Components/Footer';
import Projects from '../Components/Projects';

function Mainapp() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<EntireHome />}/>
            <Route path="about" element={<About />}/>
            <Route path="experience" element={<Experience />}/>
            <Route path="projects" element={<Projects />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Mainapp;