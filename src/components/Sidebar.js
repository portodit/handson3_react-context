import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/assets/logo-white.png" alt="Diginote Logo" className="sidebar-logo" />
      <ul className="sidebar-menu">
        <li><Link to="/catatanbaru">Catatan Baru</Link></li>
        <li><Link to="/dashboard">Daftar Catatan</Link></li>
        <li><Link to="/arsipcatatan">Arsip Catatan</Link></li>
      </ul>
      <Link to="/" className="sidebar-logout">Logout</Link>
    </aside>
  );
}

export default Sidebar;
