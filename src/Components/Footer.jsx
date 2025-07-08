import React from 'react';
import Footerstyle from './Footer.module.css';

function Footer() {
  return (
    <footer className={Footerstyle.footerDiv}>
        <p className={Footerstyle.footer}>Made With ♥️ By Me!</p>
        <p className={Footerstyle.lastupdated}>Last updated 08-07-2025</p>
    </footer>
  )
}

export default Footer