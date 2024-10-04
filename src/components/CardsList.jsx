import {React, useEffect, useState}from "react";
import Card from "./Card";
// import AddNote from "./addNote";
import EditNotePopup from "./EditNotePopup";

const CardsList = ({ notes, handleDeleteNote, searchText  , setEditingNoteId, setEditNotePopupIsOpen , editNotePopupIsOpen, editingNoteId , handleEditNote}) => {

  const [editingtext, seteditingtext]  = useState('')

  const handleEditClick= (id)=>{
    //It has the note which we want to edit
    const noteToEdit = notes.find((note) => note.id === id)
    setEditingNoteId(noteToEdit.id)

    seteditingtext(noteToEdit.text) 

    setEditNotePopupIsOpen(true)
  }
  return (
    <div>
      {searchText !== "" && <h3>{notes.length} Results</h3>}
      <div className="cards-list">
        {[...notes].reverse().map((note) => (
          <Card
            key={note.id}
            id={note.id}
            color1={note.color1}
            color2={note.color2}
            text={note.text}
            date={note.date}
            writer={note.writer}
            handleDeleteNote={handleDeleteNote}
            handleEditClick={handleEditClick}
          />
        ))}
        {/* <AddNote handleAddNote={handleAddNote} /> */}

        {editNotePopupIsOpen && (
        <EditNotePopup
          editingNoteId={editingNoteId}
          editingtext={editingtext}
          handleEditNote={handleEditNote}
          setEditNotePopupIsOpen={setEditNotePopupIsOpen}
        />
      )}
      </div>
    </div>
  );
};

export default CardsList;
