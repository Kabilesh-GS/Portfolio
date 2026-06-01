import BLOGUP from "../assets/BlogUp.png";
import DAYFINDER from "../assets/dayfindert.mp4";
import FUELCOST from "../assets/fuelcost.mp4";
import POKEMON from "../assets/Pokemon.mp4";
import TODO from "../assets/ToDolist.mp4";
import BOTAI from "../assets/BOTAI.mp4";

/**
 * The conquests forged at Dragonstone.
 * BlogUp is fully detailed; the rest carry demo reels from /assets.
 * TODO(kabilesh): confirm blurbs and add live/code links where marked null.
 */
export const PROJECTS = [
  {
    id: "blogup",
    title: "BlogUp",
    blurb: "A full-stack blogging platform to publish, explore, and interact with content.",
    detail:
      "User authentication, profile management, and a favorites system, with a clean UI and a structured backend built on modern web technologies.",
    image: BLOGUP,
    tags: ["React", "NestJS", "PostgreSQL", "Tailwind"],
    live: "https://blogupblogs.netlify.app",
    code: "https://github.com/Kabilesh-GS/Blog-Up",
  },
  {
    id: "dayfinder",
    title: "DayFinder",
    blurb: "A date utility that reveals the weekday for any date, with a reactive UI.",
    detail: "A lightweight tool built to practise state, date logic, and clean component design.",
    video: DAYFINDER,
    tags: ["React", "JavaScript"],
    live: null,
    code: null,
  },
  {
    id: "fuelcost",
    title: "FuelCost",
    blurb: "A fuel-cost calculator estimating trip expenses from distance, mileage, and price.",
    detail: "Handy everyday calculator focused on instant feedback and a tidy interface.",
    video: FUELCOST,
    tags: ["React", "JavaScript"],
    live: null,
    code: null,
  },
  {
    id: "pokedex",
    title: "Pokédex Explorer",
    blurb: "A Pokémon explorer — search and browse creatures with stats and types.",
    detail: "Consumes a public API to fetch, search, and render data-rich cards.",
    video: POKEMON,
    tags: ["React", "REST API"],
    live: null,
    code: null,
  },
  {
    id: "todo",
    title: "Task Keep",
    blurb: "A to-do manager with add, complete, and filter — CRUD fundamentals, done clean.",
    detail: "Persisted tasks with a focus on usability and crisp interactions.",
    video: TODO,
    tags: ["React", "JavaScript"],
    live: null,
    code: null,
  },
  {
    id: "botai",
    title: "BOT AI",
    blurb: "An AI chatbot experiment powered by a large language model.",
    detail: "Explores prompt design and conversational UI with a generative backend.",
    video: BOTAI,
    tags: ["React", "AI"],
    live: null,
    code: null,
  },
];
