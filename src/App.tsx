import React from 'react';
import {Dashboard} from './pages/Dashboard';
import {GlobalStyle} from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewNoteModal } from './components/NewNoteModal';


Modal.setAppElement('#root');

function App() {
  const [isNewNoteModalOpen, setIsNewNoteModalOpen] =
  useState(false);

  function handleOpenNewNoteModal() {
    setIsNewNoteModalOpen(true);
  }
  
  function handleCloseNewNoteModal() {
    setIsNewNoteModalOpen(false);
  }

  return (
    <>
    <GlobalStyle/>
    <Dashboard onOpenNewNoteModal={handleOpenNewNoteModal}/>
    <NewNoteModal isOpen={isNewNoteModalOpen} onRequestClose={handleCloseNewNoteModal}/>
    </>
  );
}

export default App;
