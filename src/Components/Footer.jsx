import React from 'react';
import Footerstyle from './Footer.module.css';

function Footer() {
  return (
    <footer className={Footerstyle.footerDiv}>
        <p className={Footerstyle.footer}>♥️</p>
        <p className={Footerstyle.lastupdated}>Last updated 24-03-2026</p>
    </footer>
  )
}

export default Footer