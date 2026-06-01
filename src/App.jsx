import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/common/ScrollToTop";
import KingsLanding from "./Pages/KingsLanding/KingsLanding";
import Explore from "./Pages/Explore/Explore";
import Dragonstone from "./Pages/Dragonstone/Dragonstone";
import Citadel from "./Pages/Citadel/Citadel";
import Crypts from "./Pages/Crypts/Crypts";
import Ravenry from "./Pages/Ravenry/Ravenry";
import BeyondTheWall from "./Pages/BeyondTheWall/BeyondTheWall";
import Ironbank from "./Pages/Ironbank/Ironbank";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<KingsLanding />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dragonstone" element={<Dragonstone />} />
        <Route path="/citadel" element={<Citadel />} />
        <Route path="/crypts" element={<Crypts />} />
        <Route path="/ravenry" element={<Ravenry />} />
        <Route path="/beyond-the-wall" element={<BeyondTheWall />} />
        <Route path="/ironbank" element={<Ironbank />} />
        <Route path="*" element={<KingsLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
