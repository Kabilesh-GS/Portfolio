import React from "react";
import Prostyle from "./Project.module.css";
import Oneplusvideo from "../assets/1Plus.mp4";
import Projectscontainer from "../Components/Projectscontainer";
import RockPaperScissor from "../assets/paper.mp4";
import linktree from "../assets/link.mp4";
import fuel from "../assets/fuelcost.mp4";
import BottomBtn from "../Components/BottomBtn";
import Pokemon from "../assets/Pokemon.mp4";
import ChatAI from "../assets/BOTAI.mp4";

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
        "A Chat-bot created using Gemini 1.5 flash API model. The request handeling is done by axios and formatting the code is done by ReactMarkdown packages.",
      video: ChatAI ,
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Connect-With-Me",
      contentheading: "Connect With Me! ( LinkTree Clone )",
      link: "https://connect-with-kabi.netlify.app/",
      content:
        "My first react app, where I made my own version of linktree to display all of my socials in one place.",
      video: linktree ,
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Rock-Paper-Scissor",
      contentheading: "Rock Paper Scissor",
      link: "https://kabilesh-gs.github.io/Rock-Paper-Scissor/",
      content:
        "A Rock-Paper-Scissors project lets you play against the computer. You choose rock, paper, or scissors, and the computer randomly picks its move. It's a fun way to learn basic JavaScript concepts.",
      video: RockPaperScissor,
    },
    {
      repolink: "https://github.com/Kabilesh-GS/Fuel-Cost-Calculator",
      contentheading: "Fuel Calculator",
      link: "https://kabilesh-gs.github.io/Fuel-Cost-Calculator/",
      content:
        "This project covers key JavaScript Math concepts and conditional statements. I used these concepts to figure out how to calculate the total cost. Conditional statements help in making decisions based on certain conditions.",
      video: fuel ,
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
