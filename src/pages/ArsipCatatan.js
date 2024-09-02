import React, { useState } from 'react';
import NoteItemArsip from '../components/NoteItemArsip';
import PaginationArsip from '../components/PaginationArsip';
import '../styles/ArsipCatatan.css';
import { useNotes } from '../contexts/NoteContext';

const ArsipCatatan = () => {
  const { archivedNotes, unarchiveNote } = useNotes();
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = archivedNotes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(archivedNotes.length / notesPerPage);

  const handlePageChange = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="arsip-catatan">
      <h2>Arsip Catatan</h2>
      {archivedNotes.length === 0 ? (
        <p>Arsip kosong.</p>
      ) : (
        <div>
          <div className="note-list">
            {currentNotes.map(note => (
              <NoteItemArsip key={note.id} note={note} onUnarchive={unarchiveNote} />
            ))}
          </div>
          <PaginationArsip 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ArsipCatatan;
