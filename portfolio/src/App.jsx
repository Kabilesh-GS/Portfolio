import './App.css';
import Navbar from './Components/Navbar';
import EntireHome from './Components/EntireHome';
import Header from './Components/Header';
import Experience from './Components/Experience';
function App() {
  return(
    <>
      <Navbar />
      <EntireHome />
      <Header className='abouttitle' headertitle='ABOUT' />
      <Header className='abouttitle' headertitle='EXPERIENCE' />
      <Experience />
    </>
  )

}

export default App
