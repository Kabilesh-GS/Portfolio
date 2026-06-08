import RealmPage from "../../Components/layout/RealmPage";
import { SKILL_VAULTS } from "../../data/skills";

export default function Ironbank() {
  return (
    <RealmPage kicker="The Iron Bank of Braavos" title="The Vaults of Skill" embers={16}>
      <div className="flex flex-col gap-8">
        {SKILL_VAULTS.map((vault) => (
          <section key={vault.coffer} className="border border-gold/40 p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
              <h3 className="heading-deco text-xl">{vault.coffer}</h3>
              <span className="heading-cinzel text-xs uppercase tracking-[0.25em] text-gold/60">
                {vault.note}
              </span>
            </div>
            <div className="flex items-center gap-10 overflow-x-auto  justify-center">
              {vault.items.map((item) => (
                <div key={item.name} className="group flex flex-col items-center gap-1.5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-ink-soft/60 p-1 transition-all duration-300">
                    <img src={item.icon} alt={item.name} className="h-full w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </RealmPage>
  );
}
