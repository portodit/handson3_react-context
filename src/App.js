// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import DaftarCatatan from './pages/DaftarCatatan';
import DetailCatatan from './pages/DetailCatatan';
import ArsipCatatan from './pages/ArsipCatatan';
import ProfilCreator from './pages/ProfilCreator';
import NotFound from './pages/NotFound';
import Catatan from './pages/Catatan';
import notesData from './utils/NotesData';
import ThemeContextProvider from './contexts/ThemeContext';
import LanguageContextProvider from './contexts/LanguageContext';
import './App.css'; 

function App() {
  const [notes, setNotes] = useState(notesData);

  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route 
                path="/daftarcatatan" 
                element={<DaftarCatatan notes={notes} setNotes={setNotes} />} 
              />
              <Route 
                path="/arsipcatatan" 
                element={<ArsipCatatan notes={notes} />} 
              />
              <Route 
                path="/profilcreator" 
                element={<ProfilCreator />} 
              />
              <Route 
                path="/catatanbaru" 
                element={<Catatan setNotes={setNotes} />} 
              />
              <Route 
                path="/catatan/:category/:id" 
                element={<DetailCatatan notes={notes} setNotes={setNotes} />} 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
