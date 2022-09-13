import React, { useState } from 'react';

const Card = ({ id, color1, color2, text, date, handleDeleteNote }) => {
  
  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(
      (success) => alert(`Text Copied: \n ${text}`),
      (err) => alert('Error copying text')
    );
  };

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(40deg, #${color1} -200%, #${color2} 150%)`,
      }}
    >
      <span>{text}</span>
      <div className="footer">
        <small>
          <i className="fa-solid fa-calendar-day"></i>
          {date}
        </small>
        <div className="footer-icon">
          <i class="fa-sharp fa-solid fa-copy" onClick={handleCopyText}></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDeleteNote(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
