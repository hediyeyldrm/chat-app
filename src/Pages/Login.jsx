import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../img/logo1.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss";
import { auth } from "../firebase";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { toggleTheme, theme } = useContext(themeContext);

  const handleSubmit = async (e) => {
    // stop the refresh
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // login ekraninda bilgiler dogru girilirse navigate ile home sayfasina yonlendirme yapilir
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={`formContainer ${theme}`}>
      <div className="formWrapper">
        <button className="theme" onClick={toggleTheme}>
          <i className="fa-solid fa-moon"></i>
        </button>
        <span className="logo">
          Hii Chat <img src={Logo} alt="" />
        </span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
