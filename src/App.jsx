import './App.css';
import Mainapp from './Pages/Mainapp';
import { navContext } from './Context/NavIconContext';
import { FooterContext } from './Context/FooterContext';

function App() {

  let navbarIcon = ['🤯','🤩','😍','😎']
  let footerIcon = ['❤️', '♥️' , '🫶' , '💛' , '💜']
  const navbarLen = navbarIcon.length;
  const footerLen = footerIcon.length;
  const random1 = Math.floor(Math.random() * navbarLen);
  const random2 = Math.floor(Math.random() * footerLen);

  const navEmoji = {
    emoji : navbarIcon[random1]
  }
  const footerEmoji = {
    emoji : footerIcon[random2]
  }

  return(
    <FooterContext.Provider value={footerEmoji}>
      <navContext.Provider value={navEmoji}>
        <Mainapp/>
      </navContext.Provider>
    </FooterContext.Provider>
  );
}

export default App;
