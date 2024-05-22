import React from 'react';
import Aboutexperience from './Aboutexperience';
import Spotknack from './Spotknack';
import Expstyle from './Experience.module.css';

function Experience() {
  return (
    <div className={Expstyle.cont} style={{display: 'flex', paddingTop: '15px', justifyContent: 'center', alignItems: 'center', gap: '20px',marginTop: '22px'}}>    
        <Aboutexperience />
        <Spotknack />
    </div>
  )
}

export default Experience; 