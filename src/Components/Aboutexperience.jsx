import React from 'react';
import Aboutexp from './Aboutexp.module.css';
import Spotknack from '../assets/download 1.png';

function Aboutexperience() {
  return (
    <div className={Aboutexp.containerMain}>
      <img className={Aboutexp.image} src={Spotknack} />
      <div className={Aboutexp.container}>
        <p className={`${Aboutexp.role} ${Aboutexp.marginleftright}`}>Frontend Developer</p>
        <p className={`${Aboutexp.time} ${Aboutexp.marginleftright}`}>9 months : February(2024) - October(2024)</p>
        <p className={`${Aboutexp.des} ${Aboutexp.marginleftright}`}>Worked as a Frontend Developer intern in Spotknack to create React web app called rewards platform to track the learning progress of the students. We used packages like ChartJS to improve the user interactivity and user experience of the application. The application is integrated with the back end with the help of Axios.</p>
      </div>
    </div>
  )
}

export default Aboutexperience;