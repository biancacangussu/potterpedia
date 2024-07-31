import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Potions } from "./pages/Potions";
import { Spells } from "./pages/Spells";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { Loading } from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('https://api.potterdb.com/v1');
        if (response.data && response.data.length > 0) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-image bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none"></div>
      <div className="dark">
        <Router>
          <NavBar />
          {loading ? <Loading /> : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/potions" element={<Potions />} />
              <Route path="/spells" element={<Spells />} />
            </Routes>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
