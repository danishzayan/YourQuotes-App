import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginButton({setUser,isLoggedIn}) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        localStorage.setItem("token",tokenResponse.access_token);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setUser(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const logout = () =>{
    setUser(null);
    localStorage.removeItem("token");
  }
  return (
    <div>
      <button
        type="button"
        className="text-white h-[36px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => {
          if(isLoggedIn){
            logout();
          }else{
            login()
          }
        }}
      >
        {isLoggedIn ? "LOGOUT" : "LOGIN"}
      </button>
    </div>
  );
}
