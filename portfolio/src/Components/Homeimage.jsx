import React from 'react';
import imgstyle from './Homeimg.module.css';
import Kabiimg from '../assets/IMG_20231213_100016_0393 1 (1).png';

function Homeimage() {
  return (
    <div className={`${imgstyle.imagecont}`}>
        <img src={Kabiimg} className={`${imgstyle.img}`} />
    </div>
  )
}

export default Homeimage;