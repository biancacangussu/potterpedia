import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Potions } from "./pages/Potions";
import { Spells } from "./pages/Spells";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-image bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none"></div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/potions" element={<Potions />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
