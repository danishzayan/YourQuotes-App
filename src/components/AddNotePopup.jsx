import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddNotePopup = ({ handleAddNote, setAddNotePopupIsOpen }) => {

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

  return (
    <>
      <ToastContainer />
      <div className="card new popup" data-target="popup">
        <h1 className="popup-title" data-target="popup">
          Add a YourQuote
        </h1>
        <textarea
          cols="10"
          rows="6"
          onChange={handleChange}
          value={noteText}
          data-target="popup"
        ></textarea>
        <input type="text" placeholder="Writer Name..." data-target="popup" value={noteWriter} onChange={(e) => { setNoteWriter(e.target.value) }} />
        <div className="footer" data-target="popup">
          <small data-target="popup">
            {characterLimit - noteText.length} Remaining
          </small>
          <button className="save" onClick={handleSave} data-target="popup">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNotePopup;
