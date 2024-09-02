import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Homepage.css'; 
import Mockup from '../assets/mockup-diginote.png'; 

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <header>
        <h1>The Next Generation Notes App</h1>
        <p>Welcome to Diginote, your ultimate tool for managing notes efficiently and effectively.</p>
      </header>
      <div className="mockup-container">
        <img src={Mockup} alt="Diginote Dashboard Mockup" className="mockup-image" />
      </div>
    </div>
  );
};

export default Homepage;
