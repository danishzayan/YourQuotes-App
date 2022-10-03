import React, { useState, useEffect } from "react";
import "./App.css";
import AddNotePopup from "./components/AddNotePopup";
import CardsList from "./components/CardsList";
import { nanoid } from "nanoid";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Search from "./components/Search";
import Header from "./components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars } from "react-loader-spinner";

//API Details
// 20220912223415
// https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app

const ID = nanoid();

function App() {
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  const [notes, setNotes] = useState([
    {
      id: ID,
      color1: randomColor1,
      color2: randomColor2,
      text: "this is the note pad app text",
      date: "15/06/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [addNotePopupIsOpen, setAddNotePopupIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // read operaton
  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: ID,
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
      "https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app",
      newNote
    );
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    //delete operation
    if (id == ID)
      axios.delete(
        `https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app/${id}`,
        setNotes(newNotes)
      );
    else
      toast("📋 This is not YourQutoes", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  const checkIfClickedInside = (e) => {
    if (
      e.target.dataset.target != "popup" &&
      e.target.dataset.target != "add-quote"
    ) {
      setAddNotePopupIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`${darkMode && "dark-mode"}`}
        onClick={checkIfClickedInside}
      >
        <Header handleToggleDarkMode={setDarkMode} />
        <div className={`container ${addNotePopupIsOpen && "add-overlay"}`}>
          <div className="wrapper"></div>
          <Search handleSearchNote={setSearchText} />
          {isLoading ? (
            <div className="loader-container">
              <Bars
                height="80"
                width="80"
                color="skyblue"
                ariaLabel="bars-loading"
              />
            </div>
          ) : (
            <CardsList
              notes={notes.filter((note) =>
                note.text.toUpperCase().includes(searchText.toLocaleUpperCase())
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          )}
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
          <button
            className="add-note-btn"
            onClick={() => {
              setAddNotePopupIsOpen(true);
            }}
            data-target="add-quote"
          >
            <i class="fa-solid fa-plus" data-target="add-quote"></i>
          </button>
        </div>
        {addNotePopupIsOpen && (
          <AddNotePopup
            handleAddNote={addNote}
            setAddNotePopupIsOpen={setAddNotePopupIsOpen}
          />
        )}
      </div>
    </>
  );
}

export default App;
