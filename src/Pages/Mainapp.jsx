import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';

function Mainapp() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Mainapp;