import './App.css';
import Mainapp from './Pages/Mainapp';

let navbarIcon = ['🤯','🤩','😍','😎']
const navbarLen = navbarIcon.length;
let random = Math.floor(Math.random() * navbarLen);

function App() {
  return(
    <Mainapp navIcon={navbarIcon[random]}/>
  );
}

export default App;
