import { useState, FormEvent, useEffect } from "react";
import {
  Container,
  AddNotes,
  NotesList,
  CloseButton,
  NoteBackground,
  NoteData,
  Content,
  Header,
} from "./styles";
import { Note, HeaderProps } from "../../types";

export function Dashboard({onOpenNewNoteModal}: HeaderProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("Notes") === null) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
    const storagedNotes = JSON.parse(
      localStorage.getItem("@Noteapp:note") || "[{}]"
    );
    setNotes(storagedNotes);
    setCounter(storagedNotes.length);
  }, []);

  function handleCreateNewNote(event: FormEvent) {
    event.preventDefault();

    const newNote = {
      id: Math.random(),
      title,
      description,
    };
    setNotes((oldNotes) => [...oldNotes, newNote]);
    const updatedNotes = [...notes];
    if (updatedNotes) {
      localStorage.setItem("@Noteapp:note", JSON.stringify(updatedNotes));
    }
    setCounter(counter + 1);
    setTitle("");
    setDescription("");
  }

  function handleRemoveNote(id: number) {
    const filteredNote = notes.filter((note) => note.id !== id);
    localStorage.setItem("@Noteapp:note", JSON.stringify(filteredNote));
    setNotes(filteredNote);
    setCounter(counter - 1);
  }

  return (
    <Container>
      <Content>
      <Header>
        <h1>Notes ({counter})</h1>
        <button onClick={onOpenNewNoteModal} type="button">
          Add note
        </button>
      </Header>
        <NotesList>
          {notes.map((note) => {
            return (
              <NoteBackground key={note.id}>
                <CloseButton onClick={() => handleRemoveNote(note.id)}>
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
