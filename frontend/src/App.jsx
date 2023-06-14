import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import "./App.css";


// import Utilisateur from "./Components/Utilisateur";
// import Gallery from "./Components/Galerie";


import Gallery from "./Components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import ConnexInscri from "./pages/ConnexInscriPage";
import AProposPage from "./pages/AProposPage";
import Accueil from "./Components/Accueil";
import OeuvreSolo from "./Components/OeuvreSolo";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <Accueil />
          <Routes>
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/auteur" element={<AuteurPage />} />
            <Route path="/aPropos" element={<AProposPage />} />
            <Route path="/connexion" element={<Connexion />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
