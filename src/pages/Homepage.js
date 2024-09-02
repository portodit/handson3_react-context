import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';
import mockupImage from '../assets/mockup-diginote.png.png';
import { LanguageContext } from '../contexts/LanguageContext';

const Homepage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="homepage">
      <h1>{language === 'en' ? 'The Next Generation Notes App' : 'Aplikasi Catatan Generasi Berikutnya'}</h1>
      <p>{language === 'en' ? 'Manage your notes efficiently with Diginote.' : 'Kelola catatan Anda dengan efisien menggunakan Diginote.'}</p>
      <img src={mockupImage} alt="Diginote Dashboard" className="dashboard-mockup" />
      <Link to="/catatanbaru" className="new-note-btn">
        <span className="icon">+</span>
        <span className="text">{language === 'en' ? 'Add New Note' : 'Tambah Catatan Baru'}</span>
      </Link>
    </div>
  );
};

export default Homepage;
