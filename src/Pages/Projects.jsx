import Prostyle from "./Project.module.css";
import Oneplusvideo from "../assets/1Plus.mp4";
import Projectscontainer from "../Components/Projectscontainer";
import ChatAI from "../assets/BOTAI.mp4";
import PokemonVideo from '../assets/PokemonV.mp4'
import JavaScript from '../assets/javascript.svg'
import Bootstrap from '../assets/bootstrap.svg'
import Css from '../assets/css.svg'
import Html from '../assets/html.svg'
import React from '../assets/react.svg'
import Tailwind from '../assets/tailwind-css.svg'
import Firebase from '../assets/firebase.svg'
import Sass from '../assets/sass.svg'

function Projects() {
  const projectArray = [
    {
      repolink: "https://github.com/Kabilesh-GS/OnePlus",
      contentheading: "OnePlus Clone",
      link: "https://kabilesh-gs.github.io/OnePlus/",
      content:
        "This is the first project I made using HTML, CSS, Bootstrap and JS. While working on this project I learned many things about frontend and strengthened my basics.",
      video: Oneplusvideo,
      Tech3: JavaScript,
      Tech1: Html,
      Tech2: Css,
      Tech4: Bootstrap
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Chat-Bot",
      contentheading: "Chat ft.AI",
      link: "https://chat-ft-ai.netlify.app/",
      content:
        "A Chat-bot created using Gemini model. Request handeling is done by axios and formatting the code is done by ReactMarkdown packages. User authentication is done with the help of firebase and stored in firestore.",
      video: ChatAI ,
      Tech1: React,
      Tech2: Tailwind,
      Tech4: '',
      Tech3: Firebase
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Pokemon-Finder",
      contentheading: "Pokemon Cards Generator",
      link: "https://pokemoncrds.netlify.app/",
      content:
        "An Project made to get familiarise with APIs (fetching data from it), hooks (useState & useEffect) and Browser-Router package for navigation.",
      video: PokemonVideo ,
      Tech1: React,
      Tech2: Sass,
      Tech4: '',
      Tech3: ''
    },
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
    <div className={Prostyle.containupper} style={{ paddingBottom: "60px" }}>
      {projectDis}
    </div>
  );
}

export default Projects;
