import React from 'react';
import '../styles/ProfilCreator.css';

const ProfilCreator = () => {
  return (
    <div className="profil-creator">
      <h2 className="about-headline">Tentang DigiNote</h2>
      <p className="about-description">
        Halo! 👋 Selamat datang di halaman "Tentang Kami". Platform ini, yaitu <strong>DigiNote</strong>, dikembangkan sebagai aplikasi catatan modern berbasis web.
        DigiNote menyediakan berbagai fitur seperti pembuatan catatan baru, pengarsipan, dan penghapusan catatan dengan dukungan mode light dan dark. Aplikasi ini juga dilengkapi dengan pencarian catatan dan pengelolaan arsip, memungkinkan pengguna untuk mengelola catatan dengan cara yang terorganisir dan efektif. Dengan antarmuka minimalis dan responsif, DigiNote bertujuan untuk meningkatkan produktivitas dan efisiensi dalam pengelolaan catatan sehari-hari 🚀.
      </p>

      <h3 className="about-subheadline">Tentang Developer</h3>
      <p className="about-description">
        Nama: <strong>I Putu Adhitya Pratama Mangku Purnama</strong><br />
        Jurusan: <strong>Sistem Informasi</strong><br />
        Instansi: <strong>Institut Teknologi Sepuluh Nopember</strong>
      </p>
    </div>
  );
};

export default ProfilCreator;
