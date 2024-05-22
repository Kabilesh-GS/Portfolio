import React from 'react';
import Footerstyle from './Footer.module.css';

function Footer() {
  return (
    <div>
        <p className={Footerstyle.footer}>Made With 💖 By Me!</p>
        <p className={Footerstyle.lastupdated}>Last updated 22-5-2024</p>
    </div>
  )
}

export default Footer