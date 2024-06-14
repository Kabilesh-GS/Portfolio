import React from 'react';
import Prostyle from './Project.module.css';
import Oneplusvideo from '../assets/1Plus.mp4'
import Projectscontainer from './Projectscontainer';
import Footer from '../Components/Footer';

function Projects() {
  return (
    <div className={Prostyle.containupper}>
        <Projectscontainer contentheading="OnePlus Clone" videosrc={Oneplusvideo}/>
        <Projectscontainer contentheading="Fuel Calculator"/>
    </div>
  )
}

export default Projects;