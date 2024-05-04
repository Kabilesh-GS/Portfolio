import React from 'react';
import Aboutmestyle from './Aboutme.module.css';

function Aboutme() {
  return (
    <div>
        <div className={`${Aboutmestyle.container}`}>
            <p className={`${Aboutmestyle.heyeveryone}`}>Hey Everyone ! 👋</p>
            <p className={`${Aboutmestyle.paragraph}`}>I’m Kabilesh an avid learner with a creative mindset. I’m in pursuit of B.Tech in Information Technology in Coimbatore aiming to elevate my programming proficiency both creatively and critically. </p>
            <p className={`${Aboutmestyle.paragraph}`}>I always wondered how websites are designed and made. This curiosity made me start learning web technologies with Spotknack. Currently an Intern at Spotknack. I’ve done multiple projects while learning and also as an intern.</p>
        </div>
    </div>
  )
}

export default Aboutme;