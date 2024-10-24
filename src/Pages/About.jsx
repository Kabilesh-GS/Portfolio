import React from 'react';
import Aboutme from '../Components/Aboutme';
import Techstack from '../Components/Techstack';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg';
import JS from '../assets/javascript.svg';
import REACT from '../assets/react.svg';
import GIT from '../assets/git.svg';
import BOOT from '../assets/bootstrap.svg';
import FIGMA from '../assets/figma.svg';
import POSTMAN from '../assets/postman.svg'
import PS from '../assets/photoshop.svg';
import BottomBtn from '../Components/BottomBtn';
import Aboutstyle from './About.module.css';
import JAVA from '../assets/java.svg';

function About() {
  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex', flexDirection: 'column',gap: '20px',paddingBottom: '60px'}}>
        <Techstack title='Tech Stack' image1={HTML} image2={CSS} image3={JS} image4={REACT} image5={BOOT} image7={GIT} image6={JAVA}/>
        <Techstack title='Other Skills' image1={FIGMA} image3={PS} image5={POSTMAN}/>
      </div>
      <div className={Aboutstyle.footer}>
        <BottomBtn leftCont="Home" rightCont='Experience' leftToLink="/" rightToLink="/experience"/>
      </div>
    </div>
  )
}

export default About; 