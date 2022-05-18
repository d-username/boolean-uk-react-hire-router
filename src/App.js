import "./styles.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const hiredPerson = (person, wage) => {
    setHiredPeople([...hiredPeople, { ...person, wage: wage }]);
  };

  return (
    <header>
      <h1>Hire Your Team</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
          <Route
            path="/view/:id"
            element={<PersonProfile hiredPerson={hiredPerson} />}
          />
        </Routes>
      </nav>
    </header>
  );
}
