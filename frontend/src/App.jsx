import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";

import Gallery from "./components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import ConnexInscri from "./pages/ConnexInscriPage";
import AProposPage from "./pages/AProposPage";
import Accueil from "./components/Accueil";
import OeuvreSolo from "./components/OeuvreSolo";
import imagesData from "./components/Oeuvres.json"; // Importez le fichier JSON d'œuvres

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/galerie/*" element={<Gallery />} />
          <Route
            path="/oeuvres/:id"
            element={<OeuvreSolo oeuvres={imagesData} />} // Passez les données d'œuvre à la page OeuvreSolo
          />

          <Route path="/auteur" element={<AuteurPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/connexion" element={<ConnexInscri />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
