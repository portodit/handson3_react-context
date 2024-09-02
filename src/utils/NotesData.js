// src/utils/notesData.js

const notesData = [
    {
      id: 'notes-1',
      title: "Belajar React",
      body: "React adalah library JavaScript untuk membangun antarmuka pengguna. Ini memungkinkan kita untuk membangun aplikasi web yang cepat dan interaktif.",
      archived: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'notes-2',
      title: "Pemrograman Asinkron",
      body: "Pemrograman asinkron memungkinkan kita untuk menulis kode yang tidak menghambat eksekusi tugas lainnya, sering kali digunakan dengan operasi I/O.",
      archived: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'notes-3',
      title: "JavaScript Dasar",
      body: "JavaScript adalah bahasa pemrograman yang digunakan untuk pengembangan web. Ini adalah bahasa yang harus dipelajari untuk menjadi pengembang web.",
      archived: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'notes-4',
      title: "Manajemen State di React",
      body: "State di React adalah objek yang menentukan bagaimana komponen dirender dan berperilaku.",
      archived: false,
      createdAt: new Date().toISOString(),
    },
  ];
  
  export default notesData;
  