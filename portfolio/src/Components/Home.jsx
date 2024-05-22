import React from 'react';
import Homestyle from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={`${Homestyle.maincontainer} ${Homestyle.radius} ${Homestyle.flex} ${Homestyle.margin}`}>
        <div className={`${Homestyle.margin53px} ${Homestyle.margin43px} ${Homestyle.color}`}>
            <p className={`${Homestyle.robotoflex} ${Homestyle.semibold} ${Homestyle.font40px}`}>Hey, I’m Kabilesh a passionate<br />Frontend developer.</p>
            <div className={`${Homestyle.flex2}`}>
              <p className={`${Homestyle.questrial} ${Homestyle.margin16px} ${Homestyle.font25px} ${Homestyle.lineheight}`}>I’m currently working as an Intern <br />at Spotknack. </p>
              <button className={`${Homestyle.button} ${Homestyle.robotoflex}`}><Link style={{textDecoration:'none', color: 'white'}} to='#Contact'>Let's Talk !</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home; 