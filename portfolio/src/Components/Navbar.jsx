import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navstyle from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav style={{ justifyContent: isOpen ? 'space-between' : 'center',paddingTop: '15px'}} className={`${Navstyle.margin} ${Navstyle.gap3} ${Navstyle.justifybtwn} ${Navstyle.flex}`}>
            <div onClick={toggle} className={`${Navstyle.pointer} ${Navstyle.transform} ${Navstyle.flexlogo} ${Navstyle.aligncenter}`}>
                <div className={`${Navstyle.square} ${Navstyle.radius}`}></div>
                <p className={`${Navstyle.fontsize} ${Navstyle.marginleft} ${Navstyle.lexend} ${Navstyle.colormain} ${Navstyle.bold}`}>KABI</p>
            </div>
            <ul type="none" className={`${Navstyle.flex} ${Navstyle.fontsize2} ${Navstyle.gap} ${Navstyle.aligncenter} ${Navstyle.lexend}`} style={{ display: isOpen ? 'flex' : 'none' }}>
                <li className={`${Navstyle.transform}`}>
                    <Link to="/" className={`${Navstyle.deco} ${Navstyle.color}`}>Home</Link>
                </li>
                <li className={`${Navstyle.transform}`}>
                    <Link to="/about" className={`${Navstyle.deco} ${Navstyle.transform} ${Navstyle.color}`}>About</Link>
                </li>
                <li className={`${Navstyle.transform}`}>
                    <Link to="/experience" className={`${Navstyle.deco} ${Navstyle.transform} ${Navstyle.color}`}>Experience</Link>
                </li>
                <li className={`${Navstyle.transform}`}>
                    <a href="/projects" className={`${Navstyle.deco} ${Navstyle.transform} ${Navstyle.color}`}>Projects</a>
                </li>
                <li className={`${Navstyle.transform}`}>
                    <a href="/contact" className={`${Navstyle.deco} ${Navstyle.transform} ${Navstyle.color}`}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;