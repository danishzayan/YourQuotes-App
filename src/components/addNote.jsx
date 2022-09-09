import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

  const [noteText, setNoteText] = useState('');
  const [cardColor, setCardColor] = useState('');

  const characterLimit = 200;
 
  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  const handleSave = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setCardColor(randomColor);
  }

  return (
    <div className="card new" style={{ backgroundColor: `#${cardColor}` }} >
      <textarea
        cols="10"
        rows="6"
        placeholder="Type to add a note..."
        onChange={ handleChange }
        value={ noteText }
      ></textarea>
      <div className="footer">
        <small>{ characterLimit - noteText.length } Remaining</small>
        <button className="save" onClick={ handleSave }>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
