import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";

/**
 * The only way back. With map-only navigation there is no nav bar, so every
 * location carries this control to travel back to the realm map.
 */
export default function ReturnToMap({ label = "Return to the Realm" }) {
  return (
    <Link
      to="/explore"
      className="group fixed top-5 left-5 z-50 flex items-center gap-2 rounded-full border border-gold/40 bg-ink-soft/80 px-4 py-2 text-sm text-parchment backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold-bright hover:shadow-[0_0_22px_rgba(201,162,39,0.35)]"
    >
      <GiCompass className="text-lg text-gold transition-transform duration-700 group-hover:rotate-180" />
      <span className="heading-cinzel tracking-widest uppercase text-xs">{label}</span>
    </Link>
  );
}
