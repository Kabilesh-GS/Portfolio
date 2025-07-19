import Aboutme from '../Components/Aboutme';
import Frontend from '../Components/Frontend';
import Programming from '../Components/Programming';
import Other from '../Components/Other';
import HTML from '../assets/html.svg'
import JS from '../assets/javascript.svg';
import REACT from '../assets/react.svg';
import GIT from '../assets/git.svg';
import BOOT from '../assets/bootstrap.svg';
import FIGMA from '../assets/figma.svg';
import POSTMAN from '../assets/postman.svg'
import PS from '../assets/photoshop.svg';
import TAILWIND from '../assets/tailwind-css.svg';
import JAVA from '../assets/java.svg';
import PYTHON from '../assets/python.svg';
import Backend from '../Components/Backend';
import firebase from '../assets/firebase.svg'
import Sass from '../assets/sass.svg';
import AboutStyle from './About.module.css'

function About() {
  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex', flexDirection: 'column',gap: '20px',paddingBottom: '60px'}}>
        <Frontend logo1={HTML} logo2={Sass} logo3={JS} logo4={REACT} logo5={BOOT} logo6={TAILWIND} />
        <div className={AboutStyle.innerContainer}>
          <Backend logo1={firebase}/>
          <Programming logo1={JAVA} logo2={PYTHON}/>
        </div>
        <Other logo1={GIT} logo2={POSTMAN} logo3={FIGMA} logo4={PS}/>
      </div>
    </div>
  )
}

export default About; 