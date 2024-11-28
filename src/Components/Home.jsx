import React from 'react';
import Homestyle from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={`${Homestyle.maincontainer} ${Homestyle.radius} ${Homestyle.flex} ${Homestyle.margin}`}>
        <div className={`${Homestyle.margin53px} ${Homestyle.homecont} ${Homestyle.margin43px} ${Homestyle.color}`}>
            <p className={`${Homestyle.robotoflex} ${Homestyle.semibold} ${Homestyle.font40px}`}>Hey👋, I’m Kabilesh !</p>
            <div className={`${Homestyle.flex2}`}>
              <p className={`${Homestyle.questrial} ${Homestyle.margin16px} ${Homestyle.font25px} ${Homestyle.lineheight}`}>An Ever learning Frontend Developer | Student</p>
              <button className={`${Homestyle.button} ${Homestyle.robotoflex}`}><Link style={{textDecoration:'none', color: 'white'}} to='/contact'>Let's Talk !</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home; 