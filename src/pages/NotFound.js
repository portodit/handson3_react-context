import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default NotFound;
