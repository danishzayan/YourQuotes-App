import React,{useState,useEffect} from "react";
import Search from "./Search";
const Header = ({ handleToggleDarkMode, setSearch, darkMode}) => {
  let darkmode = JSON.parse(localStorage.getItem("darkmode"));

  const [dark,setDark] = useState(false);

useEffect(()=>{

  if(darkMode){
    setDark(true)
  }else{
    setDark(false);
  }
},[darkmode])
console.log(dark)
  function checkIfDark() {

    if (!darkmode) {

      return false
    }

    if (darkmode.isDark) {
  
      return true
    }
 
    return false
  }

  return (
 
    <div className={dark ? "header-dark" : "header"}>
      <div className="header-top">
        <div className="header-left">
          <h1>YourQuotes</h1>
        </div>

        <div className="header-right">
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
