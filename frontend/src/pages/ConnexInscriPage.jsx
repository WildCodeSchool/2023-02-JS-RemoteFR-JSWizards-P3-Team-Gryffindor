import "../App.css";
import React, { useState } from "react";
import { Switch } from "antd";
import Connexion from "../Components/Connexion";
import Inscription from "../Components/Inscription";

function ConnexInscri() {
  const [affichage, setAffichage] = useState("connexion");

  const basculerAffichage = () => {
    if (affichage === "connexion") {
      setAffichage("inscription");
    } else {
      setAffichage("connexion");
    }
  };

  return (
    <div className="mt-[8rem]">
      <Switch
        defaultChecked
        checkedChildren="Login"
        onClick={basculerAffichage}
        unCheckedChildren="Register"
        className="w-44 top-14 bg-regiser_b"
      />
      {affichage === "connexion" ? <Connexion /> : <Inscription />}
    </div>
  );
}

export default ConnexInscri;
