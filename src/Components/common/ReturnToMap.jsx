import { Link } from "react-router-dom";
import SIGIL from "../../assets/sigil.png";

export default function ReturnToMap({ label = "Return to the Realm" }) {
  return (
    <Link to="/explore" aria-label={label} className="group opacity-65 fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-1.5">
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/70 transition-all duration-300 group-hover:border-gold-bright group-hover:scale-105" style={{ background: "radial-gradient(circle at 35% 30%, #8f1c1c, var(--color-blood) 60%, #3d0a0a)", boxShadow: "inset 0 2px 6px rgba(255,255,255,0.18), inset 0 -3px 8px rgba(0,0,0,0.6), 0 6px 16px rgba(0,0,0,0.55)",}}>
        <img src={SIGIL} alt="" aria-hidden="true" className="h-8 w-8 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </span>
      <span className="heading-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-gold-bright">
        {label}
      </span>
    </Link>
  );
}
