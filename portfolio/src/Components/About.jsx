import React from 'react';
import Aboutme from './Aboutme';
import Techstack from './Techstack';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg';
import JS from '../assets/javascript.svg';
import REACT from '../assets/react.svg';
import GIT from '../assets/git.svg';
import BOOT from '../assets/bootstrap.svg';
import FIGMA from '../assets/figma.svg';
import POSTMAN from '../assets/postman.svg'
import PS from '../assets/photoshop.svg';
import BottomBtn from './BottomBtn';

function About() {
  return (
    <div style={{display: 'flex', paddingTop: '15px',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center',marginTop: '22px'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex', flexDirection: 'column',gap: '20px'}}>
        <Techstack title='Tech Stack' image1={HTML} image2={CSS} image3={JS} image4={REACT} image5={BOOT} image6={GIT}/>
        <Techstack title='Other Skills' image1={FIGMA} image3={PS} image5={POSTMAN}/>
      </div>
      <BottomBtn leftCont="Home" rightCont='Experience' leftToLink="/" rightToLink="/experience"/>
    </div>
  )
}

export default About; 