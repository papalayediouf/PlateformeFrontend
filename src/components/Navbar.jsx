import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/add">Ajouter une Formation</Link>
    </nav>
  );
}

export default Navbar;
