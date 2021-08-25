export interface Note {
  id: number;
  title: string;
  description: string;
}

export interface HeaderProps {
  onOpenNewNoteModal: () => void;
  onCreateNewNote: (note: Note) => void;
  onRemoveNote: (id: number) => void;
  onCounterValue: number;
  onNotesValue: Note[];
}

export interface NewNoteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onCreateNewNote: (note: Note) => void;
}
