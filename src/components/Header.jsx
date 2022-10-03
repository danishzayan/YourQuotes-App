import React from "react";
import Search from "./Search";
const Header = ({ handleToggleDarkMode, setSearch }) => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <h1>YourQuotes</h1>
          <Search handleSearchNote={setSearch} className="sm-hide" />
        </div>
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
      <Search className="sm-show" handleSearchNote={setSearch} />
    </div>
  );
};

export default Header;
