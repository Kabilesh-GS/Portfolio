import './App.css';
import Navbar from './Components/Navbar';
import EntireHome from './Components/EntireHome';
import Header from './Components/Header';
function App() {
  return(
    <>
      <Navbar />
      <EntireHome />
      <Header className='abouttitle' headertitle='ABOUT' />
      <div></div>
    </>
  )

}

export default App
