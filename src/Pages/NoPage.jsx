import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";
import NotFound from "../img/404.gif";

export default function NoPage() {
  const { toggleTheme, theme } = useContext(themeContext);

  return (
    <div className={`formContainer ${theme}`}>
      <div className="formWrapper">
        <button className="theme" onClick={toggleTheme}>
          <i className="fa-solid fa-moon"></i>
        </button>
        <img className="nopageImg" src={NotFound} alt="404" />
        <button className="nopageButton">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}
