import React, { useEffect, useState } from "react";
import imagesData from "./images.json"; // Importer le fichier JSON
import "./Galerie.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      imagesData.images.map((image, index) => ({ id: index, url: image }))
    );
  }, []);

  return (
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
              <div className="text grey-600">
                <p>Titre oeuvre</p>
                <p>Autre texte</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;