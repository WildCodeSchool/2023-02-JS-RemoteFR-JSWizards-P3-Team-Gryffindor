import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imagesData from "./Oeuvres.json";

export default function OeuvreSolo() {
  const [oeuvre, setOeuvre] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const oeuvre2 = imagesData.find(
      (eachOeuvre) => eachOeuvre.id === Number(id)
    );

    setOeuvre(oeuvre2);
  }, [id]);

  return (
    <div>
      {oeuvre && (
        <div className="flex mb-20">
          <div className="w-1/2 flex flex-col justify-center items-center ">
            <h1 className="text-white mt-5 ml-10 mr-10">
              {oeuvre.titre}, {oeuvre.type}, {oeuvre.dateCreation} .
            </h1>
            <img
              className="mt-2 h-[600px]"
              src={`.${oeuvre.image}`}
              alt="Description de l'oeuvre"
            />
            <h2 className="text-white mt-5 text-l">
              {oeuvre.auteur}, {oeuvre.categorie}, {oeuvre.dimensions.hauteur}{" "}
              cm x {oeuvre.dimensions.largeur} cm
            </h2>
          </div>
          <div className="w-1/2 ml-10 justify-items-start">
            <h3 className="text-white mt-20 mr-10 text-xl">
              {oeuvre.description}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
