import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Homeimage from './Components/Homeimage';

function App() {
  return(
    <>
      <Navbar />
      <div className='home'>
        <Home />
        <Homeimage />
      </div>
    </>
  )

}

export default App
