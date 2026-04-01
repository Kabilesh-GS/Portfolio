import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { navContext } from "../../Context/NavIconContext";

function Navbar() {
  const [hover, setHover] = useState(false);
  const path = useLocation();

  const navEmoji = useContext(navContext);

  return (
    <div className="fixed z-100">
      <div className={`${hover ? "bottom-12 md:bottom-15" : "-bottom-9"} fixed left-1/2 -translate-x-1/2 flex gap-10 font-[Sora] text-white text-lg transition-all duration-200`} >
        <Link to="/" className={`${path.pathname == "/" ? "border border-white/50" : ""} absolute md:relative -left-5 text-sm md:text-lg translate-y-10 hover:scale-110 transition-all bg-white/5 backdrop-blur-md border justify-center border-white/10 shadow-lg shadow-black/30 duration-200 px-4 rounded-full`}>
          Home
        </Link>
        <Link to="/projects" className={`${path.pathname == "/projects" ? "border border-white/50" : ""} translate-y-1 text-sm md:text-lg hover:scale-110 transition-all duration-200 bg-white/5 backdrop-blur-md border justify-center border-white/10 shadow-lg shadow-black/30 px-4 rounded-full`}>
          Projects
        </Link>
        <Link to="/experience" className={`${path.pathname == "/experience" ? "border border-white/50" : ""} translate-y-1 text-sm md:text-lg hover:scale-110 transition-all duration-200 bg-white/5 backdrop-blur-md border justify-center border-white/10 shadow-lg shadow-black/30 px-4 rounded-full`}>
          Experience
        </Link>
        <Link to="/contact" className={`${path.pathname == "/contact" ? "border border-white/50" : ""} absolute -right-5 md:relative text-sm md:text-lg translate-y-10 hover:scale-110 transition-all duration-200 bg-white/5 backdrop-blur-md border justify-center border-white/10 shadow-lg shadow-black/30 px-4 rounded-full`}>
          Contact
        </Link>
      </div>
      <div className={`${hover ? "bottom-[-0px]" : "bottom-[-25px]"} fixed left-1/2 -translate-x-1/2 transition-all duration-200 cursor-pointer`}>
        <div onClick={() => (hover ? setHover(false) : setHover(true))} className="text-5xl" >
          {navEmoji.emoji}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
