import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ id, color1, color2, text, date, handleDeleteNote }) => {

  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(
      (success) =>
        toast('📋 Successfully Copied Text!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      (err) => alert('Error copying text')
    );
  };
  
  const handleShareText = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${text}`,
          url: 'https://your-quotess.netlify.app/',
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch((err) => {
          console.log('Error while using Web share API:'+ err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };

  return (
    <>
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
            <i class="fa-solid fa-share" onClick={handleShareText}></i>
            <i class="fa-sharp fa-solid fa-copy" onClick={handleCopyText}></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => handleDeleteNote(id)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
