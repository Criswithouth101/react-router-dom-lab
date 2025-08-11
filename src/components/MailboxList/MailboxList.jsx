import { Link } from "react-router-dom";
import "./MailboxList.css";

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {mailboxes.map((box) => (
          <Link
            to={`/mailboxes/${box._id}`}
            key={box._id}
            className="mail-box"
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {box._id}
          </Link>
        ))}
      </div>
    </div>
  );
}
