import './App.css';
import Navbar from './Components/Navbar';
import EntireHome from './Components/EntireHome';
import Header from './Components/Header';
import Experience from './Components/Experience';
import About from './Components/About';

function App() {
  return(
    <>
      <Navbar />
      <EntireHome />
      <Header className='abouttitle' headertitle='ABOUT' />
      <About />
      <Header className='abouttitle' headertitle='EXPERIENCE' />
      <Experience />
    </>
  )

}

export default App
