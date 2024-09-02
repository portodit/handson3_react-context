// DaftarCatatan.js
import React from 'react';
import { Link } from 'react-router-dom';
import notesData from '../utils/NotesData';
import '../styles/DaftarCatatan.css';

const DaftarCatatan = () => {
  return (
    <div className="daftar-catatan">
      <h2>Daftar Catatan</h2>
      {notesData.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        <ul>
          {notesData.map(note => (
            <li key={note.id}>
              <Link to={`/catatan/${note.category || 'umum'}/${note.id}`}>
                <h3>{note.title}</h3>
                <p>{new Date(note.createdAt).toLocaleDateString()}</p>
                <p>{note.body.substring(0, 100)}...</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DaftarCatatan;
