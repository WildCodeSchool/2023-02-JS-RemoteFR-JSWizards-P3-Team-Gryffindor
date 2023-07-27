import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";
import { AuthProvider } from "./context/useAuth";

import Gallery from "./components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import ConnexInscri from "./pages/ConnexInscriPage";
// import InscriConnexion from "./pages/InscriConnexion";
import AProposPage from "./pages/AProposPage";
import Accueil from "./components/Accueil";
import OeuvreSolo from "./components/OeuvreSolo";
// import imagesData from "./components/Oeuvres.json"; // Importez le fichier JSON d'œuvres

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/oeuvres" element={<OeuvreSolo />} />
            <Route path="/auteur" element={<AuteurPage />} />
            <Route path="/aPropos" element={<AProposPage />} />
            <Route path="/connexion" element={<ConnexInscri />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
