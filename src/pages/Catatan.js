import React, { useState } from 'react';
import '../styles/Catatan.css';

function Catatan() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    
  };

  return (
    <div className="catatan-container">
      <h2>Buat Catatan Baru</h2>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="catatan-input"
      />
      <textarea
        placeholder="Isi Catatan (Maksimal 250 karakter)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        maxLength="250"
        className="catatan-textarea"
      />
      <button onClick={handleSave} className="catatan-save-button">Simpan Catatan</button>
    </div>
  );
}

export default Catatan;
