import React, { useEffect, useState } from "react";
import imagesData from "./Oeuvres.json";

export default function OeuvreSolo() {
  const [oeuvre, setOeuvre] = useState(null);

  useEffect(() => {
    const images = imagesData.map((item) => ({
      id: item.id,
      image: item.image,
      type: item.type,
      titre: item.titre,
      res: item.res,
      auteur: item.auteur,
      categorie: item.categorie,
      article: item.article,
      description: item.description,
      annee: item.dateCreation,
      dimensions: item.dimensions,
    }));

    // Sélectionner la première œuvre comme l'œuvre actuelle
    if (images.length > 0) {
      setOeuvre(images[3]);
    }
  }, []);

  if (!oeuvre) {
    // Gère le cas où aucune œuvre n'est disponible
    return <div>Aucune œuvre trouvée.</div>;
  }

  return (
    <div className="flex mb-20">
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-white mt-5 ml-10 mr-10">
          {oeuvre.titre}, {oeuvre.type}, {oeuvre.dateCreation} .
        </h1>
        <img
          className="mt-2 h-[600px]"
          src={oeuvre.image}
          alt="Description de l'oeuvre"
        />
        <h2 className="text-white mt-5 text-l">
          {oeuvre.auteur}, {oeuvre.categorie}, {oeuvre.dimensions.hauteur} cm x{" "}
          {oeuvre.dimensions.largeur} cm
        </h2>
      </div>
      <div className="w-1/2 ml-10 justify-items-start">
        <h3 className="text-white mt-20 mr-10 text-xl">
          {oeuvre.description} .
        </h3>
      </div>
    </div>
  );
}
