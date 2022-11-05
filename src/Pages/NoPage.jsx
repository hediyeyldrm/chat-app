import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../img/404.gif";

export default function NoPage() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="nopageImg" src={NotFound} alt="404" />
        <button className="nopageButton">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}
