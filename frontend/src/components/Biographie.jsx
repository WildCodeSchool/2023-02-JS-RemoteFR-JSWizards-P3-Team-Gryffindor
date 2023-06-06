import React from "react";

function Biographie() {
  return (
    <div className="bg-primary_blue min-h-screen">
      <div>
        <h1 className="text-6xl text-white py-10">
          Hippolyte Mortier de Trévise
        </h1>
      </div>
      <div className="flex">
        <img
          className="w-96 h-full mt-12 border-[12px] border-primary_black
          mr-40 ml-40"
          src="./src/assets/Napoléon_Mortier_de_Trévise.png"
          alt="Hippolyte Mortier de Trévise"
        />
        <p className="text-left w-1/2 mt-32 text-white">
          Hippolyte Charles Napoléon Mortier de Trévise, 3e duc de Trévise, est
          né le 4 mai 1835 a Paris, et mort le 13 février 1892, quelques jours
          après son frère Jean-François Hippolyte Mortier, marquis de Trévise.
          <br />
          <br />
          Fils de Napoléon Mortier de Trévise (1804-1869), 2e duc de Trévise et
          de la duchesse née Anne-Marie Lecomte-Stuart (1808-1870), il hérite du
          château de Sceaux en, 1869, en indivision avec ses frères et sœurs
          mais il cède ses parts à son frère, Jean-François Hippolyte Mortier,
          marquis de Trévise qui reste seul propriétaire du domaine. <br />
          <br /> Le 23 octobre 1860, il épouse Marie Angèle Emma Le Coat de
          Kerveguen, fille de Gabriel Le Coat de Kerveguen, un riche colon
          réunionnais. Il n'a pas d'enfant. En 1869, il achète à M. de Turenne
          le château de Coupvray construit par Hercule de Rohan-Montbazon en
          16001. <br />
          <br /> Il est connu aujourd'hui pour ses talents de dessinateur, qu'il
          exerça notamment à La Réunion. Ses tableaux et dessins sont conservés
          au Musée Léon-Dierx et consultables en ligne dans l'Iconothèque
          historique de l'océan Indien.
        </p>
      </div>
    </div>
  );
}
export default Biographie;
