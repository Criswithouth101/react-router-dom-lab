import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <input
          type="text"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          required
        />
      </label>

      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>

      <button type="submit">Create Mailbox</button>
    </form>
  );
}
