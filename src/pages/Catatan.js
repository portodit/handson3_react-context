import React, { useState } from 'react';
import '../styles/Catatan.css';

const Catatan = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (body.length > 250) {
      setError('Isi catatan tidak boleh lebih dari 250 karakter.');
      return;
    }

    // Logic to save note here
  };

  return (
    <div className="catatan-form">
      <h2>Buat Catatan Baru</h2>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Pilih Kategori</option>
        <option value="kategori1">Kategori 1</option>
        <option value="kategori2">Kategori 2</option>
      </select>
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSave}>Simpan Catatan</button>
    </div>
  );
};

export default Catatan;
