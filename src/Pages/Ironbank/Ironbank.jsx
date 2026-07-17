import { GiCrossedSwords } from "react-icons/gi";
import RealmPage from "../../Components/layout/RealmPage";
import { SKILL_VAULTS } from "../../data/skills";
import BG from "../../assets/grainy BG.jpg";
import SIGIL from "../../assets/sigil.png";

export default function Ironbank() {
  return (
    <RealmPage kicker="Casterly Rock" title="The Vaults of Skill" shimmerTitle embers={16} >
      <div className="flex flex-col gap-4">
        {SKILL_VAULTS.map((vault, i) => (
          <div key={vault.coffer}>
            {i > 0 && (
              <div aria-hidden="true" className="flex items-center justify-center gap-4 py-6">
                <div className="gold-rule w-24 md:w-40" />
                <GiCrossedSwords className="text-gold/70 text-xl" />
                <div className="gold-rule w-24 md:w-40" />
              </div>
            )}
            <section className="chest-lid lift relative overflow-hidden rounded-[0.5rem] border border-gold/40 p-6 md:p-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${BG})` }}>
              {/* faint house sigil watermark filling the panel's empty space */}
              <img src={SIGIL} alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -bottom-10 w-64 opacity-[0.06] select-none" />

              <div className="relative flex flex-col items-center gap-1 mb-8">
                <h3 className="heading-deco text-2xl">{vault.coffer}</h3>
                <span className="heading-cinzel text-xs uppercase tracking-[0.25em] text-gold-bright/85">
                  {vault.note}
                </span>
                <div className="gold-rule w-20 mt-1" />
              </div>

              <div className="relative flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
                {vault.items.map((item) => (
                  <div key={item.name} className="group flex w-20 flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl p-1 transition-transform duration-300 group-hover:scale-110">
                      <img src={item.icon} alt={item.name} className="torch-icon h-full w-full object-contain" />
                    </div>
                    <span className="heading-cinzel text-center text-[0.7rem] uppercase tracking-[0.15em] text-gold-bright/80">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
    </RealmPage>
  );
}
