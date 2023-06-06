import "./AdminBar.css";

export default function AdminBar() {
  return (
    <div className="adminBar bg-primary_black ">
      <ul>
        <li className="adminList">
          <a href="ajouter" className="adminLine">
            Ajouter
          </a>
        </li>
        <li className="adminList">
          <a href="modifier" className="adminLine">
            Modifier
          </a>
        </li>
        <li className="adminList">
          <a href="supprimer" className="adminLine">
            Supprimer
          </a>
        </li>
      </ul>
    </div>
  );
}
