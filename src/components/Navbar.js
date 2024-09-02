import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/assets/logo.png" alt="Diginote Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Feature</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <Link to="/login" className="navbar-login">Login</Link>
    </nav>
  );
}

export default Navbar;
