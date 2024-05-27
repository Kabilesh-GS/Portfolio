import React from 'react';
import Projectstyle from './Projectscontainer.module.css';

function Projectscontainer(props) {
  return (
    <div className={Projectstyle.container}>
      <video autoPlay={true} muted={true} loop={true} className={Projectstyle.widthvideo} src={props.videosrc}></video>
      <p className={Projectstyle.styleheading}>{props.contentheading}</p>
    </div>
  )
}

export default Projectscontainer