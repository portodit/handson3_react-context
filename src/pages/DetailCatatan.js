import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DetailCatatan.css';

const DetailCatatan = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find(n => n.id === id);

  const handleDelete = () => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes); 
    navigate('/daftarcatatan'); 
  };

  const handleArchive = () => {
    const updatedNotes = notes.map(n =>
      n.id === id ? { ...n, archived: true } : n
    );
    setNotes(updatedNotes); 
    navigate('/arsipcatatan'); 
  };

  const handleUnarchive = () => {
    const updatedNotes = notes.map(n =>
      n.id === id ? { ...n, archived: false } : n
    );
    setNotes(updatedNotes);
    navigate('/daftarcatatan'); 
  };

  return (
    <div className="detail-catatan">
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{new Date(note.createdAt).toLocaleDateString()}</p>
          <p>{note.body}</p>
          {note.archived ? (
            <button onClick={handleUnarchive}>Batalkan Arsip</button>
          ) : (
            <>
              <button onClick={handleDelete}>Hapus Catatan</button>
              <button onClick={handleArchive}>Arsipkan Catatan</button>
            </>
          )}
        </>
      ) : (
        <p>Catatan tidak ditemukan.</p>
      )}
    </div>
  );
};

export default DetailCatatan;
