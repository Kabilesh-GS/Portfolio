import React from 'react';
import Prostyle from './Project.module.css';
import Oneplusvideo from '../assets/1Plus.mp4'
import Projectscontainer from './Projectscontainer';
import RockPaperScissor from '../assets/paper.mp4';
import todo from '../assets/ToDolist.mp4';
import linktree from '../assets/link.mp4';
import fuel from '../assets/fuelcost.mp4';

function Projects() {
  return (
    <div className={Prostyle.containupper}>
        <Projectscontainer contentheading="OnePlus Clone" videosrc={Oneplusvideo} color="pink"/>
        <Projectscontainer contentheading="Fuel Calculator" videosrc={fuel}/>
        <Projectscontainer contentheading="To-Do List App " videosrc={todo}/>
        <Projectscontainer contentheading="Rock Paper Scissor" videosrc={RockPaperScissor}/>
        <Projectscontainer contentheading="Connect With Me! ( LinkTree Clone )" videosrc={linktree}/>
    </div>
  )
}

export default Projects;