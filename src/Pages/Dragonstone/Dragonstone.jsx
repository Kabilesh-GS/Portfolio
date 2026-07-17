import RealmPage from "../../Components/layout/RealmPage";
import ConquestCard from "../../Components/project/ConquestCard";
import { PROJECTS } from "../../data/projects";

export default function Dragonstone() {
  return (
    <RealmPage kicker="Dragonstone" title="Conquests Forged in Fire" shimmerTitle embers={28}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <ConquestCard key={p.id} project={p} />
        ))}
      </div>
    </RealmPage>
  );
}
