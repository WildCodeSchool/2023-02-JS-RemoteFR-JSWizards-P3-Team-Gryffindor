import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import "./App.css";
// import Utilisateur from "./Components/Utilisateur";
// import Gallery from "./Components/Galerie";


import Gallery from "./Components/Galerie";
import AuteurPage from "./pages/AuteurPage";
import AProposPage from "./pages/AProposPage";
import Connexion from "./Components/Connexion";




import Accueil from "./components/Accueil";





function App() {
  return (

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

   
  );
}

export default App;
