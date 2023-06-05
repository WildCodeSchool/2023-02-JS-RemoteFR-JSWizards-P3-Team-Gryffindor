import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header>
      <a href="/">
        <img
          src="/assets/logo/logo-AFAC.png"
          alt="logo AFAC"
          width="350"
          height="60"
          className="logo-AFAC"
        />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/acceuil">Acceuil</Link>
          </li>
          <li>
            <Link to="/galerie">Galerie</Link>
          </li>
          <li>
            <Link to="/oeuvres">Oeuvres</Link>
          </li>
          <li>
            <Link to="/auteurs">Auteurs</Link>
          </li>
          <li>
            <Link to="/aPropos">A Propos</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
