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

  return (
    <div className="container">
      <CardsList notes={ notes }/>
    </div>
  )
}

export default App
