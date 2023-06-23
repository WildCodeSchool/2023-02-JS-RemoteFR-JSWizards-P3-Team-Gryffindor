import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import "./App.css";

import Gallery from "./Components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import ConnexInscri from "./pages/ConnexInscriPage";
import AProposPage from "./pages/AProposPage";
import Accueil from "./Components/Accueil";
import OeuvreSolo from "./Components/OeuvreSolo";
import imagesData from "./Components/Oeuvres.json"; // Importez le fichier JSON d'œuvres

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
          <Route path="/aPropos" element={<AProposPage />} />
          <Route path="/connexion" element={<ConnexInscri />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
