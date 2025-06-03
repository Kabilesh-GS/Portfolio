import Prostyle from "./Project.module.css";
import Oneplusvideo from "../assets/1Plus.mp4";
import Projectscontainer from "../Components/Projectscontainer";
import ChatAI from "../assets/BOTAI.mp4";
import PokemonVideo from '../assets/PokemonV.mp4'

function Projects() {
  const projectArray = [
    {
      repolink: "https://github.com/Kabilesh-GS/OnePlus",
      contentheading: "OnePlus Clone",
      link: "https://kabilesh-gs.github.io/OnePlus/",
      content:
        "This is the first project I made using HTML, CSS, Bootstrap and JS. While working on this project I learned many things about frontend and how JS is used in making webpages.",
      video: Oneplusvideo,
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Chat-Bot",
      contentheading: "Chat ft.AI",
      link: "https://chat-ft-ai.netlify.app/",
      content:
        "A Chat-bot created using Gemini model. The request handeling is done by axios and formatting the code is done by ReactMarkdown packages.",
      video: ChatAI ,
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Pokemon-Finder",
      contentheading: "Pokemon Cards Generator",
      link: "https://pokemoncrds.netlify.app/",
      content:
        "An Project made to get familiarise with APIs (fetching data from it), hooks (useState & useEffect) and Browser-Router package for navigation.",
      video: PokemonVideo ,
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
