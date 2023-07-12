import React, { useState, useEffect } from "react";
import img1 from "../assets/images/Cheminee_40FI79.jpg";
import img2 from "../assets/images/UsineBelAir_40FI78.jpg";
import img3 from "../assets/images/FRAD974_40FI80.jpg";

function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const artworks = [
    {
      id: 1,
      reference: "40FI79",
      image: img1,
    },
    {
      id: 2,
      reference: "40FI78",
      image: img2,
    },
    {
      id: 3,
      reference: "40FI80",
      image: img3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % artworks.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [artworks]);

  return (
    <div>
      <img
        src={artworks[currentImage].image}
        alt={`CurrentImage-${currentImage}`}
        style={{ width: "500px", height: "300px" }}
      />
      <div>
        <h3>{artworks[currentImage].titre}</h3>
        <p>{artworks[currentImage].description}</p>
      </div>
    </div>
  );
}

export default Carrousel;
