import React, { useState } from 'react';
import Navstyle from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen); 

  return (
    <nav style={{justifyContent : isOpen ? 'space-between' : 'center'}} className={`${Navstyle.margin} ${Navstyle.gap3} ${Navstyle.justifybtwn} ${Navstyle.flex}`}>
        <a onClick={toggle} className={`${Navstyle.pointer} ${Navstyle.flexlogo} ${Navstyle.aligncenter}`}>
            <div className={`${Navstyle.square} ${Navstyle.radius}`}></div>
            <p className={`${Navstyle.fontsize} ${Navstyle.marginleft} ${Navstyle.lexend} ${Navstyle.bold}`}>KABI</p>
        </a>
        <ul type='none' className={`${Navstyle.flex} ${Navstyle.fontsize2} ${Navstyle.gap} ${Navstyle.aligncenter} ${Navstyle.lexend}`}>
            <li style={{display : isOpen ? 'block' : 'none'}}>
                <a href="#About" className={`${Navstyle.deco}`}>About</a>
            </li>
            <li style={{display : isOpen ? 'block' : 'none'}}>
                <a href="#Experience" className={`${Navstyle.deco}`}>Experience</a>
            </li>
            <li style={{display : isOpen ? 'block' : 'none'}}>
                <a href="#Projects" className={`${Navstyle.deco}`}>Projects</a>
            </li>
            <li style={{display : isOpen ? 'block' : 'none'}}>
                <a href="#Contact" className={`${Navstyle.deco}`}>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;