import { Container } from "./styles";
import Modal from "react-modal";

interface NewNoteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewNoteModal({
  isOpen,
  onRequestClose,
}: NewNoteModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add note</h2>
    </Modal>
  );
}
