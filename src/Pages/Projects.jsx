import React from 'react';
import Prostyle from './Project.module.css';
import Oneplusvideo from '../assets/1Plus.mp4'
import Projectscontainer from '../Components/Projectscontainer';
import RockPaperScissor from '../assets/paper.mp4';
import todo from '../assets/ToDolist.mp4';
import linktree from '../assets/link.mp4';
import fuel from '../assets/fuelcost.mp4';
import BottomBtn from '../Components/BottomBtn';
import DayFinder from  '../assets/dayfindert.mp4';
import Pokemon from '../assets/Pokemon.mp4';

function Projects() {
  return (
    <div className={Prostyle.containupper} style={{paddingBottom: '60px'}}>
        <Projectscontainer contentheading='OnePlus Clone' link='https://kabilesh-gs.github.io/OnePlus/' content='This is the first project I made using HTML, CSS, Bootstrap and JS. While working on this project I learned many things about frontend and how JS is used in making webpages.' videosrc={Oneplusvideo}/>
        <Projectscontainer contentheading='To-Do List App' link='https://kabilesh-gs.github.io/To-Do/' content='A simple To-Do app helps us keep track of tasks we need to complete. It uses JS concept called arrays and its functions like push and splice. When a To-Do is pushed, JS generates HTML and displays it on the window.' videosrc={todo}/>
        <Projectscontainer contentheading='Fuel Calculator' link='https://kabilesh-gs.github.io/Fuel-Cost-Calculator/' content='This project covers key JavaScript Math concepts and conditional statements. I used these concepts to figure out how to calculate the total cost. Conditional statements help in making decisions based on certain conditions.' videosrc={fuel}/>
        <Projectscontainer contentheading='Rock Paper Scissor' link='https://kabilesh-gs.github.io/Rock-Paper-Scissor/' content="A Rock-Paper-Scissors project lets you play against the computer. You choose rock, paper, or scissors, and the computer randomly picks its move. It's a fun way to learn basic JavaScript concepts." videosrc={RockPaperScissor}/>
        <Projectscontainer contentheading='Connect With Me! ( LinkTree Clone )' link='https://connect-with-kabi.netlify.app/' content='My first react app, where I made my own version of linktree to display all of my socials in one place.' videosrc={linktree}/>
        <Projectscontainer contentheading='Pokemon Cards' link='https://pokemoncrd.netlify.app/' content='A Pokemon card generator using API to find and generate a card for each pokemon along with their stats like health, speed, attack !' videosrc={Pokemon}/>
        <div className={Prostyle.footer}>
          <BottomBtn leftCont="Experience" rightCont='Contact' leftToLink="/experience" rightToLink="/contact"/>
        </div>
    </div>
  )
}

export default Projects;