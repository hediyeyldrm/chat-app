import React from "react";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function Button() {
  const { toggleTheme } = useContext(themeContext);
  return (
    <div>
      <button className="theme" onClick={toggleTheme}>
        <i className="fa-solid fa-moon"></i>
      </button>
    </div>
  );
}
