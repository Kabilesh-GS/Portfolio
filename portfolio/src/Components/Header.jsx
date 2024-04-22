import React from 'react';
import Headerstyle from './Header.module.css';

function Header(props) {
  return (
    <div className={`${Headerstyle.margin} ${Headerstyle.color} ${Headerstyle.lexend}`}>{props.headertitle}</div>
  )
}

export default Header;