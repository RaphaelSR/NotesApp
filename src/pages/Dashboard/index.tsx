import { useState, FormEvent } from "react";
import {
  Container,
  NotesList,
  CloseButton,
  NoteBackground,
  NoteData,
  Content,
  Header,
  AddNotes,
} from "./styles";
import { HeaderProps } from "../../types";

export function Dashboard({
  onOpenNewNoteModal,
  onCreateNewNote,
  onRemoveNote,
  onCounterValue,
  onNotesValue,
}: HeaderProps) {
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
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>Notes ({onCounterValue})</h1>
          <button onClick={onOpenNewNoteModal} type="button">
            Add note
          </button>
        </Header>
        <NotesList>
          {onNotesValue.map((note) => {
            return (
              <NoteBackground key={note.id}>
                <CloseButton onClick={() => onRemoveNote(note.id)}>
                  X
                </CloseButton>
                <NoteData>
                  <h2>{note.title}</h2>
                  <p>{note.description}</p>
                </NoteData>
              </NoteBackground>
            );
          })}
        </NotesList>
      </Content>
      <AddNotes>
        <h1>Add a note</h1>
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
      </AddNotes>
    </Container>
  );
}
