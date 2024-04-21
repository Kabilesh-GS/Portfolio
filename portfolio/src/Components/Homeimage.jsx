import React from 'react';
import imgstyle from './Homeimg.module.css';
import Kabiimg from '../assets/IMG-20231208-WA0013.jpg';

function Homeimage() {
  return (
    <div className={`${imgstyle.imagecont}`}>
        <img src={Kabiimg} className={`${imgstyle.img}`} />
    </div>
  )
}

export default Homeimage;