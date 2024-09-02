import React from 'react';
import '../styles/ArsipCatatan.css';

const ArsipCatatan = () => {
  const archivedNotes = [
    // Archived notes data
  ];

  return (
    <div className="arsip-catatan">
      <h2>Arsip Catatan</h2>
      {archivedNotes.length === 0 ? (
        <p>Arsip kosong.</p>
      ) : (
        <ul>
          {archivedNotes.map(note => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.createdAt}</p>
              <p>{note.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArsipCatatan;
