export default function OeuvreSolo() {
  return (
    <div>
      <div className="flex">
        <h1 className="text-white ml-[164px] mt-5">
          Titre de l'oeuvre, année de création
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="mt-2 h-[600px]"
          src="./src/assets/images/thin-rectangle.jpg"
          alt="Description de l'oeuvre"
        />
      </div>
      <div className="flex">
        <h2 className="text-white ml-[164px] mt-5">
          Nom de l'auteur, type d'oeuvre - Couleur : Dim x Dim
        </h2>
      </div>
    </div>
  );
}
