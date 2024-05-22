import React from 'react';
import Homestyle from './Home.module.css';

function Home() {
  return (
    <div className={`${Homestyle.maincontainer} ${Homestyle.radius} ${Homestyle.flex} ${Homestyle.margin}`}>
        <div className={`${Homestyle.margin53px} ${Homestyle.margin43px} ${Homestyle.color}`}>
            <p className={`${Homestyle.robotoflex} ${Homestyle.semibold} ${Homestyle.font40px}`}>Hey, I’m Kabilesh a passionate<br />Frontend developer.</p>
            <div className={`${Homestyle.flex2}`}>
              <p className={`${Homestyle.questrial} ${Homestyle.margin16px} ${Homestyle.font25px} ${Homestyle.lineheight}`}>I’m currently working as an Intern <br />at Spotknack. </p>
              <a href='https://connect-with-kabi.netlify.app/' target='_blank'><button onclick="window.location.href = 'https://connect-with-kabi.netlify.app/';" className={`${Homestyle.button} ${Homestyle.robotoflex}`}>Contact Me</button></a>
            </div>
        </div>
    </div>
  )
}

export default Home; 