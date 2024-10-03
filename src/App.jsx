//API Details
// 20220912223415
// https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import MainContent from "./components/MainContent";

function App() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [addNotePopupIsOpen, setAddNotePopupIsOpen] = useState(false);
  const [editNotePopupIsOpen, setEditNotePopupIsOpen] = useState(false);
  const handlePopupOpen = () => {
    setAddNotePopupIsOpen(true);
  };
  /*Checks the localstorage to see if the dark mode was enabled during last visit*/
  useEffect(() => {
    if (!localStorage.getItem("darkmode")) {
      return;
    }
    let darkmode = JSON.parse(localStorage.getItem("darkmode"));
    if (darkmode.isDark == true) {
      setDarkMode(true);
    }
  }, []);

  const checkIfClickedInside = (e) => {
    if (
      e.target.dataset.target != "popup" &&
      e.target.dataset.target != "add-btn"
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
        <Header
          handleToggleDarkMode={setDarkMode}
          setSearch={setSearchText}
          darkMode={darkMode}
        />
        <MainContent
          addNotePopupIsOpen={addNotePopupIsOpen}
          searchText={searchText}
          setAddNotePopupIsOpen={setAddNotePopupIsOpen}
          darkMode={darkMode}
          handlePopupOpen={handlePopupOpen}
          setEditNotePopupIsOpen={setEditNotePopupIsOpen}
          editNotePopupIsOpen={editNotePopupIsOpen}
        />
      </div>
    </>
  );
}

export default App;
