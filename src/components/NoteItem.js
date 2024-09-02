import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTrash } from 'react-icons/fa';
import '../styles/NoteItem.css';

const NoteItem = ({ note, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-item">
      <Link to={`/catatan/${note.category || 'umum'}/${note.id}`}>
        <h3>{note.title}</h3>
        <div className="note-date">
          <FaCalendarAlt />
          <span>{new Date(note.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="note-body">
          <p>{note.body.substring(0, 100)}...</p>
        </div>
      </Link>
      {onDelete && (
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
          Hapus
        </button>
      )}
    </div>
  );
};

export default NoteItem;
