import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import LoginButton from "./LoginButton";
import { Tooltip } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Header = ({ handleToggleDarkMode, setSearch, darkMode }) => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  const isLoggedIn = user ? true : false;
  useEffect(() => {
    if (darkMode) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [darkMode]);

  useEffect(()=>{
    if(user){
      toast(`Welcome ${user.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  },[isLoggedIn]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const access_token = localStorage.getItem("token");
      async function getUser() {
        try{
          const res = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          setUser(res.data);
        }catch(err){
          console.log(err);
        }

      }
      getUser();
  }
  }, []);

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
    <nav
      className={`border-b ${
        dark ? "dark:border-gray-600 bg-black" : "bg-white border-gray-200"
      }`}
    >
      <ToastContainer />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Quote_Mining_Fallacy_Icon.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              dark ? "dark:text-white" : ""
            }`}
          >
            YourQutoes
          </span>
        </a>
        <div className="flex md:order-2 space-x-4">
          <div className="relation">
            <a
              href="https://github.com/danishzayan/YourQuotes-App"
              data-tooltip-target="tooltip-github-2"
              className="hidden sm:inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-[1.1rem] h-[1.1rem]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">View on Github</span>
            </a>
          </div>
          <div className="relative">
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick={toggleDarkMode}
            >
              <svg
                id="theme-toggle-dark-icon"
                className={`${dark ? "hidden" : ""} w-4 h-4`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`${dark ? "" : "hidden"} w-4 h-4`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
              <span className="sr-only">Toggle dark mode</span>
            </button>
          </div>

          <div className="relative">
            <Search handleSearchNote={setSearch} />
          </div>
          <div className="relative">
            <LoginButton setUser={setUser} isLoggedIn={isLoggedIn} />
          </div>
          {isLoggedIn && (
            <div className="relative">
              <Tooltip title={user.name}>
                <img
                  src={user.picture}
                  alt="user picture"
                  className="rounded-full w-10"
                />
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
