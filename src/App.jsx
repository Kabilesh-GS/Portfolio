import './App.css';
import Mainapp from './Pages/Mainapp';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { navContext } from './Context/NavIconContext';
import { FooterContext } from './Context/FooterContext';
import { LoadingContext } from './Context/LoadingContext';

function App() {

  let navbarIcon = ['🤯','🤩','😍','😎','☺️','🤫']
  let footerIcon = ['❤️', '♥️' , '🫶' , '💛' , '💜']
  let loadingText = ['Hold tight', 'Loading awesomeness', 'Just a moment', 'Almost there', 'Preparing magic, Buckle up!']
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
  const loading = {
    text : loadingText[Math.floor(Math.random() * loadingText.length)]
  }

  return(
    <>hi</>
  );
}

export default App;
