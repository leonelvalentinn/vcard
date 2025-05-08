import { Link } from "react-router-dom";

const contacts = [
  { id: "ullises", name: "Ullises Pedroza" },
];

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contactos</h1>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <Link to={`/contact/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
