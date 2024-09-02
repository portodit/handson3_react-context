import React, { useState, useEffect } from 'react';
import { useNotes } from '../contexts/NoteContext'; 
import NoteItem from '../components/NoteItem';
import Pagination from '../components/Paginations'; 
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/DaftarCatatan.css';

const DaftarCatatan = () => {
  const { notes, deleteNote, archiveNote } = useNotes(); 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const notesPerPage = 5;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search') || '';
    setSearchQuery(query);
    setCurrentPage(1); 
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams({ search: searchQuery });
    navigate(`?${queryParams.toString()}`);
  }, [searchQuery, navigate]);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="daftar-catatan">
      <h2>Daftar Catatan</h2>
      <div className="search-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)} 
          placeholder="Cari catatan..." 
          className="search-input"
        />
      </div>
      {currentNotes.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        <div className="note-list">
          {currentNotes.map(note => (
            <NoteItem 
              key={note.id} 
              note={note} 
              onDelete={() => deleteNote(note.id)} 
              onArchive={() => archiveNote(note.id)} 
            />
          ))}
        </div>
      )}
      <Pagination 
        notesPerPage={notesPerPage} 
        totalNotes={filteredNotes.length} 
        paginate={paginate} 
      />
    </div>
  );
};

export default DaftarCatatan;
