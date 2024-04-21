import React from 'react';
import Homestyle from './Home.module.css';

function Home() {
  return (
    <div className={`${Homestyle.maincontainer} ${Homestyle.radius} ${Homestyle.flex} ${Homestyle.margin}`}>
        <div className={`${Homestyle.margin53px} ${Homestyle.margin43px}`}>
            <p className={`${Homestyle.robotoflex} ${Homestyle.semibold} ${Homestyle.font40px}`}>Hey, I’m Kabilesh GS<br />pursuing B.Tech in IT,<br />a passionate Frontend developer.</p>
            <p className={`${Homestyle.questrial} ${Homestyle.margin16px} ${Homestyle.font25px} ${Homestyle.lineheight}`}>I’m currently working as an Intern at<br />Spotknack. </p>
        </div>
        <button className={`${Homestyle.button} ${Homestyle.margin53px} ${Homestyle.robotoflex}`}>Contact Me</button>
    </div>
  )
}

export default Home;