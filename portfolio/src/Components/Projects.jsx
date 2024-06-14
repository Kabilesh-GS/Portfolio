import React from 'react';
import Prostyle from './Project.module.css';
import Oneplusvideo from '../assets/1Plus.mp4'
import Projectscontainer from './Projectscontainer';

function Projects() {
  return (
    <div className={Prostyle.containupper}>
        <Projectscontainer contentheading="OnePlus Clone" videosrc={Oneplusvideo}/>
        <Projectscontainer contentheading="Fuel Calculator"/>
        <Projectscontainer contentheading="To-Do List App "/>
        <Projectscontainer contentheading="Rock Paper Scissor"/>
        <Projectscontainer contentheading="Connect With Me! ( LinkTree Clone )"/>
    </div>
  )
}

export default Projects;