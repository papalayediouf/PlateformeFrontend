import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function FormationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formation, setFormation] = useState({
    nom: "",
    date: "",
    nombreMaxParticipants: "",
    thematique: "",
    prix: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/formations/${id}`)
        .then((response) => setFormation(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormation({ ...formation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id ? `http://localhost:5000/formations/${id}` : "http://localhost:5000/formations";
    const method = id ? "put" : "post";
    
    axios[method](url, formation)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Modifier" : "Ajouter"} une Formation</h1>
      <input type="text" name="nom" value={formation.nom} onChange={handleChange} placeholder="Nom" required />
      <input type="date" name="date" value={formation.date} onChange={handleChange} required />
      <input type="number" name="nombreMaxParticipants" value={formation.nombreMaxParticipants} onChange={handleChange} placeholder="Nombre max" required />
      <input type="text" name="thematique" value={formation.thematique} onChange={handleChange} placeholder="Thématique" required />
      <input type="number" name="prix" value={formation.prix} onChange={handleChange} placeholder="Prix" required />
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default FormationForm;
