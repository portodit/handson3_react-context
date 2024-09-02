import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaLanguage } from 'react-icons/fa';
import lightIcon from '../assets/diginote.svg';  // Import light mode logo
import darkIcon from '../assets/diginote_white.svg';  // Import dark mode logo

import '../styles/Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="navbar" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#242424' }}>
      <div className="logo">
        <Link to="/">
          <img
            src={theme === 'light' ? lightIcon : darkIcon}
            alt="DigiNote"
            style={{
              filter: theme === 'light' ? 'drop-shadow(0 0 4px #888888)' : 'drop-shadow(0 0 4px #cacaca)',
            }}
          />
        </Link>
      </div>
      <nav>
        <Link to="/daftarcatatan">{language === 'en' ? 'Notes' : 'Daftar Catatan'}</Link>
        <Link to="/arsipcatatan">{language === 'en' ? 'Archived' : 'Arsip Catatan'}</Link>
        <Link to="/profilcreator">{language === 'en' ? 'Creator Profile' : 'Profil Creator'}</Link>
      </nav>
      <div className="toggle-icons">
        <FaLanguage onClick={toggleLanguage} />
        {theme === 'light' ? <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}
      </div>
    </div>
  );
};

export default Navbar;
