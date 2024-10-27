import React from 'react';
import imgstyle from './Homeimg.module.css';
import Kabiimg from '../assets/18.png';

function Homeimage() {
  return (
    <div className={`${imgstyle.imagecont}`}>
        <img src={Kabiimg} className={`${imgstyle.img}`} />
    </div>
  )
}

export default Homeimage;