import React from "react";

function APropos() {
  const handleRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-primary_blue">
      <div className="flex justify-evenly mx-10 pt-20">
        <p className="text-white text-left pr-20">
          L'association des Familles amies de CAPELINE est un centre
          d'accompagnement pédagogique en ligne et d'ingénierie
          pédagogique.Soutien aux élèves, accompagnement et/ou formation
          d'étudiants, d'enseignants ou de parents.
          <br /> <br /> CAPELINE 974 est un projet de plate-forme
          d'informations, et de formations à caractère pédagogiques, relatives
          aux outre-mers. C'est aussi une mise en relation de partenaires
          divers, impliqués dans le développement durable des outre-mers, en
          particulier dans l'océan Indien. <br />
          <br /> Elle s'adresse aux élèves de la zone et à leurs enseignants, à
          leurs familles, et aux collectivités. Ses publications pédagogiques ou
          scientifiques sont vérifiées par un Comité scientifique. <br />
          <br /> Ses actions en ligne et sur le terrain s'appuient sur des
          contributions bénévoles, mais aussi sur le travail de stagiaires
          rémunérés, et, pour 2021, d'un emploi aidé (stagiaire en formation à
          l'IUT de Saint-Pierre). Des contributions occasionnelles de chercheurs
          ou de spécialistes dans le domaine du numérique et/ou de
          l'enseignement nourrissent la réflexion autour de l'enseignement avec
          le numérique (Réunion, Inde, Madagascar, Belgique...)
        </p>
        <img
          src="./src/assets/image_icono.svg"
          alt="Iconotheque"
          className="w-2/5 border-[12px] border-primary_black object-cover"
          onContextMenu={handleRightClick}
        />
      </div>
      <div>
        <h1 className="mt-10 text-white text-xl ">
          Les images présentes sur le site ne sont pas libres de droit
        </h1>
      </div>
      <div className="flex justify-between mx-16 mt-10 pb-2 ">
        <a href="https://museo.vandanjon.com/index.php/en/">
          <img
            src="./src/assets/objettemoin.png"
            alt="Logo Objet Témoin"
            className="w-36"
          />
        </a>
        <a href="https://www.ihoi.org/app/photopro.sk/ihoi_icono/">
          <img src="./src/assets/iconotheque.gif" alt="Logo Iconotheque" />
        </a>
        <a href="https://capeline974.re/CAPELINE/CARTOTHEQUE/capeline-accueil.html">
          <img src="./src/assets/Afac.png" alt="" className="w-40 pt-2" />
        </a>
      </div>
    </div>
  );
}

export default APropos;
