import React, { useState } from "react";

const AddNotePopup = ({ handleAddNote, setAddNotePopupIsOpen }) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setAddNotePopupIsOpen(false);
    }
  };

  return (
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
      <input type="text" placeholder="Writer Name..." data-target="popup" />
      <div className="footer" data-target="popup">
        <small data-target="popup">
          {characterLimit - noteText.length} Remaining
        </small>
        <button className="save" onClick={handleSave} data-target="popup">
          Post
        </button>
      </div>
    </div>
  );
};

export default AddNotePopup;
