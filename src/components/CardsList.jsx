import React from "react";
import Card from "./Card";


const CardsList = ({ notes, handleAddNote, handleDeleteNote, searchText, getNewData }) => {

  return (
    <div>
      {searchText !== "" && <h3>{notes.length} Results</h3>}
      <div className="cards-list">
        {[...notes].reverse().map((note, e) => {
          return (
            <div>
              <Card
                key={e}
                id={note.id}
                color1={note.color1}
                color2={note.color2}
                text={note.text}
                date={note.date}
                writer={note.writer}
                handleDeleteNote={handleDeleteNote}
                getNewData={(id)=>getNewData(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
