import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header';
import Homeimage from './Components/Homeimage';

function App() {
  return(
    <>
      <Navbar />
      <div className='home'>
        <Home />
        <Homeimage />
      </div>
      <Header className='abouttitle' headertitle='ABOUT' />
      <div></div>
    </>
  )

}

export default App
