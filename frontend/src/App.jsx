import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import "./App.css";
import { AuthProvider } from "./context/useAuth";

import Gallery from "./Components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import ConnexInscri from "./pages/ConnexInscriPage";
import AProposPage from "./pages/AProposPage";
import Accueil from "./Components/Accueil";
import OeuvreSolo from "./Components/OeuvreSolo";
// import Utilisateur from "./Components/Utilisateur";

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
