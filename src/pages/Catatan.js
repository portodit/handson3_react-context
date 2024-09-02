import React, { useState } from 'react';
import { useNotes } from '../contexts/NoteContext';
import '../styles/Catatan.css';

const Catatan = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const { addNote } = useNotes(); // Pastikan ini ada

  const handleSave = () => {
    if (body.length > 250) {
      setError('Isi catatan tidak boleh lebih dari 250 karakter.');
      return;
    }

    const newNote = {
      id: `notes-${Date.now()}`,
      title: `${title} - PORTODIT`,
      body: `${body}\n\nNama Penulis: I Putu Adhitya Pratama M`,
      category,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);
    setTitle('');
    setCategory('');
    setBody('');
    setError('');
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
        <option value="React">React</option>
        <option value="Laravel">Laravel</option>
        <option value="Kotlin">Kotlin</option>
      </select>
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSave}>Simpan Catatan</button>
      <div className="footer">
        Platform ini dibuat oleh I Putu Adhitya Pratama M
      </div>
    </div>
  );
};

export default Catatan;
