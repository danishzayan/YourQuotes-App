import React from "react";
import Card from "./Card";
import AddNote from "./addNote";

const CardsList = ({ notes, handleAddNote, handleDeleteNote,searchText }) => {
  return (
    <div>
      {searchText !== "" && <h1>{notes.length} results</h1>}
    <div className="cards-list">
      {notes.map((note) => (
        <Card
          id={note.id}
          color1={note.color1}
          color2={note.color2}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      {/* <AddNote handleAddNote={handleAddNote} /> */}
    </div>
    </div>
  );
};

export default CardsList;
