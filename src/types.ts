export interface Note {
  id: number;
  title: string;
  description: string;
}

export interface HeaderProps {
  onOpenNewNoteModal: () => void;
}

