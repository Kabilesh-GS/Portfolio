import React from 'react';
import Aboutmestyle from './Aboutme.module.css';

function Aboutme() {
  return (
    <div>
        <div className={`${Aboutmestyle.container}`}>
            <p className={`${Aboutmestyle.paragraph}`}>📈 An avid learner with a creative mindset. <br/>🧑‍💻 In pursuit of B.Tech in Information Technology in Coimbatore.<br/>🤔 Always wondered how websites are made, this curiosity made me start learning web technologies with Spotknack.</p>
            <p className={`${Aboutmestyle.paragraph}`}>🔍 Beyond academics I like to explore adventurous thing and places.<br/>⚽ Iam a big fan of both Cricket and football so playing them &<br/>🎥 watching movies and series are my hobbies.</p>
        </div>
    </div>
  )
}

export default Aboutme;