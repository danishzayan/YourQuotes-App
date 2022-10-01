import React from "react";
import Search from "./Search";
const Header = ({ handleToggleDarkMode, setSearch }) => {
  return (
    <div className="header">
      <h1>YourQuotes</h1>
      <Search handleSearchNote={setSearch} />
      <label className="switch">
        <input
          type="checkbox"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        />

        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Header;
