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
    live: "https://blogupp.netlify.app/",
    code: "https://github.com/Kabilesh-GS/Blog-Up",
  },
];
