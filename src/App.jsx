import React, { useState, useEffect } from "react";
import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import AddNotePopup from "./components/AddNotePopup";
import CardsList from "./components/CardsList";
import { nanoid } from "nanoid";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Search from "./components/Search";
import Header from "./components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

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
      writer:`Writer's name`,
      date: "15/06/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [addNotePopupIsOpen, setAddNotePopupIsOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  /*Checks the localstorage to see if the dark mode was enabled during last visit*/
  useEffect(() => {
    if(!localStorage.getItem("darkmode")){
      return
    }
    let darkmode = JSON.parse(localStorage.getItem("darkmode"));
    if(darkmode.isDark == true){
      setDarkMode(true);
    }
  }, []);

  // read operaton
  const getData = () => {
    setLoading(true);
    axios
      .get("https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setNotes(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const addNote = (text,writer) => {
    const date = new Date();
    const newNote = {
      id: ID,
      color1: randomColor1,
      color2: randomColor2,
      text: text,
      writer:writer,
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
    if (id == ID){
      axios.delete(
        `https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app/${id}`);
        setNotes(newNotes);
    }
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
        className={`${darkMode ? "dark-mode body-dark  " : "body"}`}
        onClick={checkIfClickedInside}
      >
        <Header handleToggleDarkMode={setDarkMode} setSearch={setSearchText} darkMode={darkMode} />
        {loading ? (
          <div
            style={{
              display: "flex",
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Player
              autoplay
              loop
              speed={1}
              src="https://assets1.lottiefiles.com/packages/lf20_p8bfn5to.json"
              style={{ height: "200px", width: "200px" }}
            ></Player>
          </div>
        ) : (
          <div className={`container ${addNotePopupIsOpen && "add-overlay"}`}>
            <div className="wrapper"></div>
            <CardsList
              notes={notes.filter((note) =>
                note.text.toUpperCase().includes(searchText.toLocaleUpperCase())
              )}
              // we need this to see if the search input is empty
              searchText={searchText}
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

            <button
              className="add-note-btn"
              style={{marginRight:"60px",marginBottom:"-2px"}}
              onClick={() => {
                setAddNotePopupIsOpen(true);
              }}
              data-target="add-quote"
            >
              <i class="fa-solid fa-plus" data-target="add-quote" title="add note"></i>
            </button>
            <div style={{margin:"0px"}} className="add-note-btn"><ScrollToTop /></div>

          </div>
        )}
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
