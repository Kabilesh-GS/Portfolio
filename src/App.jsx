import './App.css';
import Mainapp from './Pages/Mainapp';
import { navContext } from './Context/NavIconContext';

function App() {

  let navbarIcon = ['🤯','🤩','😍','😎']
  const navbarLen = navbarIcon.length;
  const random = Math.floor(Math.random() * navbarLen);
  const navEmoji = {
    emoji : navbarIcon[random]
  }

  return(
    <navContext.Provider value={navEmoji}>
      <Mainapp/>
    </navContext.Provider>
  );
}

export default App;
