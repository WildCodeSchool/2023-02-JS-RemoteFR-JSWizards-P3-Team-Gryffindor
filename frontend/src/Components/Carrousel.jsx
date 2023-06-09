import React, { useState, useEffect } from "react";

function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://picsum.photos/700/300?random=1",
    "https://picsum.photos/700/300?random=2",
    "https://picsum.photos/700/300?random=3",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <img src={images[currentImage]} alt={`CurrentImage-${currentImage}`} />
    </div>
  );
}

export default Carrousel;
