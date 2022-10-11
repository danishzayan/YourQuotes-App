import React, { useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import * as htmlToImage from "html-to-image";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ViewQuote(props) {

  const { id } = useParams();

  const [newData,setNewData] = useState({});
  
  const getParticularData = async () => {
     axios
      .get(`https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app/${id}`)
      .then((res) => {
        setNewData(res.data);
      });
  };

  useEffect(()=>{
    getParticularData();
  },[]);

  const msg = new SpeechSynthesisUtterance();
  msg.text = newData.text;
  const talk = () => {
    window.speechSynthesis.speak(msg);
  };

  // code for clipboard and toastify
  const handleCopyText = () => {
    navigator.clipboard.writeText(newData.text).then(
      (success) =>
        toast("📋 Successfully Copied Text!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      (err) => alert("Error copying text")
    );
  };

  // code for share button
  const handleShareText = () => {
    if (navigator.share) {
      navigator
        .share({
          text: `${newData.text}`,
          url: "https://your-quotess.netlify.app/",
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log("Error while using Web share API:" + err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };

  // code for convert html to image
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement("a");
    link.share = "your-quotes.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <div
        className="card"
        ref={domEl}
        style={{
          background: `linear-gradient(40deg, #${newData.color1} -200%, #${newData.color2} 150%)`,
          // border: `1px solid #${color2} 150%`,
          // boxShadow: `#${color2}  0px 0px 8px`
        }}
      >
        <div className="text">
          <i className="fas fa-quote-left"></i>
          <span>{newData.text}</span>
          <i className="fas fa-quote-right"></i>
        </div>

        <div className="footer-writer">
          <span>~ By {newData.writer ? newData.writer : "Danish"}</span>
          <div className="footer">
            <small>
              <i className="fa-solid fa-calendar-day"></i>
              {newData.date}
            </small>
            <div className="footer-icon">
              <i
                className="fa-solid fa-download"
                onClick={downloadImage}
                title="download"
              ></i>
              <i
                className="fa-solid fa-volume-up"
                onClick={talk}
                title="volume"
              ></i>
              <i
                className="fa-solid fa-share"
                onClick={handleShareText}
                title="share"
              ></i>
              <i
                className="fa-sharp fa-solid fa-copy"
                onClick={handleCopyText}
                title="copy"
              ></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => props.handleDeleteNote(newData.id)}
                title="delete"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewQuote;
