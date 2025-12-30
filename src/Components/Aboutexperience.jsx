import React from 'react';
import Aboutexp from './Aboutexp.module.css';
import Whizlabs from '../assets/whizlabs.jpg';

function Aboutexperience() {
  return (
    <div className={Aboutexp.containerMain}>
      <img className={Aboutexp.image} src={Whizlabs} />
      <div className={Aboutexp.container}>
        <p className={`${Aboutexp.role} ${Aboutexp.marginleftright}`}>Product Trainee</p>
        <p className={`${Aboutexp.time} ${Aboutexp.marginleftright}`}>December(2025) - </p>
        <p className={`${Aboutexp.des} ${Aboutexp.marginleftright}`}>I joined in Whizlabs as a Product Trainee, where I’m gaining exposure to how technology, users, and business come together in real-world products.</p>
      </div>
    </div>
  )
}

export default Aboutexperience;