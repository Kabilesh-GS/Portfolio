import React from 'react';
import Aboutexperience from './Aboutexperience';
import Spotknack from './Spotknack';

function Experience() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',marginTop: '22px'}}>    
        <Aboutexperience />
        <Spotknack />
    </div>
  )
}

export default Experience