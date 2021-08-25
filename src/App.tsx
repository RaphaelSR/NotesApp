import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewNoteModal } from "./components/NewNoteModal";
import { Note } from "./types";

Modal.setAppElement("#root");

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [counter, setCounter] = useState(0);
  const [isNewNoteModalOpen, setIsNewNoteModalOpen] = useState(false);

  useEffect(() => {
    LoadState();
  }, []);

  function LoadState() {
    const storagedNotes = JSON.parse(
      localStorage.getItem("@Noteapp:note") || "[{}]"
    );
    if (storagedNotes === null) {
      localStorage.setItem("@Noteapp:note", JSON.stringify(notes));
    } else {
      setNotes(storagedNotes);
    }
    console.log(counter);
    setCounter(
      storagedNotes.length >= notes.length ? storagedNotes.length : notes.length
    );
  }

  function handleCreateNewNote(newNote: Note) {
    setNotes((oldNotes) => [...oldNotes, newNote]);
    const updatedNotes = [...notes];
    if (updatedNotes) {
      localStorage.setItem("@Noteapp:note", JSON.stringify(updatedNotes));
    }
    setCounter(counter + 1);
  }

  function handleRemoveNote(id: number) {
    const filteredNote = notes.filter((note) => note.id !== id);
    localStorage.setItem("@Noteapp:note", JSON.stringify(filteredNote));
    setNotes(filteredNote);
    setCounter(counter - 1);
  }

  function handleOpenNewNoteModal() {
    setIsNewNoteModalOpen(true);
  }

  function handleCloseNewNoteModal() {
    setIsNewNoteModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Dashboard
        onOpenNewNoteModal={handleOpenNewNoteModal}
        onCreateNewNote={handleCreateNewNote}
        onRemoveNote={handleRemoveNote}
        onCounterValue={counter}
        onNotesValue={notes}
      />
      <NewNoteModal
        isOpen={isNewNoteModalOpen}
        onRequestClose={handleCloseNewNoteModal}
        onCreateNewNote={handleCreateNewNote}
      />
    </>
  );
}

export default App;
