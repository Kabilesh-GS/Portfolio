import React from 'react';
import Aboutexperience from '../Components/Aboutexperience';
import Expstyle from './Experience.module.css';
import BottomBtn from '../Components/BottomBtn';

function Experience() {
  return (
    <div className={Expstyle.cont} style={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>    
        <Aboutexperience />
    </div>
  )
}

export default Experience; 