import RealmPage from "../../Components/layout/RealmPage";
import { SKILL_VAULTS } from "../../data/skills";

export default function Ironbank() {
  return (
    <RealmPage
      kicker="The Iron Bank of Braavos"
      title="The Vaults of Skill"
      embers={16}
    >
      <div className="flex flex-col gap-8">
        {SKILL_VAULTS.map((vault) => (
          <section key={vault.coffer} className="gilded gilded-corners p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="heading-deco text-2xl">{vault.coffer}</h3>
              <span className="heading-cinzel text-xs uppercase tracking-[0.25em] text-gold/60">
                {vault.note}
              </span>
            </div>
            <div className="gold-rule my-5 w-full" />
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
              {vault.items.map((item) => (
                <div key={item.name} className="group flex flex-col items-center gap-2.5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gold/20 bg-ink-soft/60 p-3 transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-[0_0_18px_rgba(201,162,39,0.28)]">
                    <img src={item.icon} alt={item.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-center text-xs text-parchment-dim transition-colors group-hover:text-gold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </RealmPage>
  );
}
