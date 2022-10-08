import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
const Header = ({ handleToggleDarkMode, setSearch, getData }) => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <Link to="/" className="header-link"><h1 onClick={()=>{getData()}}>YourQuotes</h1></Link>
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
