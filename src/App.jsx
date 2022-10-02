import React, { useState, useEffect } from 'react';
import './App.css';
import CardsList from './components/CardsList';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Search from './components/Search';
import Header from './components/Header';

//API Details
// 20220912223415
// https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app

function App() {

  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      color1: randomColor1,
      color2: randomColor2,
      text: 'this is the note pad app text',
      date: '15/06/2021',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  // read operaton
  const getData = () => {
    axios
      .get('https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app')
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      color1: randomColor1,
      color2: randomColor2,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(newNotes);

    //create operation
    axios.post(
      'https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app',
      newNote
    );
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    //delete operation
    axios.delete(
      `https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app/${id}`,
      setNotes(newNotes)
    );
  };

  return (
    <>
     <div className={`${darkMode && 'dark-mode'}`}>
     <Header handleToggleDarkMode={setDarkMode} />
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <CardsList
        notes={notes.filter((note)=> (note.text.toLowerCase()).includes(searchText.toLowerCase()))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
     </div>
    </>
  );
}

export default App;
