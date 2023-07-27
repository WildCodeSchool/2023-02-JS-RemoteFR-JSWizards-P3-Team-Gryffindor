import React from "react";
import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";

function Accueil() {
  const handleRightClick = (event) => {
    event.preventDefault();
  };

  const Text =
    "Bienvenue dans notre galerie en ligne, où l'art prend vie à travers un voyage virtuel. Plongez dans l'univers de l'auteur Hippolyte Mortier de Trévise en découvrant son oeuvre au fil des années. Ses dessins et aquarelles nous donnent un aperçu du regard qu'il portait sur son époque et son environnement.";

  return (
    <div className="bg-primary_blue min-h-screen flex flex-col justify-center items-center">
      <Carrousel />
      <div className="max-w-2xl px-4">
        <p
          className="mb-10 mt-8 text-center text-white"
          onContextMenu={handleRightClick}
        >
          {Text}
        </p>
      </div>
      <div className="mt-10">
        <Link to="/galerie">
          <button
            type="button"
            className="bg-primary_black text-white font-bold text-sm py-2 px-3 rounded"
            onContextMenu={handleRightClick}
          >
            Voir la galerie
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
