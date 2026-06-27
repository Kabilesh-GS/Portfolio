import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";

export default function ReturnToMap({ label = "Return to the Realm" }) {
  return (
    <Link to="/explore" className="group flex flex-col text-gray-400 fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0 px-4 py-2 text-sm  transition-all duration-300 hover:text-gold-bright">
      <span className="heading-cinzel tracking-widest uppercase text-xs ">{label}</span>
      <p className="mt-0 text-sm">⌄</p>
    </Link>
  );
}
