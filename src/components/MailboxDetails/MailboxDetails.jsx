import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Size:</strong> {selectedBox.boxSize}</p>

      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient}<br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
