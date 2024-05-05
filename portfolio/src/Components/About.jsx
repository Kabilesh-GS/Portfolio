import React from 'react';
import Aboutme from './Aboutme';
import Techstack from './Techstack';

function About() {
  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', gap: '20px',alignItems: 'center',marginTop: '22px'}}>
      <div>
        <Aboutme />
      </div>
      <div style={{display:'flex',gap: '20px'}}>
        <Techstack />
        <Techstack />
      </div>
    </div>
  )
}

export default About;