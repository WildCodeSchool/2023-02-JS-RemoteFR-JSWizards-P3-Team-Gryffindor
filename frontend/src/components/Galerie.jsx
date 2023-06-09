import React, { useEffect, useState } from "react";
import imagesData from "./Oeuvres.json"; // Importer le fichier JSON
import "./Galerie.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      imagesData.map((oeuvre) => ({
        id: oeuvre.id,
        url: oeuvre.image,
        type: oeuvre.type,
        titre: oeuvre.titre,
      }))
    );
  }, []);

  return (
    <div className="bg-primary_blue min-h-screen flex flex-col">
      <div className="flex justify-center items-center py-8">
        <h1 className="text-4xl font-bold text-white">
          <span className="placeholder-title">Notre sélection</span>
        </h1>
      </div>

      <div className="bg-primary_blue flex justify-center">
        <div className="grid grid-cols-2 gap-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-gray-600 h-64 w-[500px] opacity-100 transition-opacity ease-in-out duration-300 relative"
            >
              <img
                src={image.url}
                alt="Aquarelle"
                className="object-cover h-full w-full opacity-100 hover:opacity-30"
              />
              <div className="texthover opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 absolute inset-0 flex items-center justify-center">
                <div className="text grey-600 italic">
                  <p>{image.type}</p>
                  <div className="text grey-600 font-bold">
                    <p>{image.titre}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
