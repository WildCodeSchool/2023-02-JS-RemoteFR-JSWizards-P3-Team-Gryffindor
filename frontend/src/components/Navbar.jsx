import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="flexx bg-primary_black">
      <Link href="/">
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
            <Link to="/">Accueil</Link>
          </li>
          <li className="navList">
            <Link to="/galerie">Galerie</Link>
          </li>

          <li className="navList">
            <Link to="/auteur">Auteur</Link>
          </li>
          <li className="navList">
            <Link to="/a-propos">A Propos</Link>
          </li>
          <li className="navList">
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
