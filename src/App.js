import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Catatan from './pages/Catatan';
import ArsipCatatan from './pages/ArsipCatatan';
import DetailCatatan from './pages/DetailCatatan';
import NotFound from './pages/NotFound';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import LanguageContextProvider from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catatanbaru" element={<Catatan />} />
                <Route path="/arsipcatatan" element={<ArsipCatatan />} />
                <Route path="/catatan/:kategori/:id" element={<DetailCatatan />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
