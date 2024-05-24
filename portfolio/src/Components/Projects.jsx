import React from 'react';
import Prostyle from './Project.module.css';
import Projectscontainer from './Projectscontainer';

function Projects() {
  return (
    <div className={Prostyle.containupper}>
        <Projectscontainer />
        <Projectscontainer />
    </div>
  )
}

export default Projects;