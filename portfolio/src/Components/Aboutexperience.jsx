import React from 'react';
import Aboutexp from './Aboutexp.module.css';

function Aboutexperience() {
  return (
    <div className={Aboutexp.container}>
        <p className={`${Aboutexp.role} ${Aboutexp.marginleftright}`}>Frontend Developer</p>
        <p className={`${Aboutexp.time} ${Aboutexp.marginleftright}`}>4 months - February(2024) - Present</p>
        <p className={`${Aboutexp.des} ${Aboutexp.marginleftright}`}>Currently working as a Frontend Developer intern in Spotknack to create React web application to enhance their rewards platform. We have used react packages like ChartJS to improve the user interactivity of the application. The application is integrated with the back end with the help of Axios.</p>
    </div>
  )
}

export default Aboutexperience;