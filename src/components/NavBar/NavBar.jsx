import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
      <Link to="/new-letter">New Letter</Link>
    </nav>
  );
}
