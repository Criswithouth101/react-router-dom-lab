import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterForm({ mailboxes, addLetter }) {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addLetter({
      mailboxId: Number(mailboxId),
      recipient,
      message,
    });
    navigate(`/mailboxes/${mailboxId}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Send To (Mailbox #):
        <select
          value={mailboxId}
          onChange={(e) => setMailboxId(e.target.value)}
          required
        >
          {mailboxes.map((box) => (
            <option key={box._id} value={box._id}>
              {box._id} - {box.boxOwner}
            </option>
          ))}
        </select>
      </label>

      <label>
        Recipient Name:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </label>

      <button type="submit">Send Letter</button>
    </form>
  );
}
