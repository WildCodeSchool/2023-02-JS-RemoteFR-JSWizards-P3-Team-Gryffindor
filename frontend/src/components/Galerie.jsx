import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import imagesData from "./Oeuvres.json";
import "./Galerie.css";
import OeuvreSolo from "./OeuvreSolo";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      imagesData.map((oeuvre) => ({
        id: oeuvre.id,
        url: oeuvre.image,
        type: oeuvre.type,
        titre: oeuvre.titre,
        res: oeuvre.res,
        ref: oeuvre.reference,
      }))
    );
  }, []);

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/oeuvres/${id}`);
  };

  return (
    <div className="bg-primary_blue min-h-screen flex flex-col mt-20 mb-20">
      <div className="bg-primary_blue flex justify-center">
        <div className="grid grid-cols-3 gap-12 mr-20">
          {/* eslint-disable */}
          {images.map((image) => (
            <div
              key={image.id}
              className="flex h-64 w-[500px] opacity-100 transition-opacity ease-in-out duration-300 justify-center items-center relative"
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={image.url}
                alt="Aquarelle"
                className="object-cover h-full opacity-100 hover:opacity-30"
              />
              <div className="texthover opacity-0 hover:opacity-90 backdrop-filter backdrop-blur-md transition-opacity ease-in-out duration-300 absolute inset-0 flex items-center justify-center">
                <div className="text grey-600 italic">
                  <p>{image.type}</p>
                  <div className="text grey-600 font-bold">
                    <p>{image.res}</p>
                    <p>{image.ref}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/oeuvres/:id" element={<OeuvreSolo />} />
      </Routes>
    </div>
  );
}

export default Gallery;
