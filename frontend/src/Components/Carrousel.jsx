import React, { useState, useEffect } from "react";

function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const artworks = [
    {
      id: 1,
      reference: "40FI79",
      image: "./src/assets/images/Cheminee_40FI79.jpg",
      // ... other artwork properties
    },
    {
      id: 2,
      reference: "40FI78",
      image: "./src/assets/images/UsineBelAir_40FI78.jpg",
      // ... other artwork properties
    },
    {
      id: 3,
      reference: "40FI80",
      image: "./src/assets/images/FRAD974_40FI80.jpg",
      // ... other artwork properties
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
        style={{ width: "500px", height: "300px" }} // Définissez les dimensions souhaitées ici
      />
      <div>
        <h3>{artworks[currentImage].titre}</h3>
        <p>{artworks[currentImage].description}</p>
        {/* Render other artwork information */}
      </div>
    </div>
  );
}

export default Carrousel;
