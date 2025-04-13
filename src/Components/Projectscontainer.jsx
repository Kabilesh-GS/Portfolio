import React from 'react';
import Projectstyle from './Projectscontainer.module.css';
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Projectscontainer(props) {
  return (
    <div className={Projectstyle.container}>
      <video autoPlay={true} muted={true} loop={true} className={Projectstyle.widthvideo} src={props.videosrc}/>
      <p className={Projectstyle.styleheading}>{props.contentheading}</p>
      <p className={Projectstyle.projectDes}>{props.content}</p>
      <p className={Projectstyle.link}>
        <a target='_blank' href={props.link}><IoLink /></a>
        <a target='_blank' href={props.repolink}><FaGithub /></a>
      </p>
    </div>
  )
}

export default Projectscontainer;