import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";

export default function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  function addBox(newBoxData) {
    const newBox = {
      _id: mailboxes.length + 1,
      ...newBoxData,
    };
    setMailboxes([...mailboxes, newBox]);
  }

  function addLetter(newLetterData) {
    setLetters([...letters, newLetterData]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
      </Routes>
    </>
  );
}

