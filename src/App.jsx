import React, { useState } from 'react'
import './App.css'
import CardsList from './components/CardsList'
import { nanoid } from 'nanoid';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the note pad app text",
      date: "15/06/2021",
    },
    {
      id: nanoid(),
      text: "this is the note pad app fourth text",
      date: "11/07/2019",
    },
    {
      id: nanoid(),
      text: "this is the note pad app third text",
      date: "25/01/2021",
    },
    {
      id: nanoid(),
      text: "this is the note pad app first text",
      date: "19/03/2016",
    },
  ])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className="container">
      <CardsList 
         notes={ notes } 
         handleAddNote={ addNote } 
         handleDeleteNote={ deleteNote } 
         />
    </div>
  )
}

export default App
