import { LOCATIONS } from "../../data/locations";
import MapLocation from "./MapLocation";
import mapImg from "../../assets/westros.webp";

export default function WesterosMap() {
  return (
    <div className="relative mx-auto aspect-[1112/1500] w-full max-w-2xl">
      {/* gilded map frame */}
      <div className="pointer-events-none absolute inset-0 z-30 rounded-lg border-2 border-gold/30 shadow-[inset_0_0_80px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.6)]" />
      <div className="pointer-events-none absolute inset-2 z-30 rounded border border-gold/15" />

      <img src={mapImg} alt="A map of the Known Realm" draggable={false} className="absolute inset-0 h-full w-full select-none rounded-lg object-cover" />

      {/* the holdings */}
      {LOCATIONS.map((loc) => (
        <MapLocation key={loc.id} loc={loc} />
      ))}
    </div>
  );
}
