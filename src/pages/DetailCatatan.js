import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const DetailCatatan = () => {
  const { id, kategori } = useParams();
  const { isAuthenticated } = useAuth(); // Gunakan useAuth untuk mendapatkan isAuthenticated
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  if (!isAuthenticated) {
    return <p>Please log in to view this page.</p>;
  }

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h2>{language === 'en' ? 'Note Details' : 'Detail Catatan'}</h2>
      <p>{language === 'en' ? 'Category:' : 'Kategori:'} {kategori}</p>
      <p>{language === 'en' ? 'Note ID:' : 'ID Catatan:'} {id}</p>
      {/* Fetch and display note details here based on ID and category */}
    </div>
  );
};

export default DetailCatatan;
