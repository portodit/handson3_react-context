// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import DaftarCatatan from './pages/DaftarCatatan';
import DetailCatatan from './pages/DetailCatatan';
import ArsipCatatan from './pages/ArsipCatatan';
import ProfilCreator from './pages/ProfilCreator';
import NotFound from './pages/NotFound';
import Catatan from './pages/Catatan';
import ThemeContextProvider from './contexts/ThemeContext';
import LanguageContextProvider from './contexts/LanguageContext';
import './App.css'; 

function App() {
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/daftarcatatan" element={<DaftarCatatan />} />
              <Route path="/arsipcatatan" element={<ArsipCatatan />} />
              <Route path="/profilcreator" element={<ProfilCreator />} />
              <Route path="/catatanbaru" element={<Catatan />} />
              <Route path="/catatan/:category/:id" element={<DetailCatatan />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
