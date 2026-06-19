import RealmPage from "../../Components/layout/RealmPage";
import ThreeEyedRaven from "../../Components/chatbot/ThreeEyedRaven";

export default function BeyondTheWall() {
  return (
    <RealmPage kicker="Beyond the Wall" title="The Three-Eyed Raven" embers={12}>
      <ThreeEyedRaven />
    </RealmPage>
  );
}
