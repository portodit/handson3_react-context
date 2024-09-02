import React, { createContext, useContext, useState } from 'react';
import notesData from '../utils/NotesData';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(notesData);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const archiveNote = (id) => {
    const noteToArchive = notes.find(note => note.id === id);
    setArchivedNotes([...archivedNotes, { ...noteToArchive, archived: true }]);
    setNotes(notes.filter(note => note.id !== id));
  };

  const unarchiveNote = (id) => {
    const noteToUnarchive = archivedNotes.find(note => note.id === id);
    setNotes([...notes, { ...noteToUnarchive, archived: false }]);
    setArchivedNotes(archivedNotes.filter(note => note.id !== id));
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <NoteContext.Provider value={{ notes, archivedNotes, deleteNote, archiveNote, unarchiveNote, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NoteContext);
};
