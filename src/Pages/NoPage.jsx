import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="nopageImg"
          src="https://www.myphukettravel.com/assets/front-end/images/404.gif"
          alt="404"
        />
        <button className="nopageButton">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}
