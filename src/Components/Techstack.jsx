import React from 'react';
import Tech from './Techstack.module.css';

function Techstack(props) {
  return (
    <div className={Tech.container}>
      <h1 className={Tech.Title}>{props.title}</h1>
      <div className={Tech.imgcontain}>
        <div className={Tech.icons}>
          <img src={props.image1} alt={props.alt1} />
          <img src={props.image2} alt={props.alt2} />
          <img src={props.image3} alt={props.alt3} />
        </div>
        <div className={Tech.icons}>
          <img src={props.image4} alt={props.alt4} />
          <img src={props.image5} alt={props.alt5} />
          <img src={props.image6} alt={props.alt6} />
        </div>
      </div>
    </div>
  )
}

export default Techstack;