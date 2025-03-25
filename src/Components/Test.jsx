import React, { useState } from "react";
import './Test.css'
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 10;
const totalPages = Math.ceil(items.length / itemsPerPage);

const Test = () => {
    const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) {
      alert("Error: Invalid page!");
      return;
    }
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage === 1) {
      alert("This is first Page.");
      
    } else {
      changePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage === totalPages) {
     alert("This is Last Page.");
      
    } else {
      changePage(currentPage + 1);
    }
  };
  return (
    <div className="container">
       <h1>PAGE <span>{currentPage}</span></h1>
    <div className="items-list">
      {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
        <div key={index} className="card">
          {item}
        </div>
      ))}
    </div>
    <div className="controls">
      <button onClick={handlePrev}>&laquo;</button>
      {[...Array(totalPages)].map((_, i) => (
        <button 
          key={i + 1}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => changePage(i + 1)}
        >
          {i + 1} </button>
      ))}
      <button onClick={handleNext}>&raquo;</button>
    </div>
    
  </div>
);
};

export default Test
