import React, { useEffect, useState } from "react";
import imagesData from "./images.json"; // Import the JSON file

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      imagesData.images.map((image, index) => ({ id: index, url: image }))
    );
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="bg-gray-200 h-48">
          <img
            src={image.url}
            alt="Aquarelle"
            className="object-cover h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
