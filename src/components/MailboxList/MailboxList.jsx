import { Link } from "react-router-dom";
import "./MailboxList.css";

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      {mailboxes.length === 0 ? (
        <p>No mailboxes yet.</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {mailboxes.map((box) => (
            <Link
              key={box._id}
              to={`/mailboxes/${box._id}`}
              className="mail-box"
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "black",
              }}
            >
              {box._id}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
