import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { themeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const { toggleTheme } = useContext(themeContext);

  return (
    <div className="navbar">
      <span className="logo">Hii Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
        <button className="theme" onClick={toggleTheme}>
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>
    </div>
  );
}
