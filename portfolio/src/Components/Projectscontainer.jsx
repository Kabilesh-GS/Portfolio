import React from 'react';
import Projectstyle from './Projectscontainer.module.css';

function Projectscontainer(props) {
  return (
    <div className={Projectstyle.container}>
      <video autoPlay={true} muted={true} loop={true} className={Projectstyle.widthvideo} src={props.videosrc}></video>
      <p className={Projectstyle.styleheading}>{props.contentheading}</p>
      <p className={Projectstyle.projectDes}>{props.content}</p>
      <p className={Projectstyle.link}><a target='_blank' href={props.link}>Check it out !  </a></p>
    </div>
  )
}

export default Projectscontainer;