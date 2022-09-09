import React from 'react';
import Card from './Card';
import AddNote from './addNote';

const CardsList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="cards-list">
      {
        notes.map((note) => (
        <Card 
          id={note.id} 
          text={note.text} 
          date={note.date} 
          handleDeleteNote={handleDeleteNote}
        />
      ))
      }
      <AddNote handleAddNote={ handleAddNote } />
    </div>
  );
};

export default CardsList;
