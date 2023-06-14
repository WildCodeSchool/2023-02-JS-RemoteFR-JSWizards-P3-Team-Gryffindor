import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="flexx bg-primary_black">
      <a href="/">
        <img
          src="./src/assets/logo/logo-AFAC.png"
          alt="logo AFAC"
          width="100"
          height="50"
          className="logo-AFAC"
        />
      </a>
      <nav>
        <ul className="container">
          <li className="navList">
            <Link to="/accueil">Accueil</Link>
          </li>
          <li className="navList">
            <Link to="/galerie">Galerie</Link>
          </li>

          <li className="navList">
            <Link to="/auteur">Auteur</Link>
          </li>
          <li className="navList">
            <Link to="/aPropos">A Propos</Link>
          </li>
          <li className="navList">
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header> /*
    <header className="flexx bg-primary_black">
      <a href="/acceuil">
        <img
          src="./src/assets/logo/logo-AFAC.png"
          alt="logo AFAC"
          width="100"
          height="50"
          className="logo-AFAC"
        />
      </a>
      <nav>
        <ul className="container">
          <li className="navList">
            <a href="acceuil">Acceuil</a>
          </li>
          <li className="navList">
            <a href="galerie">Galerie</a>
          </li>
          <li className="navList">
            <a href="oeuvres">Oeuvres</a>
          </li>
          <li className="navList">
            <a href="auteurs">Auteurs</a>
          </li>
          <li className="navList">
            <a href="aPropos">A Propos</a>
          </li>
          <li className="navList">
            <a href="connexion">Connexion</a>
          </li>
        </ul>
      </nav>
    </header> */
  );
}
