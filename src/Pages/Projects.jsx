import Prostyle from "./Project.module.css";
import Oneplusvideo from "../assets/1Plus.mp4";
import Projectscontainer from "../Components/Projectscontainer";
// import ChatAI from "../assets/BOTAI.mp4";
// import PokemonVideo from '../assets/PokemonV.mp4'
// import JavaScript from '../assets/javascript.svg'
// import Bootstrap from '../assets/bootstrap.svg'
import BlogUP from '../assets/blogUpBlog.mov'
// import Css from '../assets/css.svg'
// import Html from '../assets/html.svg'
import React from '../assets/react.svg'
import Tailwind from '../assets/tailwind-css.svg'
import Nest from '../assets/NestJS.svg'
import Postgres from '../assets/Postgresql.png'
// import Firebase from '../assets/firebase.svg'
// import Sass from '../assets/sass.svg'

function Projects() {
  const projectArray = [
    {
      repolink: "https://github.com/Kabilesh-GS/Blog-Up",
      link : 'https://blogupblogs.netlify.app/',
      contentheading: "Blog Up",
      content:
        "A full stack web app built where users can view, upload, add to favourite blogs and also view other user's profile.",
      video: BlogUP,
      Tech4: Tailwind,
      Tech1: React,
      Tech2: Nest,
      Tech3 : Postgres
    }
  ];

  const projectDis = projectArray.map((e) => {
    return (
      <Projectscontainer
        videosrc={e.video}
        repolink={e.repolink}
        content={e.content}
        link={e.link}
        contentheading={e.contentheading}
        Tech1={e.Tech1}
        Tech2={e.Tech2}
        Tech3={e.Tech3}
        Tech4={e.Tech4}
      />
    );
  });

  return (
    <div>    
      <div className={Prostyle.containupper} style={{ paddingBottom: "60px" }}>
        {projectDis}
      </div>
      <p style={{textAlign : "center",color : "white", fontFamily : "monospace"}}>More Projects Incomming...</p>
    </div>
  );
}

export default Projects;
