import { useState, FormEvent } from "react";
import Modal from "react-modal";
import { NewNoteModalProps } from "../../types";
import { CloseButton, Container, Header, Content } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
  },
};

export function NewNoteModal({
  isOpen,
  onRequestClose,
  onCreateNewNote,
}: NewNoteModalProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleCreateNewNote(event: FormEvent) {
    event.preventDefault();

    const newNote = {
      id: Math.random(),
      title,
      description,
    };
    onCreateNewNote(newNote);
    setTitle("");
    setDescription("");
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      style={customStyles}
    >
      <Container>
        <Header>
          <h1>Add a note</h1>
          <CloseButton onClick={onRequestClose}>X</CloseButton>
        </Header>
        <Content>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter a note title..."
          />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter a description..."
          />
          <button type="submit" onClick={handleCreateNewNote}>
            Add note
          </button>
        </Content>
      </Container>
    </Modal>
  );
}
