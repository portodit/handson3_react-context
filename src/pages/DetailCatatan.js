import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from '../contexts/NoteContext';
import '../styles/DetailCatatan.css';

const DetailCatatan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote, archiveNote, unarchiveNote } = useNotes();

  const note = notes.find(n => n.id === id);

  const handleDelete = () => {
    deleteNote(id);
    navigate('/daftarcatatan');
  };

  const handleArchive = () => {
    archiveNote(id);
    navigate('/arsipcatatan');
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate('/daftarcatatan');
  };

  return (
    <div className="detail-catatan">
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{new Date(note.createdAt).toLocaleDateString()}</p>
          <p>{note.body}</p>
          <div className="button-group">
            {note.archived ? (
              <button onClick={handleUnarchive}>Batalkan Arsip</button>
            ) : (
              <>
                <button onClick={handleDelete}>Hapus Catatan</button>
                <button onClick={handleArchive}>Arsipkan Catatan</button>
              </>
            )}
          </div>
        </>
      ) : (
        <p>Catatan tidak ditemukan.</p>
      )}
    </div>
  );
};

export default DetailCatatan;
