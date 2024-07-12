import React from 'react';
import Aboutexperience from './Aboutexperience';
import Expstyle from './Experience.module.css';
import BottomBtn from './BottomBtn';

function Experience() {
  return (
    <div className={Expstyle.cont} style={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>    
        <Aboutexperience />
        <BottomBtn leftCont="About" rightCont='Projects' leftToLink="/about" rightToLink="/projects"/>
    </div>
  )
}

export default Experience; 