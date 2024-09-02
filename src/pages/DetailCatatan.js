import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DetailCatatan.css';

const DetailCatatan = ({ notes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find(n => n.id === id);

  const handleDelete = () => {
    // Delete note logic here
    navigate('/daftarcatatan');
  };

  const handleArchive = () => {
    // Archive note logic here
    navigate('/arsipcatatan');
  };

  return (
    <div className="detail-catatan">
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{note.createdAt}</p>
          <p>{note.body}</p>
          <button onClick={handleDelete}>Hapus Catatan</button>
          <button onClick={handleArchive}>Arsipkan Catatan</button>
        </>
      ) : (
        <p>Catatan tidak ditemukan.</p>
      )}
    </div>
  );
};

export default DetailCatatan;
