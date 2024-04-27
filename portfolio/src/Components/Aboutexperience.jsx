import React from 'react';
import Aboutexp from './Aboutexp.module.css';

function Aboutexperience() {
  return (
    <div className={Aboutexp.container}>
        <p className={Aboutexp.role}>Frontend Developer</p>
        <p className={Aboutexp.time}>3 months - February(2024) - Present</p>
        <p className={Aboutexp.des}>Currently working as a Frontend Developer intern in Spotknack to create React web application to enhance their rewards platform. We have used various react packages like Axois and ChartJS to improve the user interactivity of the application.</p>
    </div>
  )
}

export default Aboutexperience;