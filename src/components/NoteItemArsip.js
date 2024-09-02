import React from 'react';
import '../styles/NoteItemArsip.css';

const NoteItemArsip = ({ note, onUnarchive }) => {
  return (
    <div className="note-item-arsip">
      <h3>{note.title}</h3>
      <p>{new Date(note.createdAt).toLocaleDateString()}</p>
      <p>{note.body}</p>
      <button onClick={() => onUnarchive(note.id)}>Batalkan Arsip</button>
    </div>
  );
};

export default NoteItemArsip;
