import React from 'react';
import '../styles/PaginationArsip.css';

const PaginationArsip = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-arsip">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)} className="pagination-button">
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationArsip;
