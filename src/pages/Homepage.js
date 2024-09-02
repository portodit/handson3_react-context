import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>The Next Generation Notes App</h1>
      <p>Manage your notes efficiently with Diginote.</p>
      <img src="/assets/mockup-diginote.png" alt="Diginote Dashboard" className="dashboard-mockup" />
      <Link to="/catatanbaru" className="new-note-btn">+ New Note</Link>
    </div>
  );
};

export default Homepage;
