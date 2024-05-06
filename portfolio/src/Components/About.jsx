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
import PS from '../assets/photoshop.svg';

function About() {
  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center',marginTop: '22px'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex',gap: '20px'}}>
        <Techstack title='Tech Stack' image1={HTML} image2={CSS} image3={JS} image4={REACT} image5={BOOT} image6={GIT}/>
        <Techstack title='Other Skills' image1={FIGMA} image2={PS} />
      </div>
    </div>
  )
}

export default About;