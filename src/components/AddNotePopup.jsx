import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddNotePopup = ({ handleAddNote, setAddNotePopupIsOpen }) => {

  let [color, setColor] = useState("green");
  const [noteText, setNoteText] = useState("");
  const [noteWriter, setNoteWriter] = useState("");

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteWriter);
      setNoteText("");
      setAddNotePopupIsOpen(false);
    }
    else {
      toast.error('Couldn\'t add an empty..', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  
  const getRandomColor = () => {
    let color = "#";
    for(let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    setColor(color);
  };

  useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className={`size-96 fixed m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-md shadow-2xl`} style={{backgroundImage: `linear-gradient(${color}, ${color})`}} data-target="popup">
        <h1 className="popup-title text-white" style={{color: 'white', fontSize: '1.5rem'}} data-target="popup">
          Add your quote
        </h1>
        <textarea
          cols="10"
          rows="6"
          onChange={handleChange}
          value={noteText}
          data-target="popup"
          className={`h-[50%] text-black font-mono font-bold p-2 rounded-md w-[100%]`}
        ></textarea>
        <input type="text" placeholder="Writer Name..." data-target="popup" value={noteWriter} onChange={(e) => { setNoteWriter(e.target.value) }} className={`text-white placeholder:text-white p-2 rounded-md w-[100%] bg-gray-400`} />
        <div className="footer h-8" data-target="popup" style={{backgroundColor: 'goldenrod', color: 'black'}} >
          <small data-target="popup" className="text-white font-mono font-extrabold" style={{color: 'white', fontWeight: 'bold', fontSize: '1.1rem'}}>
            {characterLimit - noteText.length} Remaining
          </small>
          <button onClick={handleSave} data-target="popup" className="h-8 bg-white text-black px-8 right-0 hover:bg-black hover:text-white font-bold transition-all duration-500 float-right rounded-md">
            Post  
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNotePopup;
