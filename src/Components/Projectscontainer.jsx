import React from 'react';
import Projectstyle from './Projectscontainer.module.css';
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Projectscontainer({videosrc,content,contentheading,link,repolink}) {
  return (
    content && <div className={Projectstyle.container}>
      <video autoPlay={true} muted={true} loop={true} className={Projectstyle.widthvideo} src={videosrc}/>
      <p className={Projectstyle.styleheading}>{contentheading}</p>
      <p className={Projectstyle.projectDes}>{content}</p>
      <p className={Projectstyle.link}>
        <a target='_blank' href={link}><IoLink /></a>
        <a target='_blank' href={repolink}><FaGithub /></a>
      </p>
    </div>
  )
}

export default Projectscontainer;