import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';

const Card = ({ id, color1, color2, text, date, handleDeleteNote }) => {
  // code for clipboard and toastify

  const msg = new SpeechSynthesisUtterance();
  msg.text = text;

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

  // code for share button
  const handleShareText = () => {
    if (navigator.share) {
      navigator
        .share({
          text: `${text}`,
          url: 'https://your-quotess.netlify.app/',
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch((err) => {
          console.log('Error while using Web share API:' + err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };

  const talk = () => {
    window.speechSynthesis.speak(msg);
  };
  // code for convert html to image
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement('a');
    link.download = 'your-quotes.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <div
        className="card"
        ref={domEl}
        style={{
          background: `linear-gradient(40deg, #${color1} -200%, #${color2} 150%)`,
        }}
      >
        <div className="text">
          <i class="fas fa-quote-left"></i>
          <span>{text}</span>
          <i class="fas fa-quote-right"></i>
        </div>
        <div className="footer-writer">
          <span>~ By Danish</span>
          <div className="footer">
            <small>
              <i className="fa-solid fa-calendar-day"></i>
              {date}
            </small>
            <div className="footer-icon">
              <i class="fa-solid fa-download" onClick={downloadImage}></i>
              <i class="fa-solid fa-volume-up" onClick={talk}></i>
              <i class="fa-solid fa-share" onClick={handleShareText}></i>
              <i class="fa-sharp fa-solid fa-copy" onClick={handleCopyText}></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => handleDeleteNote(id)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
