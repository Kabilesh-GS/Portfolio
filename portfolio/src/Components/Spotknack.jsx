import React from 'react';
import Spotknackimg from '../assets/download 1.png';
import Spotknackstyle from './Spotknack.module.css';

function Spotknack() {
  return (
    <div className={Spotknackstyle.image} style={{height: '248px', width: '248px',borderRadius: '25px'}}>
        <center><img src={Spotknackimg} alt='Spotknack' /></center>
    </div>
  )
}

export default Spotknack;