import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../context/useAuth";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <header className="flexx bg-primary_black">
      <Link to="/">
        <img
          src="./src/assets/logo/logo-AFAC.png"
          alt="logo AFAC"
          width="100"
          height="50"
          className="logo-AFAC"
        />
      </Link>
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
          {!user.email ? (
            <li className="navList">
              <Link to="/connexion">Connexion</Link>
            </li>
          ) : null}
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
