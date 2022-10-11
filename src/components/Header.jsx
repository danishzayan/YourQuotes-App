import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


const Header = ({ handleToggleDarkMode, setSearch }) => {

  function checkIfDark() {
    let darkmode = JSON.parse(localStorage.getItem("darkmode"));

    if (!darkmode) {
      return false
    }

    if (darkmode.isDark) {
      return true
    }

    return false
  }

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <Link to="/" className="header-link"><h1 onClick={()=>{getData()}}>YourQuotes</h1></Link>
          <Search handleSearchNote={setSearch} className="sm-hide" />
          <label className="switch">

            <input
              type="checkbox"
              onClick={() => {
                handleToggleDarkMode((previousDarkMode) => {
                  let darkmode = {
                    "isDark": previousDarkMode == true ? false : true
                  }
                  localStorage.setItem("darkmode", JSON.stringify(darkmode));

                  return !previousDarkMode
                });

              }
              }

              defaultChecked={checkIfDark()}
            />

            <span className="slider round"></span>
          </label>

        </div>


      </div>
      <Search className="sm-show" handleSearchNote={setSearch} />
    </div>
  );
};

export default Header;
