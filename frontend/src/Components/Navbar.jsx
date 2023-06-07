// import { Link } from "react-router-dom";//
import "./Navbar.css";

export default function NavBar() {
  return (
    /*
    <header className="flex bg-primary_black">
      <a href="/acceuil">
        <img
          src="/assets/logo/logo-AFAC.png"
          alt="logo AFAC"
          width="350"
          height="60"
          className="logo-AFAC"
        />
      </a>
      <nav> 
        <ul className="container">
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
    </header> */
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
    </header>
  );
}
