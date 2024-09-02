import React, { useState } from 'react';
import NoteItem from '../components/NoteItem';
import '../styles/DaftarCatatan.css';
import Pagination from '../components/Paginations';
import notesData from '../utils/NotesData';

const DaftarCatatan = () => {
  const [notes, setNotes] = useState(notesData);
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 2;

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleDelete = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="daftar-catatan">
      <h2>Daftar Catatan</h2>
      {currentNotes.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        <div className="note-list">
          {currentNotes.map(note => (
            <NoteItem key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
      <Pagination 
        notesPerPage={notesPerPage} 
        totalNotes={notes.length} 
        paginate={paginate} 
      />
    </div>
  );
};

export default DaftarCatatan;
