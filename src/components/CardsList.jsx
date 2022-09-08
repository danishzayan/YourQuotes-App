import React from 'react';
import Card from './Card';

const CardsList = ({ notes }) => {
  return (
    <div className="cards-list">
      {notes.map((note) => (
        <Card 
             id={note.id} 
             text={note.text} 
             date={note.date}
             />
      ))}
    </div>
  );
};

export default CardsList;
