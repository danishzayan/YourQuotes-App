import React, { useState, useEffect } from "react";
import Search from "../components/Search";

const Header = ({ handleToggleDarkMode, setSearch, darkMode }) => {
  let darkmode = JSON.parse(localStorage.getItem("darkmode"));

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [darkMode]);

  console.log(dark);

  function checkIfDark() {
    if (!darkmode) {
      return false;
    }
    if (darkmode.isDark) {
      return true;
    }
    return false;
  }

  const toggleDarkMode = () => {
    handleToggleDarkMode((previousDarkMode) => {
      const newDarkMode = !previousDarkMode;
      const darkmode = { isDark: newDarkMode };
      localStorage.setItem("darkmode", JSON.stringify(darkmode));
      setDark(newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <nav className={`bg-white border-gray-200 ${dark ? 'dark:bg-gray-900' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${dark ? 'dark:text-white' : ''}`}>Flowbite</span>
        </a>
        <div className="flex md:order-2 space-x-4">
          <div className="relative">
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick={toggleDarkMode}
            >
              <svg id="theme-toggle-dark-icon" className={`${dark ? 'hidden' : ''} w-4 h-4`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" className={`${dark ? '' : 'hidden'} w-4 h-4`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
              <span className="sr-only">Toggle dark mode</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
        </div>
        <button
          type="button"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;



















// import React, { useState, useEffect } from "react";
// import Search from "./Search";

// const Header = ({ handleToggleDarkMode, setSearch, darkMode }) => {
//   let darkmode = JSON.parse(localStorage.getItem("darkmode"));

//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       setDark(true);
//     } else {
//       setDark(false);
//     }
//   }, [darkmode]);

//   console.log(dark);

//   function checkIfDark() {
//     if (!darkmode) {
//       return false;
//     }
//     if (darkmode.isDark) {
//       return true;
//     }
//     return false;
//   }

//   return (
//     <div className={dark ? "header-dark" : "header"}>
//       <div className="header-top flex justify-between items-center">
//         <div className="header-left">
//           <h1 className="text-2xl font-bold">YourQuotes</h1>
//         </div>
//         <div className="header-right flex items-center">
//           <Search handleSearchNote={setSearch} className="sm-hide" />
//           <label className="switch">
//             <input
//               type="checkbox"
//               onClick={() => {
//                 handleToggleDarkMode((previousDarkMode) => {
//                   let darkmode = {
//                     isDark: previousDarkMode === true ? false : true,
//                   };
//                   localStorage.setItem("darkmode", JSON.stringify(darkmode));
//                   return !previousDarkMode;
//                 });
//               }}
//               defaultChecked={checkIfDark()}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       </div>
//       <Search className="sm-show" handleSearchNote={setSearch} />
//     </div>
//   );
// };

// export default Header;
