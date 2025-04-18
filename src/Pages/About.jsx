import React from 'react';
import Aboutme from '../Components/Aboutme';
import Frontend from '../Components/Frontend';
import Programming from '../Components/Programming';
import Other from '../Components/Other';
import Aboutstyle from './About.module.css';
import BottomBtn from '../Components/BottomBtn';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg';
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

function About() {
  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex', flexDirection: 'column',gap: '20px',paddingBottom: '60px'}}>
        <Frontend logo1={HTML} logo2={CSS} logo3={JS} logo4={REACT} logo5={BOOT} logo6={TAILWIND} />
        <Programming logo1={JAVA} logo2={PYTHON}/>
        <Other logo1={GIT} logo2={POSTMAN} logo3={FIGMA} logo4={PS}/>
      </div>
      <div className={Aboutstyle.footer}>
        <BottomBtn leftCont="Home" rightCont='Experience' leftToLink="/" rightToLink="/experience"/>
      </div>
    </div>
  )
}

export default About; 