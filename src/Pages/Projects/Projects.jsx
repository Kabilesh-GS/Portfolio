// import REACT from '../../assets/react.svg'
// import TAILWIND from '../../assets/tailwind-css.svg'
// import NEST from '../../assets/NestJS.svg'
// import POSTGRES from '../../assets/Postgresql.png'
import BLOGUP from '../../assets/BlogUp.png'

// import { MdViewInAr } from "react-icons/md";
// import { useState } from 'react'

import Project from '../../Components/Project/Project'

export default function Projects() {
  return (
    <div className="text-white font-[Sora]">
      <div>
        <Project logo={BLOGUP} title="BlogUp" desc1="A full-stack blogging platform that enables users to publish, explore, and interact with content." desc2="Implemented user authentication, profile management, and favorites system, with a focus on clean UI and structured backend architecture using modern web technologies." link="https://blogupblogs.netlify.app" gitHub="https://github.com/Kabilesh-GS/Blog-Up" />
      </div>
    </div>
  )
}