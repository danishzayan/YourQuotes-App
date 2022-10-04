import React from "react";
import Card from "./Card";
import AddNote from "./addNote";

const CardsList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="cards-list">
      {[...notes].reverse().map((note) => (
        <Card
          id={note.id}
          color1={note.color1}
          color2={note.color2}
          text={note.text}
          date={note.date}
          writer={note.writer}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      {/* <AddNote handleAddNote={handleAddNote} /> */}
    </div>
  );
};

export default CardsList;
