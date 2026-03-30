import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function Mainapp({navIcon}) {
  return (
    <BrowserRouter>
        <Navbar icon={navIcon}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Mainapp;