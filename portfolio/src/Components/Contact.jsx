import React from 'react';
import BottomBtn from './BottomBtn';

function Contact() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <BottomBtn leftCont="Projects" rightCont='Home' leftToLink="/projects" rightToLink="/" />
    </div>
  )
}

export default Contact;