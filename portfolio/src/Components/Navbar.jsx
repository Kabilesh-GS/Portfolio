import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navstyle from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav style={{ justifyContent: isOpen ? 'space-between' : 'center',paddingTop: '15px'}} className={`${Navstyle.margin} ${Navstyle.gap3} ${Navstyle.justifybtwn} ${Navstyle.flex}`}>
            <div onClick={toggle} className={`${Navstyle.pointer} ${Navstyle.flexlogo} ${Navstyle.aligncenter}`}>
                <div className={`${Navstyle.square} ${Navstyle.radius}`}></div>
                <p className={`${Navstyle.fontsize} ${Navstyle.marginleft} ${Navstyle.lexend} ${Navstyle.colormain} ${Navstyle.bold}`}>KABI</p>
            </div>
            <ul type="none" className={`${Navstyle.flex} ${Navstyle.fontsize2} ${Navstyle.gap} ${Navstyle.aligncenter} ${Navstyle.lexend}`} style={{ display: isOpen ? 'flex' : 'none' }}>
                <li>
                    <Link to="/" className={`${Navstyle.deco} ${Navstyle.color}`}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={`${Navstyle.deco} ${Navstyle.color}`}>About</Link>
                </li>
                <li>
                    <Link to="/experience" className={`${Navstyle.deco} ${Navstyle.color}`}>Experience</Link>
                </li>
                <li>
                    <a href="/projects" className={`${Navstyle.deco} ${Navstyle.color}`}>Projects</a>
                </li>
                <li>
                    <a href="#Contact" className={`${Navstyle.deco} ${Navstyle.color}`}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
