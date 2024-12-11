import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function FormationList() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/formations")
      .then((response) => setFormations(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Liste des Formations</h1>
      <ul>
        {formations.map((formation) => (
          <li key={formation._id}>
            <Link to={`/formations/${formation._id}`}>{formation.nom}</Link> - {new Date(formation.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormationList;
