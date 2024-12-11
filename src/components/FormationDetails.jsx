import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

function FormationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formation, setFormation] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/formations/${id}`)
      .then((response) => setFormation(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/formations/${id}`)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  if (!formation) return <div>Chargement...</div>;

  return (
    <div>
      <h1>{formation.nom}</h1>
      <p>Date : {new Date(formation.date).toLocaleDateString()}</p>
      <p>Thématique : {formation.thematique}</p>
      <p>Nombre maximum de participants : {formation.nombreMaxParticipants}</p>
      <p>Prix : {formation.prix} €</p>
      <button onClick={() => navigate(`/edit/${formation._id}`)}>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default FormationDetails;
