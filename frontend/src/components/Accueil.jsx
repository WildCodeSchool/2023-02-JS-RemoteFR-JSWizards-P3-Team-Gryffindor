import React, { useState, useEffect } from "react";

function Accueil() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch("https://source.unsplash.com/random");
        const { url } = response;
        setImageURL(url);
      } catch (error) {
        error(error);
      }
    };

    fetchRandomImage();
  }, []);

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet quis metus ut bibendum. Nunc eu justo ante. Curabitur in cursus sapien. Sed pulvinar non mauris ut rhoncus. Nullam nec accumsan turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet velit at ipsum placerat fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at neque id magna malesuada efficitur. Pellentesque mollis velit et ipsum vulputate consequat.";

  return (
    <div className="bg-primary_blue min-h-screen flex flex-col justify-center items-center">
      <img
        src={imageURL}
        alt=" aléatoire"
        className="mt-4 mb-4 w-1/2 md:w-1/3 h-auto border-4 border-black"
      />
      <div className="max-w-2xl px-4">
        <p className="mb-10 mt-8 text-center text-white">{loremText}</p>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="bg-primary_red text-white font-bold text-sm py-2 px-3 rounded"
        >
          Voir les œuvres
        </button>
      </div>
    </div>
  );
}

export default Accueil;
