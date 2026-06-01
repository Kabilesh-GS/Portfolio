import { Link } from "react-router-dom";
import SectionTitle from "../../Components/common/SectionTitle";
import EmberField from "../../Components/common/EmberField";
import WesterosMap from "../../Components/map/WesterosMap";
import { LOCATIONS } from "../../data/locations";

export default function Explore() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 pt-16 pb-10">
      <EmberField count={24} className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          kicker="Explore"
          title="The Known Realm"
        />

        {/* desktop: the interactive map */}
        <div className="mt-10 hidden md:block">
          <WesterosMap />
        </div>

        {/* mobile: a road of holdings (the map is hard on small screens) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          {LOCATIONS.map((loc) => {
            const Icon = loc.icon;
            return (
              <Link key={loc.id} to={loc.route} className="gilded gilded-corners lift flex items-center gap-2 p-2">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ink-soft text-2xl text-gold">
                  <Icon />
                </span>
                <span className="flex flex-col">
                  <span className="heading-cinzel text-sm uppercase tracking-widest text-gold-bright">
                    {loc.name}
                  </span>
                  <span className="text-xs text-parchment-dim">{loc.blurb}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
