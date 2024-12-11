import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import FormationList from "./components/FormationList";
import FormationDetails from "./components/FormationDetails";
import FormationForm from "./components/FormationForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormationList />} />
        <Route path="/formations/:id" element={<FormationDetails />} />
        <Route path="/add" element={<FormationForm />} />
        <Route path="/edit/:id" element={<FormationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
