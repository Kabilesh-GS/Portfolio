import { GiCastle, GiSpikedDragonHead, GiSpellBook, GiTombstone, GiQuillInk, GiBrickWall, GiTwoCoins } from "react-icons/gi";

/**
 * The seven holdings of the realm. Each is a node on the Westeros map (x/y are
 * percentages of the map canvas) and a route. King's Landing is also the home (/).
 */
export const LOCATIONS = [
  {
    id: "kings-landing",
    name: "King's Landing",
    section: "The Throne",
    route: "/",
    blurb: "The seat of House Kabyros : where the tale begins.",
    icon: GiCastle,
    x: 60,
    y: 60,
  },
  {
    id: "dragonstone",
    name: "Dragonstone",
    section: "Projects",
    route: "/dragonstone",
    blurb: "Where works are forged in dragonfire : the projects.",
    icon: GiSpikedDragonHead,
    x: 77,
    y: 47,
  },
  {
    id: "citadel",
    name: "The Citadel",
    section: "Writings",
    route: "/citadel",
    blurb: "Halls of the maesters : chronicles and writings.",
    icon: GiSpellBook,
    x: 31,
    y: 85,
  },
  {
    id: "crypts",
    name: "The Crypts of Winterfell",
    section: "Timeline",
    route: "/crypts",
    blurb: "Where the history of the house is kept in stone.",
    icon: GiTombstone,
    x: 45,
    y: 17,
  },
  {
    id: "ravenry",
    name: "Ravenry",
    section: "Contact",
    route: "/ravenry",
    blurb: "Send a raven and treat with House Kabyros.",
    icon: GiQuillInk,
    x: 40,
    y: 63,
  },
  {
    id: "beyond-the-wall",
    name: "Beyond the Wall",
    section: "The Oracle",
    route: "/beyond-the-wall",
    blurb: "Counsel the Three eyed Raven : ask anything.",
    icon: GiBrickWall,
    x: 50,
    y: 7,
  },
  {
    id: "ironbank",
    name: "The Iron Bank",
    section: "Skills",
    route: "/ironbank",
    blurb: "The vaults of Braavos : every skill, an asset.",
    icon: GiTwoCoins,
    x: 90,
    y: 35,
  },
];

// everything except home, for the map's travel list and grids
export const DESTINATIONS = LOCATIONS.filter((l) => l.route !== "/");
