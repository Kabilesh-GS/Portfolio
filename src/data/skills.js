import REACT from "../assets/react.svg";
import JS from "../assets/javascript.svg";
import JAVA from "../assets/java.svg";
import PYTHON from "../assets/python.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import SASS from "../assets/sass.svg";
import TAILWIND from "../assets/tailwind-css.svg";
import BOOTSTRAP from "../assets/bootstrap.svg";
import NEST from "../assets/NestJS.svg";
import FIREBASE from "../assets/firebase.svg";
import MYSQL from "../assets/mysql.svg";
import POSTGRES from "../assets/Postgresql.png";
import PRISMA from "../assets/prisma.png";
import GIT from "../assets/git.svg";
import GITHUB from "../assets/github.svg";
import FIGMA from "../assets/figma.svg";
import PHOTOSHOP from "../assets/photoshop.svg";
import POSTMAN from "../assets/postman.svg";

/**
 * The vaults of the Iron Bank — every skill an asset, sorted into coffers.
 */
export const SKILL_VAULTS = [
  {
    coffer: "Tongues of the Realm",
    note: "Languages",
    items: [
      { name: "JavaScript", icon: JS },
      { name: "Python", icon: PYTHON },
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
    ],
  },
  {
    coffer: "Forged Steel",
    note: "Frameworks & Libraries",
    items: [
      { name: "React", icon: REACT },
      { name: "NestJS", icon: NEST },
      { name: "Tailwind CSS", icon: TAILWIND },
      { name: "Sass", icon: SASS },
      { name: "Bootstrap", icon: BOOTSTRAP },
    ],
  },
  {
    coffer: "The Treasuries",
    note: "Databases & Data",
    items: [
      { name: "PostgreSQL", icon: POSTGRES },
      { name: "MySQL", icon: MYSQL },
      { name: "Prisma", icon: PRISMA },
    ],
  },
  {
    coffer: "Tools of the Maesters",
    note: "Tooling & Design",
    items: [
      { name: "Git", icon: GIT },
      { name: "GitHub", icon: GITHUB },
      { name: "Figma", icon: FIGMA },
      { name: "Photoshop", icon: PHOTOSHOP },
      { name: "Postman", icon: POSTMAN },
    ],
  },
];
