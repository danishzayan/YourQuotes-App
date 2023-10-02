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
      text: "It's YourQuotes-App",
      writer:`Writer's name`,
      date: "15/06/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [addNotePopupIsOpen, setAddNotePopupIsOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [deletedItems,setDeletedItems] = useState([]);
  const [addedItems,setAddedItems] = useState([]);

  /*Checks the localstorage to see if the dark mode was enabled during last visit*/
  useEffect(() => {
    if(!localStorage.getItem('deletedItemsList')){
      let a = [];
      localStorage.setItem('deletedItemsList',JSON.stringify(a));
    }
    if(!localStorage.getItem('addedItemsList')){
      let a = [];
      localStorage.setItem('addedItemsList',JSON.stringify(a));
    }
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
    // getting deleted items data
    let dellist = localStorage.getItem('deletedItemsList');
    dellist = JSON.parse(dellist);
    setDeletedItems(dellist);
    // getting added items data
    let addlist = localStorage.getItem("addedItemsList");
    console.log(addlist);
    addlist = JSON.parse(addlist);
    setAddedItems(addlist);
    axios
      .get("https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app")
      .then((res) => {
        setLoading(false);
        setNotes(res.data.filter(it=>!dellist.includes(it.id)));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const addNote = async (text,writer) => {
    const date = new Date();
    let newNote = {
      id: ID,
      color1: randomColor1,
      color2: randomColor2,
      text: text,
      writer:writer,
      date: date.toLocaleDateString(),
    };
    //create operation
    newNote.id = await axios.post(
      "https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app",
      newNote
    ).then(res => {return res.data.id});
    let newAddedlist = addedItems;
    newAddedlist.push(newNote.id);
    setAddedItems(newAddedlist);
    localStorage.setItem('addedItemsList',JSON.stringify(newAddedlist));
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    //delete operation
    if (addedItems.includes(id)){
      let delist = deletedItems;
      delist.push(id);
      setDeletedItems(delist);
      delist = JSON.stringify(delist);
      localStorage.setItem('deletedItemsList',delist);
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
